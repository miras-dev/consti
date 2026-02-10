"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { imageRegistry, ImageSlot } from "@/lib/cms-image-registry";

interface ImagesTabProps {
  authHeader: string;
  adminName: string;
}

interface ImageOverride {
  id: string;
  filename: string;
  mimeType: string;
  uploadedAt: string;
  originalName: string;
}

const PAGES = [...new Set(imageRegistry.map((s) => s.page))];

export default function ImagesTab({ authHeader, adminName }: ImagesTabProps) {
  const [overrides, setOverrides] = useState<ImageOverride[]>([]);
  const [activePage, setActivePage] = useState(PAGES[0]);
  const [uploading, setUploading] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Commit message modal state
  const [showCommitModal, setShowCommitModal] = useState(false);
  const [commitMessage, setCommitMessage] = useState("");
  const [pendingAction, setPendingAction] = useState<
    { type: "upload"; slot: ImageSlot; file: File } |
    { type: "delete"; imageId: string; label: string } |
    null
  >(null);

  const loadOverrides = useCallback(async () => {
    try {
      const res = await fetch("/api/cms/images");
      if (res.ok) {
        const data = await res.json();
        setOverrides(data.overrides || []);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    loadOverrides();
  }, [loadOverrides]);

  const executeUpload = async (slot: ImageSlot, file: File, message: string) => {
    setUploading(slot.id);
    setUploadStatus("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("imageId", slot.id);
      formData.append("commitMessage", message);

      const res = await fetch("/api/cms/images", {
        method: "POST",
        headers: { Authorization: authHeader },
        body: formData,
      });

      if (res.ok) {
        setUploadStatus(`Uploaded ${file.name} for "${slot.label}"`);
        loadOverrides();
      } else {
        const data = await res.json();
        setUploadStatus(`Error: ${data.error}`);
      }
    } catch {
      setUploadStatus("Upload failed");
    } finally {
      setUploading(null);
      setTimeout(() => setUploadStatus(""), 3000);
    }
  };

  const executeDelete = async (imageId: string, message: string) => {
    try {
      const res = await fetch(
        `/api/cms/images?id=${imageId}&commitMessage=${encodeURIComponent(message)}`,
        {
          method: "DELETE",
          headers: { Authorization: authHeader },
        }
      );
      if (res.ok) {
        loadOverrides();
      }
    } catch {
      // ignore
    }
  };

  const handleUploadClick = (slot: ImageSlot, file: File) => {
    setPendingAction({ type: "upload", slot, file });
    setCommitMessage("");
    setShowCommitModal(true);
  };

  const handleDeleteClick = (imageId: string, label: string) => {
    setPendingAction({ type: "delete", imageId, label });
    setCommitMessage("");
    setShowCommitModal(true);
  };

  const handleCommitConfirm = async () => {
    setShowCommitModal(false);
    if (!pendingAction) return;

    const message = commitMessage.trim() ||
      (pendingAction.type === "upload"
        ? `Uploaded image for ${pendingAction.slot.label} by ${adminName}`
        : `Removed image for ${pendingAction.label} by ${adminName}`);

    if (pendingAction.type === "upload") {
      await executeUpload(pendingAction.slot, pendingAction.file, message);
    } else {
      await executeDelete(pendingAction.imageId, message);
    }

    setPendingAction(null);
  };

  const getOverride = (imageId: string): ImageOverride | undefined => {
    return overrides.find((o) => o.id === imageId);
  };

  const getDisplaySrc = (slot: ImageSlot): string => {
    const override = getOverride(slot.id);
    if (override) return `/api/cms/images/${slot.id}?t=${Date.now()}`;
    return slot.defaultSrc;
  };

  const filteredSlots = imageRegistry.filter((s) => s.page === activePage);

  return (
    <div className="space-y-6">
      {/* Page Filter */}
      <div className="rounded-lg border border-border-primary bg-white p-4">
        <div className="flex flex-wrap items-center gap-2">
          {PAGES.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                activePage === page
                  ? "bg-black text-white"
                  : "border border-border-primary text-text-primary hover:bg-neutral-lightest"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        {uploadStatus && (
          <p className="mt-3 text-sm text-green-600">{uploadStatus}</p>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredSlots.map((slot) => {
          const override = getOverride(slot.id);
          const isUploading = uploading === slot.id;

          return (
            <div
              key={slot.id}
              className="rounded-lg border border-border-primary bg-white p-4"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {slot.label}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {slot.component}
                    {override && (
                      <span className="ml-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                        Custom
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => fileInputRefs.current[slot.id]?.click()}
                    disabled={isUploading}
                    className="rounded-md bg-black px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-neutral-darker disabled:opacity-50"
                  >
                    {isUploading ? "Uploading..." : "Upload"}
                  </button>
                  {override && (
                    <button
                      onClick={() => handleDeleteClick(slot.id, slot.label)}
                      className="rounded-md border border-red-200 px-3 py-1 text-xs text-red-600 transition-colors hover:bg-red-50"
                    >
                      Remove
                    </button>
                  )}
                  <input
                    ref={(el) => { fileInputRefs.current[slot.id] = el; }}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUploadClick(slot, file);
                      e.target.value = "";
                    }}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Image Preview */}
              <div className="relative overflow-hidden rounded-md border border-neutral-lighter bg-neutral-lightest">
                <img
                  src={getDisplaySrc(slot)}
                  alt={slot.label}
                  className="h-40 w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='160' fill='%23f0f0f0'%3E%3Crect width='200' height='160'/%3E%3Ctext x='50%25' y='50%25' fill='%23999' text-anchor='middle' dominant-baseline='middle' font-size='14'%3ENo preview%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {override && (
                <p className="mt-2 text-xs text-text-secondary">
                  Uploaded: {override.originalName} ({new Date(override.uploadedAt).toLocaleDateString()})
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Commit Message Modal */}
      {showCommitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-1 text-lg font-semibold text-text-primary">
              {pendingAction?.type === "upload" ? "Upload Image" : "Remove Image"}
            </h3>
            <p className="mb-4 text-sm text-text-secondary">
              Describe this change for the version history.
            </p>
            <input
              type="text"
              value={commitMessage}
              onChange={(e) => setCommitMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCommitConfirm()}
              placeholder={
                pendingAction?.type === "upload"
                  ? "e.g. Replaced hero banner with new photo"
                  : "e.g. Removed outdated team photo"
              }
              className="mb-4 w-full rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowCommitModal(false);
                  setPendingAction(null);
                }}
                className="rounded-md border border-border-primary px-4 py-2 text-sm transition-colors hover:bg-neutral-lightest"
              >
                Cancel
              </button>
              <button
                onClick={handleCommitConfirm}
                className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-darker"
              >
                {pendingAction?.type === "upload" ? "Upload" : "Remove"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
