# BC Ballot 2026

Voter guides for two 2026 British Columbia elections, a week apart:

- `municipal/`: the 17 October general local elections. Every nominated candidate for mayor, council, park board and school board in seven municipalities: Vancouver, Richmond, Delta, City and District of North Vancouver, Victoria and Nanaimo. 415 candidates, 107 seats.
- `provincial/`: the 24 October provincial general election. Every nominated MLA candidate in the 26 electoral districts that cover the same seven cities.

`index.html` links to both. Each page is a single self-contained file: no server, no CDN scripts. The only external request is Google Fonts, and it falls back to system fonts without them.

## Editing

Do not hand-edit the generated HTML. Edit the parts in `src/` and run `src/build.sh`, which rebuilds all three pages.

| File | Holds |
|---|---|
| `shared/style.css` | CSS for every page |
| `shared/guide.js` | rendering, filters, shortlist, print |
| `chooser.html` | the landing page |
| `<guide>/page.html` | markup and prose sections |
| `<guide>/config.js` | jurisdictions, races, parties, election date, and the other constants `guide.js` reads |
| `municipal/van_data.js` | `C`: Vancouver candidates |
| `municipal/extra_data.js` | `X`: the other six municipalities |
| `municipal/school_data.js` | `S`: school board candidates |
| `municipal/record_data.js` | `R` and `P`: record entries, promise entries, searched-clear list |
| `provincial/data.js` | `M`: MLA candidates |

Three checks live in `src/`. Run all of them after every change.

| Check | Covers |
|---|---|
| `check-render.js` | Runs each guide's script against its real element IDs and reports anything referenced but missing, plus whether the roster rendered. A null element reference silently blanks the page. |
| `check-logic.js` | Drives the real page functions against the municipal candidate data: the Print button count, and the cross-ballot search hint including its agreement with the active race filter. |
| `check-stickybar.js` | Captures the page's own listeners and replays a scroll sequence. Covers the sticky bar hiding itself, which the render check cannot reach. |

```bash
for f in src/check-*.js; do node "$f" || break; done
```

## Data provenance

Municipal candidate lists come from each municipality's own official candidate page, cross-checked against localelections.ca and votemate.org. Current to 18 September 2026, after the 4pm withdrawal deadline and the 5pm ballot draw.

For the local elections, the Elections BC "Registered Candidates" PDF is a campaign-financing snapshot and is incomplete: it omitted 34 of Vancouver's 99 candidates. Do not use it as a source.

Record and promise entries are tagged by evidence strength (Finding / Filed / Reported) and every one links to its source. Excluded: anything not traceable to a named outlet or a body with jurisdiction.

Provincial candidate lists come from Elections BC, which runs provincial elections. District coverage follows Elections BC's 2023 redistribution.
