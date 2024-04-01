import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "./lib/verifyToken";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const cookie = cookies().get("token");

	if (cookie) {
		await verifyJwt(cookie);
	}

	if (request.nextUrl.pathname == "/") {
		if (cookie) {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
	}

	if (request.nextUrl.pathname.startsWith("/dashboard")) {
		if (!cookie) {
			return NextResponse.redirect(new URL("/", request.url));
		}
	}
}

// See "Matching Paths" below to learn more
