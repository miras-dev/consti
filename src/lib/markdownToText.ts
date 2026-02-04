/**
 * Converts markdown text to clean, organized plain text
 * @param markdownText - The markdown formatted text to convert
 * @returns Clean plain text without markdown formatting
 */
export function convertMarkdownToText(markdownText: string): string {
    let plainText = markdownText;

    // Remove headers (###, ##, #) - both at start of line and inline
    plainText = plainText.replace(/#{1,6}\s*/g, '');

    // Remove bold and italic formatting
    plainText = plainText.replace(/\*\*([^*]+)\*\*/g, '$1');
    plainText = plainText.replace(/\*([^*]+)\*/g, '$1');
    plainText = plainText.replace(/__([^_]+)__/g, '$1');
    plainText = plainText.replace(/_([^_]+)_/g, '$1');

    // Remove links but keep text [text](url) -> text
    plainText = plainText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

    // Remove inline code backticks
    plainText = plainText.replace(/`([^`]+)`/g, '$1');

    // Clean up bullet points and lists
    plainText = plainText.replace(/^\s*[-*+]\s+/gm, '• ');
    plainText = plainText.replace(/^\s*\d+\.\s+/gm, '');

    // Clean up whitespace
    plainText = plainText.replace(/\n{3,}/g, '\n\n');
    plainText = plainText.replace(/[ \t]+\n/g, '\n');
    plainText = plainText.replace(/\n[ \t]+/g, '\n');
    plainText = plainText.replace(/[ \t]{2,}/g, ' ');

    return plainText.trim();
}

/**
 * Converts markdown text to organized plain text with better structure and paragraphs
 * @param markdownText - The markdown formatted text to convert
 * @returns Well-structured plain text with proper paragraphs
 */
export function convertMarkdownToOrganizedText(markdownText: string): string {
    let text = convertMarkdownToText(markdownText);

    // Step 1: Add breaks after intro sections
    text = text.replace(/(expect|include):\s*/g, '$1:\n\n');

    // Step 2: Handle service titles that appear before bullet points
    text = text.replace(/\s+(Financial Planning|Career Coaching|Investment Planning|Retirement Planning|Budgeting)\s*•/g, '\n\n$1\n\n•');

    // Step 3: Add breaks before each bullet point service (more specific pattern)
    text = text.replace(/\s*•\s*([A-Z][^•]+?):/g, '\n\n• $1:');

    // Step 4: Add breaks after complete service descriptions (ending with period + space + bullet)
    text = text.replace(/\.\s*•/g, '.\n\n•');

    // Step 5: Add breaks after sentences ending with key words
    text = text.replace(/\b(investing|tolerance|strategies|retirement|objectives|goals|planning)\.\s+([A-Z])/g, '$1.\n\n$2');

    // Step 6: Fix spacing issues
    text = text.replace(/:\s+/g, ': ');
    text = text.replace(/\.\s+/g, '. ');
    text = text.replace(/[ \t]{2,}/g, ' ');

    // Step 7: Clean up excessive line breaks
    text = text.replace(/\n{3,}/g, '\n\n');

    // Step 8: Ensure proper spacing after periods
    text = text.replace(/\.([a-z])/g, '. $1');

    return text.trim();
}

/**
 * Example usage function for testing
 */
export function exampleUsage() {
    const markdownExample = `### Flight Details:
1. **First Leg: Doha (DOH) to Bahrain (BAH)**
   - **Flight Number:** Gulf Air GF-531
   - **Departure:** 22:35 on Wednesday, 28 January 2026
   - **Arrival:** 23:25 on Wednesday, 28 January 2026

2. **Second Leg: Bahrain (BAH) to Frankfurt (FRA)**
   - **Flight Number:** Gulf Air GF-17
   - **Departure:** 01:20 on Thursday, 29 January 2026`;

    console.log('Original markdown:');
    console.log(markdownExample);
    console.log('\nConverted to plain text:');
    console.log(convertMarkdownToOrganizedText(markdownExample));
}