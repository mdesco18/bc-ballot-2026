# Changelog

Dated rather than versioned. The page is a guide to one election on one date, so a release number would carry no information a date does not.

## Unreleased

### Added

- Provincial election guide at `provincial/`, for the 24 October 2026 general election. Covers the 26 electoral districts that include any part of the seven cities in the local guide. Districts are grouped by city in a native select, because 26 do not fit as tabs. Candidates appear once nominations close.
- Landing page at the site root that links to both guides.
- Link back to the landing page at the top of both guides.
- Favicon: the shortlist checkmark on the site green, inline in each page.

### Changed

- The local elections guide moved to `municipal/`. Shortlist marks are kept, because both guides are on the same origin and the storage key is unchanged.
- Both guides are built from one stylesheet and one script. Each guide supplies its markup, data and a small config.

## 2026-09-18

### Added

- Collapsible cards for the explanatory sections below the candidate list, so the reference material no longer sits between the reader and the bottom of the page.
- Live marked count in each race header, next to the seat limit. It turns red and reads "drop 2" past the limit. The print sheet has always carried this warning, but only once the sheet is open, which is after the choices are made.
- Marked total on the Print button, counted across every municipality to match what the sheet produces. Counted through the candidate list, so a mark left behind by a withdrawn candidate is not advertised.
- Cross-ballot search hint. A search only looks inside the current tab, so a name on another ballot used to read as "no matches". The empty state now names the other ballot and offers a jump to it. The City and District of North Vancouver are separate ballots that people mix up, which is when this matters.
- Contact link in the closing card, for feedback, questions and corrections.
- `src/check-logic.js`: drives the real page functions against the real candidate data. Covers the print count and the cross-ballot hint.
- `src/check-stickybar.js`: captures the page's own listeners and replays a scroll sequence, to cover behaviour the render check cannot reach.

### Changed

- "Why this exists" moved from a band under the masthead to the last card at the bottom. The page now opens on the countdown, the municipality tabs and the candidates.
- Trimmed the three reference sections. Every claim kept. The two tag vocabularies in the methodology card became lists instead of dense paragraphs.
- Sticky bar auto-hide now applies only below 820px, and only once the bar is pinned. It used to slide away on a desktop viewport and while still sitting in normal flow.
- Race tabs wrap on narrow screens instead of sitting in one fixed row.
- "Clear marks here" now takes two clicks. Marks live in local storage alone and there is no undo, so a single click used to discard the only thing a reader creates here.

### Fixed

- Race tab selector was clipped on narrow screens. Five buttons at mobile type need about 520px and a 360px phone offers about 328px, and the overflow was hidden rather than wrapped.
- Opening the filter panel made the sticky bar hide itself. The panel sits inside the bar, so toggling it changes the bar's height, the browser corrects the scroll position to keep the page steady, and that correction arrived as an ordinary scroll event indistinguishable from a downward flick. Anything that resizes the bar now declares it first. A resize observer cannot catch this on its own: scroll events are dispatched before resize observer callbacks in the rendering loop.
- "Why this exists" stayed on screen behind the printable shortlist, being the one block outside `<main>`.

## 2026-09-17

Initial release, published to GitHub Pages and as a Claude artifact.

- Every nominated candidate for mayor, council, park board and school board in Vancouver, Richmond, Delta, City and District of North Vancouver, Victoria and Nanaimo. 415 candidates, 107 seats.
- Per-municipality tabs, race and party filters, name search.
- Markable shortlist held in local storage, with a printable sheet that groups picks by municipality and race and warns on over-voting.
- Record and promise notes, dated and linked, tagged by kind and by evidence strength. No score and no ranking, because coverage follows scrutiny rather than conduct.
- Vancouver's five ballot questions, the park board history and the mayoral field.
- Mobile legibility and accessibility pass, and a filter bar that hides on scroll.
- `src/build.sh` emits a complete standalone document. The parts in `src/` are authored as a fragment for the artifact platform, which supplies the doctype, `<head>` and `<body>` itself. Static hosting needs all of that written out, plus the viewport meta, without which a phone renders the page at about 980px and scales it down.
