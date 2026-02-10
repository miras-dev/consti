"use client";

import { useState, useRef, useEffect } from "react";
import { convertMarkdownToOrganizedText } from "@/lib/markdownToText";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Set default welcome message from translations
    setWelcomeMessage(t.chat.welcomeMessage);

    // Try to fetch custom welcome message from admin settings
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data.welcomeMessage) setWelcomeMessage(data.welcomeMessage);
      })
      .catch(() => { });
  }, [t.chat.welcomeMessage]);

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

      // Format message with better line breaks and structure
      const formattedMessage = plainTextMessage
        // Add line breaks after colons that end sentences or introduce lists
        .replace(/:\s*(?=[A-Z•\n])/g, ':\n')
        // Ensure bullet points start on new lines with proper spacing
        .replace(/([.!?])\s*•/g, '$1\n• ')
        .replace(/^•/gm, '• ')
        // Clean up multiple consecutive line breaks
        .replace(/\n{3,}/g, '\n\n')
        // Trim whitespace
        .trim();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: formattedMessage },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: t.chat.errorMessage },
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
        className="fixed bottom-6 right-6 z-50 flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 text-white shadow-elevation-3 transition-all duration-300 hover:scale-110 hover:shadow-elevation-4 focus:outline-none focus:ring-4 focus:ring-brand-primary-500/30"
        aria-label={t.chat.toggleChat}
      >
        <div className="relative">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-brand-secondary-500 ring-2 ring-white animate-pulse"></div>
            </>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-elevation-5 backdrop-blur-sm animate-scale-in">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 px-6 py-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t.chat.assistantName}</h3>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-brand-secondary-400 animate-pulse"></div>
                  <p className="text-xs text-white/80">{t.chat.onlineStatus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-background-secondary p-4 space-y-4">
            {messages.length === 0 && (
              <div className="rounded-2xl bg-white p-4 shadow-elevation-1 border border-border-primary">
                <div className="flex items-start space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-primary-600"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-primary leading-relaxed">
                      {welcomeMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-elevation-1 ${msg.role === "user"
                    ? "bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 text-white rounded-br-md"
                    : "bg-white text-text-primary border border-border-primary rounded-bl-md"
                    }`}
                >
                  <div className="whitespace-pre-line">{msg.content}</div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-elevation-1 border border-border-primary">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-text-tertiary animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-text-tertiary animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-text-tertiary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-text-tertiary">{t.chat.typing}</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border-primary bg-white p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-end space-x-3"
            >
              <div className="flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.chat.placeholder}
                  className="input-modern resize-none border-0 bg-background-secondary focus:bg-white"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 text-white shadow-elevation-2 transition-all duration-200 hover:shadow-elevation-3 focus:outline-none focus:ring-2 focus:ring-brand-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="translate-x-0.5"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22,2 15,22 11,13 2,9 22,2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}