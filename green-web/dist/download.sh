#!/bin/bash

LINK='https://raw.githubusercontent.com/microsoft/Web-Dev-For-Beginners/main/5-browser-extension/start/dist/';

for FILE in "background.js" "index.html" "main.js" "manifest.json" "styles.css"
do
    FINAL="${LINK}${FILE}";
    curl $FINAL | car > $FILE;
done
