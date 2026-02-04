#!/usr/bin/env node

const removeMd = require('remove-markdown');
const fs = require('fs');
const path = require('path');

function convertMarkdownToText(markdownText) {
    let plainText = removeMd(markdownText);

    // Clean up extra whitespace and organize the text
    plainText = plainText
        .replace(/\n{3,}/g, '\n\n')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n[ \t]+/g, '\n')
        .replace(/[ \t]{2,}/g, ' ')
        .trim();

    return plainText;
}

// Get command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Usage: node scripts/convert-markdown.js <markdown-text>');
    console.log('   or: node scripts/convert-markdown.js --file <path-to-markdown-file>');
    process.exit(1);
}

let markdownText = '';

if (args[0] === '--file' && args[1]) {
    // Read from file
    const filePath = path.resolve(args[1]);
    try {
        markdownText = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error('Error reading file:', error.message);
        process.exit(1);
    }
} else {
    // Use provided text
    markdownText = args.join(' ');
}

// Convert and output
const plainText = convertMarkdownToText(markdownText);
console.log(plainText);