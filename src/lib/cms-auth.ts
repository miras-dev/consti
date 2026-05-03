import { NextRequest } from "next/server";

interface AdminCredential {
  username: string;
  password: string;
}

/**
 * Parse ADMIN_USERS env var (format: "user1:pass1,user2:pass2")
 * Falls back to legacy ADMIN_USERNAME/ADMIN_PASSWORD if ADMIN_USERS is not set.
 */
function getAdminCredentials(): AdminCredential[] {
  const adminUsers = process.env.ADMIN_USERS;
  console.log("[auth] ADMIN_USERS present:", !!adminUsers, "| parsed entries:", adminUsers ? adminUsers.split(",").length : 0);
  if (adminUsers) {
    return adminUsers.split(",").map((entry) => {
      const [username, ...passwordParts] = entry.trim().split(":");
      return { username: username.trim(), password: passwordParts.join(":").trim() };
    });
  }

  // Legacy single-admin fallback
  return [
    {
      username: process.env.ADMIN_USERNAME || "admin",
      password: process.env.ADMIN_PASSWORD || "admin123",
    },
  ];
}

/**
 * Check if the request has valid admin credentials.
 * Returns `false` if unauthorized.
 */
export function checkAdminAuth(request: NextRequest): boolean {
  return getAdminName(request) !== null;
}

/**
 * Returns the authenticated admin's username, or `null` if unauthorized.
 */
export function getAdminName(request: NextRequest): string | null {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return null;

  const credentials = getAdminCredentials();
  for (const cred of credentials) {
    const expected = Buffer.from(`${cred.username}:${cred.password}`).toString("base64");
    if (auth === `Basic ${expected}`) {
      return cred.username;
    }
  }

  return null;
}
