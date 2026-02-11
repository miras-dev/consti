import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const adminUsers = process.env.ADMIN_USERS;
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const auth = request.headers.get("authorization");

  return NextResponse.json({
    hasAdminUsers: !!adminUsers,
    adminUsersLength: adminUsers?.length,
    adminUsersPreview: adminUsers ? adminUsers.substring(0, 5) + "***" : null,
    hasAdminUsername: !!adminUsername,
    hasAdminPassword: !!adminPassword,
    authHeaderReceived: !!auth,
    authHeaderPreview: auth ? auth.substring(0, 10) + "***" : null,
  });
}
