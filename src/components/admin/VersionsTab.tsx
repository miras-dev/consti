"use client";

import React, { useState, useEffect, useCallback } from "react";

interface VersionsTabProps {
  authHeader: string;
}

interface CmsVersion {
  id: string;
  timestamp: string;
  type: "text" | "image" | "both";
  description: string;
  adminName?: string;
  commitMessage?: string;
}

export default function VersionsTab({ authHeader }: VersionsTabProps) {
  const [versions, setVersions] = useState<CmsVersion[]>([]);
  const [reverting, setReverting] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const loadVersions = useCallback(async () => {
    try {
      const res = await fetch("/api/cms/versions", {
        headers: { Authorization: authHeader },
      });
      if (res.ok) {
        const data = await res.json();
        setVersions((data.versions || []).reverse());
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, [authHeader]);

  useEffect(() => {
    loadVersions();
  }, [loadVersions]);

  const handleRevert = async (versionId: string) => {
    setReverting(versionId);
    setStatusMsg("");
    try {
      const res = await fetch("/api/cms/versions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify({ versionId }),
      });
      if (res.ok) {
        setStatusMsg("Reverted successfully. Reload the site to see changes.");
        loadVersions();
      } else {
        const data = await res.json();
        setStatusMsg(`Error: ${data.error}`);
      }
    } catch {
      setStatusMsg("Revert failed");
    } finally {
      setReverting(null);
      setConfirmId(null);
      setTimeout(() => setStatusMsg(""), 5000);
    }
  };

  const typeBadge = (type: string) => {
    const colors: Record<string, string> = {
      text: "bg-purple-100 text-purple-700",
      image: "bg-green-100 text-green-700",
      both: "bg-blue-100 text-blue-700",
    };
    return (
      <span
        className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
          colors[type] || "bg-neutral-100 text-neutral-700"
        }`}
      >
        {type}
      </span>
    );
  };

  if (!loaded) {
    return (
      <div className="rounded-lg border border-border-primary bg-white p-6">
        <p className="text-sm text-text-secondary">Loading versions...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border-primary bg-white p-6">
        <h2 className="mb-2 text-lg font-semibold text-text-primary">
          Version History
        </h2>
        <p className="mb-6 text-sm text-text-secondary">
          Last {versions.length} version{versions.length !== 1 ? "s" : ""} (max
          10). Revert to restore a previous state.
        </p>

        {statusMsg && (
          <div className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-700">
            {statusMsg}
          </div>
        )}

        {versions.length === 0 ? (
          <p className="py-8 text-center text-sm text-text-secondary">
            No versions yet. Changes to content or images will create version
            snapshots automatically.
          </p>
        ) : (
          <div className="divide-y divide-neutral-lighter">
            {versions.map((version, index) => (
              <div
                key={version.id}
                className="flex items-center justify-between py-4"
              >
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    {typeBadge(version.type)}
                    {index === 0 && (
                      <span className="inline-block rounded-full bg-black px-2 py-0.5 text-xs text-white">
                        Latest
                      </span>
                    )}
                    {version.adminName && version.adminName !== "unknown" && (
                      <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                        {version.adminName}
                      </span>
                    )}
                    <span className="text-xs text-text-secondary">
                      {new Date(version.timestamp).toLocaleString()}
                    </span>
                  </div>
                  {version.commitMessage && (
                    <p className="text-sm font-medium text-text-primary">
                      {version.commitMessage}
                    </p>
                  )}
                  <p className="text-xs text-text-secondary">
                    {version.description}
                  </p>
                </div>

                <div className="ml-4">
                  {confirmId === version.id ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-text-secondary">
                        Revert?
                      </span>
                      <button
                        onClick={() => handleRevert(version.id)}
                        disabled={reverting === version.id}
                        className="rounded-md bg-red-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                      >
                        {reverting === version.id ? "Reverting..." : "Confirm"}
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        className="rounded-md border border-border-primary px-3 py-1 text-xs transition-colors hover:bg-neutral-lightest"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmId(version.id)}
                      disabled={index === 0}
                      className="rounded-md border border-border-primary px-3 py-1 text-xs transition-colors hover:bg-neutral-lightest disabled:opacity-30"
                    >
                      Revert
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
