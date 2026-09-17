#!/usr/bin/env bash
# Rebuilds ../index.html from the parts in this directory.
#
# head.html is authored as a Claude-artifact fragment: it opens with <title>, the
# font <link>s and one <style> block, then the page markup. The artifact platform
# supplies the doctype, <head>, <body>, the viewport meta and a small reset at
# publish time. GitHub Pages serves the file raw, so this script has to supply all
# of that itself. Without the viewport meta a phone renders the page at ~980px and
# scales it down; without the doctype the browser drops into quirks mode; without
# [hidden]{display:none!important} the .fbtn display:flex rule defeats the hidden
# attribute and the "back to top" button never hides.
set -euo pipefail
cd "$(dirname "$0")"

# Split head.html at the end of its <style> block: everything up to and including
# </style> belongs in <head>, everything after it belongs in <body>.
awk '{print} /<\/style>/{exit}' head.html            > /tmp/_ballot_head.part
awk 'f{print} /<\/style>/{f=1}'  head.html           > /tmp/_ballot_body.part

{
  cat <<'HTML'
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="description" content="Every nominated candidate for mayor, council, park board and school board in seven British Columbia municipalities voting on 17 October 2026.">
<style>
  :root{color-scheme:light dark;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
  body{margin:0}
  img{max-width:100%}
  [hidden]{display:none !important}
</style>
HTML
  cat /tmp/_ballot_head.part
  echo '</head>'
  echo '<body>'
  cat /tmp/_ballot_body.part
  echo '<script>'
  cat van_data.js
  echo
  cat extra_data.js
  cat school_data.js
  cat record_data.js
  cat tail.js
  echo '</script>'
  echo '</body>'
  echo '</html>'
} > ../index.html

rm -f /tmp/_ballot_head.part /tmp/_ballot_body.part

# A syntax error in the script block blanks the whole page, so fail loudly.
sed -n '/^<script>$/,/^<\/script>$/p' ../index.html | sed '1d;$d' > /tmp/_ballot_check.js
node --check /tmp/_ballot_check.js
echo "built ../index.html  ($(wc -c < ../index.html) bytes)"
