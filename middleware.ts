import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get user preferences from headers or generate random for demo
  const userAgent = request.headers.get("user-agent") || ""
  const isMobile = /Mobile|Android|iPhone/i.test(userAgent)

  // Simulate user detection - in real app, this would come from auth/session
  const isReturningUser = request.cookies.get("returning-user")

  if (!isReturningUser) {
    // Set demo user data for personalization
    const demoNames = ["Alex", "Jordan", "Casey", "Taylor", "Morgan"]
    const randomName = demoNames[Math.floor(Math.random() * demoNames.length)]

    response.cookies.set("user-name", randomName, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false,
    })

    response.cookies.set("user-location", Math.random() > 0.5 ? "member" : "visitor", {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
    })

    response.cookies.set("returning-user", "true", {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
    })
  }

  // Use Edge Config to determine banner type
  try {
    // In a real implementation, you would have Edge Config set up
    // For demo purposes, we'll simulate the Edge Config response
    const bannerConfig = await simulateEdgeConfig()

    // Set banner type based on Edge Config and user context
    const bannerType = bannerConfig?.showSaleBanner ? "sale" : "default"

    response.cookies.set("banner-type", bannerType, {
      maxAge: 60 * 60, // 1 hour
      httpOnly: false,
    })
  } catch (error) {
    console.error("Edge Config error:", error)
    // Fallback to default banner
    response.cookies.set("banner-type", "default", {
      maxAge: 60 * 60,
      httpOnly: false,
    })
  }

  return response
}

// Simulate Edge Config for demo - replace with actual Edge Config call
async function simulateEdgeConfig() {
  // This simulates what you'd get from Edge Config
  // In reality, you'd use: await get('bannerConfig')
  return {
    showSaleBanner: Math.random() > 0.5, // 50% chance of sale banner
    salePercentage: 40,
    memberBenefits: ["free-shipping", "early-access", "exclusive-products"],
  }
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
