#!/bin/sh
mkdir dist/
tailwind build src/tailwind.css -o dist/style.css
cp -r src/index.html src/img dist/
npx @2fd/graphdoc --force -e https://api.runeql.com/ -o ./dist/schema