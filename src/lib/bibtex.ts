export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  paperUrl?: string;
  posterUrl?: string;
  abstract?: string;
  citationType?: string;
  citationKey?: string;
  type: 'conference' | 'journal' | 'workshop' | 'thesis';
};

type BibTeXEntry = {
  type: string;
  fields: Record<string, string>;
  citationKey: string;
};

function parseAuthors(authorString: string): string[] {
  return authorString
    .split(' and ')
    .map(author => author.trim())
    .map(author => {
      if (author.includes(',')) {
        const [lastName, firstName] = author.split(',').map(s => s.trim());
        return `${firstName} ${lastName}`;
      }
      return author;
    });
}

function parseBibTeXEntry(entry: string): BibTeXEntry | null {
  // Match the entry type and content
  const typeMatch = entry.match(/^(\w+)\s*{\s*([\w\d-_]+)\s*,/);
  if (!typeMatch) return null;

  const type = typeMatch[1]!.toLowerCase();
  const citationKey = typeMatch[2];
  const content = entry.slice(typeMatch[0].length);

  const fields: Record<string, string> = {};
  let currentField = '';
  let buffer = '';

  // Split into lines and process each line
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine === '}') continue;

    // Try to match a new field
    const fieldMatch = trimmedLine.match(/(\w+)\s*=\s*{(.+?)},?$/);
    if (fieldMatch?.[1] && fieldMatch?.[2]) {
      // Save previous field if exists
      if (currentField) {
        fields[currentField] = buffer.trim();
      }
      // Start new field
      currentField = fieldMatch[1].toLowerCase();
      buffer = fieldMatch[2];
    } else if (currentField) {
      // Continue previous field
      buffer += ' ' + trimmedLine.replace(/},$/, '');
    }
  }

  // Save last field if exists
  if (currentField) {
    fields[currentField] = buffer.trim();
  }

  return { type, fields, citationKey: citationKey! };
}

export function parseBibtex(bibtex: string): Publication[] {
  const entries = bibtex
    .split('@')
    .slice(1) // Skip first empty element
    .map(entry => parseBibTeXEntry(entry))
    .filter((entry): entry is BibTeXEntry => entry !== null);

  return entries.map(entry => {
    const publicationType = (() => {
      switch (entry.type) {
        case 'inproceedings':
        case 'conference':
          return 'conference';
        case 'article':
          return 'journal';
        case 'mastersthesis':
          return 'thesis';
        case 'workshop':
          return 'workshop';
        default:
          return 'journal';
      }
    })();

    return {
      title: entry.fields.title?.replace(/[{}]/g, '') || '',
      authors: parseAuthors(entry.fields.author || ''),
      venue: entry.fields.booktitle || entry.fields.journal || '',
      year: parseInt(entry.fields.year || '0', 10),
      doi: entry.fields.doi,
      url: entry.fields.url,
      paperUrl: entry.fields.paperurl,
      posterUrl: entry.fields.posterurl,
      abstract: entry.fields.abstract,
      citationType: entry.type,
      citationKey: entry.citationKey,
      type: publicationType
    };
  });
}