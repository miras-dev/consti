import { NextRequest, NextResponse } from 'next/server';
import { convertMarkdownToOrganizedText } from '@/lib/markdownToText';

export async function POST(request: NextRequest) {
    try {
        const { markdown } = await request.json();

        if (!markdown || typeof markdown !== 'string') {
            return NextResponse.json(
                { error: 'Markdown text is required' },
                { status: 400 }
            );
        }

        const plainText = convertMarkdownToOrganizedText(markdown);

        return NextResponse.json({
            success: true,
            plainText,
            originalLength: markdown.length,
            convertedLength: plainText.length
        });
    } catch (error) {
        console.error('Error converting markdown:', error);
        return NextResponse.json(
            { error: 'Failed to convert markdown to text' },
            { status: 500 }
        );
    }
}