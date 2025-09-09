#!/usr/bin/env node

import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_REPO = "soconnor0919/resume-cv";
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const PUBLICATIONS_DIR = path.join(PUBLIC_DIR, "publications");

// Ensure publications directory exists
if (!fs.existsSync(PUBLICATIONS_DIR)) {
  fs.mkdirSync(PUBLICATIONS_DIR, { recursive: true });
}

// PDF files to download
const PDF_FILES = [
  {
    name: "cv.pdf",
    url: `https://github.com/${GITHUB_REPO}/releases/download/latest/cv.pdf`,
    description: "Academic CV",
  },
  {
    name: "resume.pdf",
    url: `https://github.com/${GITHUB_REPO}/releases/download/latest/resume.pdf`,
    description: "Professional Resume",
  },
];

/**
 * Download a file from URL to local path
 */
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${url}...`);

    const file = fs.createWriteStream(outputPath);

    https
      .get(url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          file.close();
          fs.unlinkSync(outputPath);
          return downloadFile(response.headers.location, outputPath)
            .then(resolve)
            .catch(reject);
        }

        if (response.statusCode !== 200) {
          file.close();
          fs.unlinkSync(outputPath);
          return reject(
            new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`),
          );
        }

        // Check content type (GitHub serves PDFs as application/octet-stream)
        const contentType = response.headers["content-type"];
        if (
          contentType &&
          !contentType.includes("application/pdf") &&
          !contentType.includes("application/octet-stream")
        ) {
          file.close();
          fs.unlinkSync(outputPath);
          return reject(
            new Error(`Expected PDF but got content-type: ${contentType}`),
          );
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`✓ Downloaded ${path.basename(outputPath)}`);
          resolve();
        });

        file.on("error", (err) => {
          file.close();
          fs.unlinkSync(outputPath);
          reject(err);
        });
      })
      .on("error", (err) => {
        file.close();
        fs.unlinkSync(outputPath);
        reject(err);
      });
  });
}

/**
 * Main function to download all PDFs
 */
async function updatePDFs() {
  console.log("Updating PDFs from GitHub releases...\n");

  try {
    for (const pdf of PDF_FILES) {
      const outputPath = path.join(PUBLICATIONS_DIR, pdf.name);

      try {
        await downloadFile(pdf.url, outputPath);

        // Verify the file was downloaded and has content
        const stats = fs.statSync(outputPath);
        if (stats.size === 0) {
          throw new Error("Downloaded file is empty");
        }

        console.log(`  Size: ${(stats.size / 1024).toFixed(1)} KB`);
        console.log(`  Path: ${path.relative(process.cwd(), outputPath)}\n`);
      } catch (error) {
        console.error(`✗ Failed to download ${pdf.name}: ${error.message}\n`);
        process.exitCode = 1;
      }
    }

    if (process.exitCode !== 1) {
      console.log("✓ All PDFs updated successfully!");
    }
  } catch (error) {
    console.error("Failed to update PDFs:", error.message);
    process.exit(1);
  }
}

// Run the script if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  updatePDFs();
}

export { updatePDFs };
