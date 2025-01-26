import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { AppRouteHandlerFnContext } from 'next/dist/server/app-render'; // Adjust import based on your setup

export async function GET(req: NextRequest, context: AppRouteHandlerFnContext) {
    // Check for authentication
    if (req.auth) {
        return NextResponse.json(req.auth);
    }
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
}
