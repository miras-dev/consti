"use client";

import React, { useState, useEffect, useCallback } from "react";
import ContentTab from "@/components/admin/ContentTab";
import ImagesTab from "@/components/admin/ImagesTab";
import VersionsTab from "@/components/admin/VersionsTab";

interface FileRecord {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
  chunkCount: number;
}

interface ChatSettings {
  systemPrompt: string;
  welcomeMessage: string;
  modelName: string;
  temperature: number;
  ragEnabled: boolean;
  maxTokens: number;
}

const DEFAULT_SETTINGS: ChatSettings = {
  systemPrompt: "",
  welcomeMessage: "",
  modelName: "gpt-4o-mini",
  temperature: 0.7,
  ragEnabled: true,
  maxTokens: 1000,
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authHeader, setAuthHeader] = useState("");
  const [adminName, setAdminName] = useState("");

  const [settings, setSettings] = useState<ChatSettings>(DEFAULT_SETTINGS);
  const [settingsSaved, setSettingsSaved] = useState(false);
  const [settingsLoading, setSettingsLoading] = useState(false);

  const [files, setFiles] = useState<FileRecord[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const [activeTab, setActiveTab] = useState<"settings" | "files" | "content" | "images" | "versions">("settings");

  const makeAuthHeader = (user: string, pass: string) =>
    "Basic " + btoa(`${user}:${pass}`);

  const loadFiles = useCallback(async (auth: string) => {
    try {
      const res = await fetch("/api/admin/files", {
        headers: { Authorization: auth },
      });
      if (res.ok) {
        const data = await res.json();
        setFiles(data.files || []);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLogin = async () => {
    setAuthError("");
    const auth = makeAuthHeader(username, password);
    try {
      const res = await fetch("/api/admin/files", {
        headers: { Authorization: auth },
      });
      if (res.ok) {
        setAuthHeader(auth);
        setAdminName(username);
        setIsAuthenticated(true);
      } else {
        setAuthError("Invalid credentials");
      }
    } catch {
      setAuthError("Connection error");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        setSettings({
          systemPrompt: data.systemPrompt || "",
          welcomeMessage: data.welcomeMessage || "",
          modelName: data.modelName || "gpt-4o-mini",
          temperature: data.temperature ?? 0.7,
          ragEnabled: data.ragEnabled ?? true,
          maxTokens: data.maxTokens ?? 1000,
        });
      })
      .catch(() => {});
    loadFiles(authHeader);
  }, [isAuthenticated, authHeader, loadFiles]);

  const saveSettings = async () => {
    setSettingsLoading(true);
    setSettingsSaved(false);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setSettingsSaved(true);
        setTimeout(() => setSettingsSaved(false), 3000);
      }
    } catch {
      // ignore
    } finally {
      setSettingsLoading(false);
    }
  };

  const handleFileUpload = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setUploading(true);
    setUploadStatus("");

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          headers: { Authorization: authHeader },
          body: formData,
        });
        const data = await res.json();
        if (res.ok) {
          setUploadStatus(
            (prev) =>
              prev +
              (prev ? "\n" : "") +
              `Uploaded ${file.name} (${data.chunkCount} chunks)`
          );
        } else {
          setUploadStatus(
            (prev) =>
              prev +
              (prev ? "\n" : "") +
              `Error uploading ${file.name}: ${data.error}`
          );
        }
      } catch {
        setUploadStatus(
          (prev) =>
            prev + (prev ? "\n" : "") + `Failed to upload ${file.name}`
        );
      }
    }

    setUploading(false);
    loadFiles(authHeader);
  };

  const deleteFile = async (fileId: string) => {
    try {
      const res = await fetch(`/api/admin/files?id=${fileId}`, {
        method: "DELETE",
        headers: { Authorization: authHeader },
      });
      if (res.ok) {
        loadFiles(authHeader);
      }
    } catch {
      // ignore
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-lightest">
        <div className="w-full max-w-md rounded-lg border border-border-primary bg-white p-8 shadow-large">
          <h1 className="mb-6 text-2xl font-bold text-text-primary">
            Admin Login
          </h1>
          {authError && (
            <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
              {authError}
            </div>
          )}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-text-primary">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
              placeholder="admin"
            />
          </div>
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-text-primary">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
              placeholder="Enter password"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-darker"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-lightest">
      {/* Header */}
      <div className="border-b border-border-primary bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-text-primary">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary">
              Logged in as <span className="font-semibold text-text-primary">{adminName}</span>
            </span>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setAuthHeader("");
                setAdminName("");
                setUsername("");
                setPassword("");
              }}
              className="rounded-md border border-border-primary px-3 py-1.5 text-sm transition-colors hover:bg-neutral-lightest"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Tabs */}
        <div className="mb-8 flex gap-1 rounded-lg border border-border-primary bg-white p-1">
          {(
            [
              { key: "content", label: "Content" },
              { key: "images", label: "Images" },
              { key: "versions", label: "Versions" },
              { key: "settings", label: "Chatbot" },
              { key: "files", label: "RAG Files" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-black text-white"
                  : "text-text-primary hover:bg-neutral-lightest"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="rounded-lg border border-border-primary bg-white p-6">
            <h2 className="mb-6 text-lg font-semibold text-text-primary">
              Chatbot Configuration
            </h2>

            <div className="space-y-6">
              <div>
                <label className="mb-1 block text-sm font-medium text-text-primary">
                  System Prompt
                </label>
                <p className="mb-2 text-xs text-text-secondary">
                  Instructions that define the chatbot&apos;s behavior and
                  personality.
                </p>
                <textarea
                  value={settings.systemPrompt}
                  onChange={(e) =>
                    setSettings({ ...settings, systemPrompt: e.target.value })
                  }
                  rows={6}
                  className="w-full rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-text-primary">
                  Welcome Message
                </label>
                <p className="mb-2 text-xs text-text-secondary">
                  The first message visitors see when opening the chat.
                </p>
                <textarea
                  value={settings.welcomeMessage}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      welcomeMessage: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-primary">
                    Model
                  </label>
                  <select
                    value={settings.modelName}
                    onChange={(e) =>
                      setSettings({ ...settings, modelName: e.target.value })
                    }
                    className="w-full rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
                  >
                    <option value="gpt-4o-mini">GPT-4o Mini</option>
                    <option value="gpt-4o">GPT-4o</option>
                    <option value="gpt-4-turbo">GPT-4 Turbo</option>
                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-text-primary">
                    Temperature: {settings.temperature}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={settings.temperature}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        temperature: parseFloat(e.target.value),
                      })
                    }
                    className="mt-2 w-full"
                  />
                  <div className="mt-1 flex justify-between text-xs text-text-secondary">
                    <span>Precise</span>
                    <span>Creative</span>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-text-primary">
                    Max Tokens
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="4096"
                    step="100"
                    value={settings.maxTokens}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        maxTokens: parseInt(e.target.value) || 1000,
                      })
                    }
                    className="w-full rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setSettings({
                      ...settings,
                      ragEnabled: !settings.ragEnabled,
                    })
                  }
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    settings.ragEnabled ? "bg-black" : "bg-neutral-lighter"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                      settings.ragEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    RAG Enabled
                  </p>
                  <p className="text-xs text-text-secondary">
                    Use uploaded documents as context for responses
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-neutral-lighter pt-6">
                <button
                  onClick={saveSettings}
                  disabled={settingsLoading}
                  className="rounded-md bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-darker disabled:opacity-50"
                >
                  {settingsLoading ? "Saving..." : "Save Settings"}
                </button>
                {settingsSaved && (
                  <span className="text-sm text-green-600">
                    Settings saved successfully
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === "content" && <ContentTab authHeader={authHeader} adminName={adminName} />}

        {/* Images Tab */}
        {activeTab === "images" && <ImagesTab authHeader={authHeader} adminName={adminName} />}

        {/* Versions Tab */}
        {activeTab === "versions" && <VersionsTab authHeader={authHeader} />}

        {/* Files Tab */}
        {activeTab === "files" && (
          <div className="space-y-6">
            {/* Upload Area */}
            <div className="rounded-lg border border-border-primary bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-text-primary">
                Upload Documents
              </h2>
              <p className="mb-4 text-sm text-text-secondary">
                Upload .txt, .md, .csv, or .pdf files. The content will be
                chunked and used as context for the chatbot when RAG is enabled.
              </p>

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  handleFileUpload(e.dataTransfer.files);
                }}
                className={`rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
                  dragOver
                    ? "border-black bg-neutral-lightest"
                    : "border-neutral-lighter"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto mb-3 text-neutral-dark"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p className="mb-2 text-sm text-text-primary">
                  Drag and drop files here, or
                </p>
                <label className="cursor-pointer text-sm font-medium text-black underline">
                  browse files
                  <input
                    type="file"
                    multiple
                    accept=".txt,.md,.pdf,.csv"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />
                </label>
                {uploading && (
                  <p className="mt-3 text-sm text-text-secondary">
                    Uploading...
                  </p>
                )}
              </div>

              {uploadStatus && (
                <pre className="mt-4 whitespace-pre-wrap rounded-md bg-neutral-lightest p-3 text-xs text-text-secondary">
                  {uploadStatus}
                </pre>
              )}
            </div>

            {/* File List */}
            <div className="rounded-lg border border-border-primary bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-text-primary">
                Uploaded Files ({files.length})
              </h2>

              {files.length === 0 ? (
                <p className="py-8 text-center text-sm text-text-secondary">
                  No files uploaded yet. Upload documents to enable RAG
                  functionality.
                </p>
              ) : (
                <div className="divide-y divide-neutral-lighter">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-text-primary">
                          {file.name}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {file.chunkCount} chunks &middot;{" "}
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                      <button
                        onClick={() => deleteFile(file.id)}
                        className="rounded-md border border-red-200 px-3 py-1 text-xs text-red-600 transition-colors hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
