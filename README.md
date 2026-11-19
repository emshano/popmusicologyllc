# PopMusicology website

A portable static website based on the supplied PopMusicology, LLC design brief. No framework, npm dependencies, backend, accounts, or build step required.

## Preview locally

Open `index.html` directly in your browser. Navigation, articles, and downloads work without a server.

Alternatively, from this folder on macOS:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. Press Control-C to stop the server.

## Upload to your hosting provider

Upload the contents of this folder, keeping the same directory structure. `index.html` should be at your website's document root. This also works on GitHub Pages and other static hosts. There are no absolute-root asset paths, so hosting in a subdirectory works.

## Files and editing

- `index.html`: homepage.
- `scholarship.html`: Dionne Warwick research and release-scholarship layout.
- `students.html`: Fall 2024 and Spring 2025 student collections.
- `releases.html`: tape label and future-release layout.
- `about.html`: organization, founder, and contact details.
- Other HTML files: individual reading pages for 14 supplied works/collections.
- `styles.css`: responsive design, shared colors, typography, and print styles. Edit the variables at the top to adjust the palette.
- `app.js`: mobile navigation.
- `assets/`: favicon and manuscript images extracted from the supplied documents.
- `downloads/`: original manuscripts, PDFs, presentation, spreadsheet indexes, and zipped student collection.
- `content.json`: extracted content reference. Editing this does not automatically update the HTML.

To add an essay, copy an existing reading page and replace its title and article text. Shared navigation/footer appear in each HTML file; edit all pages if changing them.

## Editorial decisions and remaining content

The design uses the brief's warm paper, burgundy, blue, archival chart numbering, and editorial typography. Website copy derives from the supplied brief. Supplied manuscripts retain their draft language; rendered text is not a fact-checked or copyedited publication. Embedded manuscript images appear after the text rather than in their original Word positions. Original downloads preserve original layout, footnotes, hyperlinks, and formatting.

Cassette shell/J-card images were not supplied. The scholarship and label pages contain visibly identified image placeholders and the requested dummy text. Lysaker's actual framing questions were not supplied; their location is marked rather than inventing or attributing a quotation. Replace these before announcing releases. No release dates, prices, inventory, or catalog entries were invented.

The tape label has no checkout or payment integration. Release inquiries open an email to the supplied contact. There is no mailing list or contact-form backend. PDFs and PowerPoint research are offered as downloads in their original formats. Student spreadsheet indexes and original Spring ZIP are preserved as downloads; submissions are also provided as reading pages when supplied as DOCX. Other file formats remain in the original ZIP.

Founder affiliation and contact details match the brief. This delivery covers the website; print business cards and logo design variants described in the brief are not included. The favicon and typographic site masthead are provisional website branding.

## Validation

Checked JavaScript syntax and every internal page, image, and download path. Browser validation status is reported in the delivery message.
