import { NextRequest, NextResponse } from "next/server";
import openai from "@/lib/openai";
import { getSettings, searchChunks } from "@/lib/rag-store";
import { convertMarkdownToOrganizedText } from "@/lib/markdownToText";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const settings = getSettings();
    let systemPrompt = settings.systemPrompt;

    // RAG: search for relevant context if enabled
    if (settings.ragEnabled) {
      const lastUserMessage = messages
        .filter((m: { role: string }) => m.role === "user")
        .pop();
      if (lastUserMessage) {
        const relevantChunks = searchChunks(lastUserMessage.content, 3);
        if (relevantChunks.length > 0) {
          const context = relevantChunks
            .map((c) => c.content)
            .join("\n\n---\n\n");
          systemPrompt += `\n\nHere is relevant context from uploaded documents:\n\n${context}`;
        }
      }
    }

    const completion = await openai.chat.completions.create({
      model: settings.modelName,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      temperature: settings.temperature,
      max_tokens: settings.maxTokens,
    });

    const responseMessage =
      completion.choices[0]?.message?.content ||
      "I could not generate a response.";

    // Convert markdown formatting to plain text
    const plainTextResponse = convertMarkdownToOrganizedText(responseMessage);

    return NextResponse.json({ message: plainTextResponse });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Chat API error:", errorMessage);
    return NextResponse.json(
      {
        message:
          "Sorry, I encountered an error. Please make sure the OpenAI API key is configured correctly.",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
