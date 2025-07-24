import { NextResponse } from "next/server"
import { get } from '@vercel/edge-config';

export async function middleware() {
  const response = NextResponse.next()

  // Use Edge Config to determine banner type
  try {
    // In a real implementation, you would have Edge Config set up
    // For demo purposes, we'll simulate the Edge Config response

    type BannerConfig = {
      showSaleBanner: boolean | undefined,
    }

    const bannerConfig : BannerConfig | undefined = await get("bannerConfig")

    // Set a banner type based on Edge Config and user context
    const bannerType = bannerConfig?.showSaleBanner ? "sale" : "default"

    response.cookies.set("banner-type", bannerType, {
      maxAge: 1,
      httpOnly: false,
    })
  } catch (error) {
    console.error("Edge Config error:", error)
    // Fallback to default banner
    response.cookies.set("banner-type", "default", {
      maxAge: 1,
      httpOnly: false,
    })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
