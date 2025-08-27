import { track } from "@vercel/analytics";

/**
 * Analytics tracking utilities for publication interactions
 *
 * This module provides tracking functions for various publication-related actions
 * using Vercel Analytics. It tracks paper downloads, DOI clicks, BibTeX downloads,
 * and other publication interactions with detailed metadata.
 *
 * @example
 * ```typescript
 * import { trackPdfView } from '~/lib/analytics';
 *
 * // Track when a user clicks on a paper PDF link
 * trackPdfView({
 *   publicationTitle: "My Research Paper",
 *   publicationType: "conference",
 *   publicationYear: 2024,
 *   citationKey: "Author2024",
 *   venue: "IEEE Conference",
 *   pdfType: "paper"
 * });
 * ```
 */

export interface PublicationTrackingData {
  publicationTitle: string;
  publicationType: "conference" | "journal" | "workshop" | "thesis";
  publicationYear: number;
  linkType: "paper" | "poster" | "slides" | "doi" | "bibtex";
  citationKey?: string;
  venue?: string;
}

/**
 * Track publication link clicks with detailed metadata
 */
export function trackPublicationLink(data: PublicationTrackingData) {
  track("Publication Link Click", {
    title: data.publicationTitle,
    type: data.publicationType,
    year: data.publicationYear.toString(),
    link_type: data.linkType,
    citation_key: data.citationKey || "",
    venue: data.venue || "",
  });
}

/**
 * Track BibTeX downloads specifically
 */
export function trackBibtexDownload(
  data: Omit<PublicationTrackingData, "linkType">,
) {
  track("BibTeX Download", {
    title: data.publicationTitle,
    type: data.publicationType,
    year: data.publicationYear.toString(),
    citation_key: data.citationKey || "",
    venue: data.venue || "",
  });
}

/**
 * Track PDF views (paper or poster)
 */
export function trackPdfView(
  data: Omit<PublicationTrackingData, "linkType"> & {
    pdfType: "paper" | "poster";
  },
) {
  track("Publication PDF View", {
    title: data.publicationTitle,
    type: data.publicationType,
    year: data.publicationYear.toString(),
    pdf_type: data.pdfType,
    citation_key: data.citationKey || "",
    venue: data.venue || "",
  });
}

/**
 * Track DOI clicks
 */
export function trackDoiClick(
  data: Omit<PublicationTrackingData, "linkType"> & { doi: string },
) {
  track("DOI Link Click", {
    title: data.publicationTitle,
    type: data.publicationType,
    year: data.publicationYear.toString(),
    doi: data.doi,
    citation_key: data.citationKey || "",
    venue: data.venue || "",
  });
}

/**
 * Track slides views specifically
 */
export function trackSlidesView(
  data: Omit<PublicationTrackingData, "linkType">,
) {
  track("Publication Slides View", {
    title: data.publicationTitle,
    type: data.publicationType,
    year: data.publicationYear.toString(),
    citation_key: data.citationKey || "",
    venue: data.venue || "",
  });
}
