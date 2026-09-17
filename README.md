# BC Ballot 2026

A single-file voter guide for the 17 October 2026 BC general local elections. Covers every
nominated candidate for mayor, council, park board and school board in seven municipalities:
Vancouver, Richmond, Delta, City and District of North Vancouver, Victoria and Nanaimo.
415 candidates, 107 seats.

`index.html` is the whole site. No build step, no server, no CDN scripts. Open it
locally or drop it on any static host. The only external request is Google Fonts, and it
falls back to system fonts without them.

Also published at https://claude.ai/artifact/F2epaMFDVvafAvAjcCxx7x

## Editing

Do not hand-edit `index.html`. Edit the parts in `src/` and run `src/build.sh`.

| File | Holds |
|---|---|
| `head.html` | markup, CSS, the prose sections |
| `van_data.js` | `C` — Vancouver candidates |
| `extra_data.js` | `X` — the other six municipalities |
| `school_data.js` | `S` — school board candidates |
| `record_data.js` | `R` and `P` — record entries, promise entries, searched-clear list |
| `tail.js` | rendering, filters, shortlist, print |

`src/check-render.js` runs the page's script against the real element IDs and reports
anything referenced but missing, plus whether the roster rendered. Run it after every change:
a null element reference silently blanks the page.

## Data provenance

Candidate lists come from each municipality's own official candidate page, cross-checked
against localelections.ca and votemate.org. Current to 18 September 2026, after the 4pm
withdrawal deadline.

The Elections BC "Registered Candidates" PDF is a campaign-financing snapshot and is
incomplete: it omitted 34 of Vancouver's 99 candidates. Do not use it as a source.

Record and promise entries are tagged by evidence strength (Finding / Filed / Reported) and
every one links to its source. Excluded: anything not traceable to a named outlet or a body
with jurisdiction.
