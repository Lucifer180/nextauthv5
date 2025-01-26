import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    // Check for authentication
    if (req.auth) {
        return NextResponse.json(req.auth);
    }
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
}
