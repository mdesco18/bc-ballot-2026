#!/usr/bin/env bash
# Rebuilds every page from the parts in this directory:
#   ../index.html             chooser.html, no script
#   ../municipal/index.html   municipal/*
#   ../provincial/index.html  provincial/*
# Each guide is shared/style.css + its own page.html markup + its data and config.js + shared/guide.js.
#
# GitHub Pages serves each file raw, so this script writes the whole document: without the
# viewport meta a phone renders the page at ~980px and scales it down; without the doctype
# the browser drops into quirks mode; without [hidden]{display:none!important} the
# .fbtn display:flex rule defeats the hidden attribute and the "back to top" button never hides.
set -euo pipefail
cd "$(dirname "$0")"

# build <out> <title> <description> <markup> [script parts...]
build(){
  local out=$1 title=$2 desc=$3 markup=$4; shift 4
  mkdir -p "$(dirname "$out")"
  {
    cat <<HTML
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="description" content="$desc">
<style>
  :root{color-scheme:light dark;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
  body{margin:0}
  img{max-width:100%}
  [hidden]{display:none !important}
</style>
<title>$title</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">

<style>
HTML
    cat shared/style.css
    echo '</style>'
    echo '</head>'
    echo '<body>'
    echo
    cat "$markup"
    if [ $# -gt 0 ]; then
      echo '<script>'
      for f in "$@"; do cat "$f"; echo; done
      echo '</script>'
    fi
    echo '</body>'
    echo '</html>'
  } > "$out"

  if [ $# -gt 0 ]; then
    # A syntax error in the script block blanks the whole page, so fail loudly.
    local tmp; tmp=$(mktemp --suffix=.js)
    sed -n '/^<script>$/,/^<\/script>$/p' "$out" | sed '1d;$d' > "$tmp"
    node --check "$tmp"
    rm -f "$tmp"
  fi
  echo "built $out  ($(wc -c < "$out") bytes)"
}

build ../index.html "BC Ballot 2026" \
  "Candidate guides for the 2026 British Columbia local and provincial elections." \
  chooser.html

build ../municipal/index.html "BC Ballot 2026: local elections" \
  "Every nominated candidate for mayor, council, park board and school board in seven British Columbia municipalities voting on 17 October 2026." \
  municipal/page.html \
  municipal/van_data.js municipal/extra_data.js municipal/school_data.js municipal/record_data.js municipal/config.js shared/guide.js

build ../provincial/index.html "BC Ballot 2026: provincial election" \
  "Every nominated candidate for MLA in the electoral districts covering seven British Columbia cities, for the 24 October 2026 provincial election." \
  provincial/page.html \
  provincial/data.js provincial/config.js shared/guide.js
