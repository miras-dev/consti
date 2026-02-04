'use client';

import { useState } from 'react';
import { convertMarkdownToOrganizedText } from '@/lib/markdownToText';

export default function MarkdownConverter() {
    const [markdown, setMarkdown] = useState('');
    const [plainText, setPlainText] = useState('');
    const [isConverting, setIsConverting] = useState(false);

    const handleConvert = async () => {
        if (!markdown.trim()) return;

        setIsConverting(true);
        try {
            // Convert locally using the utility function
            const converted = convertMarkdownToOrganizedText(markdown);
            setPlainText(converted);
        } catch (error) {
            console.error('Error converting markdown:', error);
            setPlainText('Error converting markdown to text');
        } finally {
            setIsConverting(false);
        }
    };

    const handleClear = () => {
        setMarkdown('');
        setPlainText('');
    };

    const handleCopyToClipboard = async () => {
        if (plainText) {
            try {
                await navigator.clipboard.writeText(plainText);
                alert('Text copied to clipboard!');
            } catch (error) {
                console.error('Failed to copy text:', error);
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Markdown to Text Converter</h1>
                <p className="text-gray-600">Convert markdown formatted text to clean, organized plain text</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="markdown-input" className="block text-sm font-medium mb-2">
                            Markdown Input
                        </label>
                        <textarea
                            id="markdown-input"
                            value={markdown}
                            onChange={(e) => setMarkdown(e.target.value)}
                            placeholder="Paste your markdown text here..."
                            className="w-full h-64 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={handleConvert}
                            disabled={!markdown.trim() || isConverting}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isConverting ? 'Converting...' : 'Convert to Text'}
                        </button>
                        <button
                            onClick={handleClear}
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Output Section */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="text-output" className="block text-sm font-medium mb-2">
                            Plain Text Output
                        </label>
                        <textarea
                            id="text-output"
                            value={plainText}
                            readOnly
                            placeholder="Converted text will appear here..."
                            className="w-full h-64 p-3 border border-gray-300 rounded-lg resize-none bg-gray-50"
                        />
                    </div>

                    <button
                        onClick={handleCopyToClipboard}
                        disabled={!plainText}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Copy to Clipboard
                    </button>
                </div>
            </div>

            {/* Example Section */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-medium mb-2">Example Usage:</h3>
                <button
                    onClick={() => {
                        const example = `### Flight Details:
1. **First Leg: Doha (DOH) to Bahrain (BAH)**
   - **Flight Number:** Gulf Air GF-531
   - **Departure:** 22:35 on Wednesday, 28 January 2026
   - **Arrival:** 23:25 on Wednesday, 28 January 2026
   - **Duration:** 50 minutes
   - **Cabin:** Economy Light

2. **Second Leg: Bahrain (BAH) to Frankfurt (FRA)**
   - **Flight Number:** Gulf Air GF-17
   - **Departure:** 01:20 on Thursday, 29 January 2026
   - **Arrival:** 06:15 on Thursday, 29 January 2026

### Important Notes:
- **Check-in Requirements:** Ensure to check in on time
- **Cancellation Policy:** If canceled, request refund`;
                        setMarkdown(example);
                    }}
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    Load Example Flight Information
                </button>
            </div>
        </div>
    );
}