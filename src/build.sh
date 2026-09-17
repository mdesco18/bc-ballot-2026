#!/usr/bin/env bash
# Rebuilds bc-ballot-2026.html from the parts in this directory.
# Order matters: head.html carries the markup and CSS, the data files define
# C (Vancouver), X (other cities), S (school board) and R/P (record + promises),
# and tail.js renders against them.
set -euo pipefail
cd "$(dirname "$0")"
{
  cat head.html
  echo '<script>'
  cat van_data.js
  echo
  cat extra_data.js
  cat school_data.js
  cat record_data.js
  cat tail.js
  echo '</script>'
} > ../index.html
# Fail loudly on a syntax error: it blanks the whole page.
sed -n '/^<script>$/,/^<\/script>$/p' ../index.html | sed '1d;$d' > /tmp/_ballot_check.js
node --check /tmp/_ballot_check.js && echo "built ../index.html  ($(wc -c < ../index.html) bytes)"
