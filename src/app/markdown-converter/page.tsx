import MarkdownConverter from '@/components/shared/MarkdownConverter';

export default function MarkdownConverterPage() {
    return (
        <div className="min-h-screen bg-white">
            <MarkdownConverter />
        </div>
    );
}

export const metadata = {
    title: 'Markdown to Text Converter',
    description: 'Convert markdown formatted text to clean, organized plain text',
};