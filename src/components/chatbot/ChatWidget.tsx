"use client";

import React, { useState, useRef, useEffect } from "react";
import { convertMarkdownToOrganizedText } from "@/lib/markdownToText";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello! I'm Constantin's AI assistant. How can I help you with financial planning or career consulting today?"
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data.welcomeMessage) setWelcomeMessage(data.welcomeMessage);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });
      const data = await res.json();
      const assistantMessage = data.message || "Sorry, I could not process your request.";
      // Convert markdown to plain text
      const plainTextMessage = convertMarkdownToOrganizedText(assistantMessage);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: plainTextMessage },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-black text-white shadow-large transition-transform hover:scale-105"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-lg border border-border-primary bg-white shadow-xlarge">
          {/* Header */}
          <div className="border-b border-border-primary bg-black px-4 py-3 text-white">
            <h3 className="text-sm font-semibold">Constantin&apos;s AI Assistant</h3>
            <p className="text-xs text-neutral-light">Ask about financial planning or career consulting</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="mb-4 rounded-lg bg-neutral-lightest p-3 text-sm">
                {welcomeMessage}
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-line ${msg.role === "user"
                    ? "bg-black text-white"
                    : "bg-neutral-lightest text-text-primary"
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mb-3 flex justify-start">
                <div className="rounded-lg bg-neutral-lightest px-3 py-2 text-sm text-text-secondary">
                  ...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border-primary p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="rounded-md bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-darker disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
