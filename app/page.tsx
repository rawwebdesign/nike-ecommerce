import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, User, Search, Menu, Heart, Star, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react"

const relatedProducts = [
  {
    id: 2,
    name: "Air Max 90",
    price: 120,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e9e85463-4323-4a99-a56e-c8999bb3fff9/NIKE+VOMERO+18.png",
  },
  {
    id: 3,
    name: "React Infinity Run",
    price: 160,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b6486cef-46c4-49de-9b33-e2f3343cc427/NIKE+VOMERO+18.png",
  },
  {
    id: 4,
    name: "Air Force 1",
    price: 110,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5c351c7-765d-4874-b157-09cb87891f58/NIKE+VOMERO+18.png",
  },
  {
    id: 5,
    name: "Blazer Mid",
    price: 100,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/da3fb177-42d1-4d49-be0c-d8be070344d3/NIKE+VOMERO+18.png",
  },
]

const reviews = [
  {
    id: 1,
    name: "Alex M.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Incredibly comfortable! The Air Max cushioning is perfect for all-day wear.",
    verified: true,
  },
  {
    id: 2,
    name: "Jordan K.",
    rating: 4,
    date: "1 month ago",
    comment: "Great style and comfort. Runs slightly large, so consider sizing down.",
    verified: true,
  },
  {
    id: 3,
    name: "Casey L.",
    rating: 5,
    date: "3 weeks ago",
    comment: "Love the colorway! Perfect for both workouts and casual wear.",
    verified: true,
  },
]

export default async function ProductDetailPage() {
  const cookieStore = await cookies()
  const bannerType = cookieStore.get("banner-type")?.value || "default"
  const userName = cookieStore.get("user-name")?.value
  const userLocation = cookieStore.get("user-location")?.value || "visitor"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-black">
                NIKE
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="#" className="text-black hover:text-orange-600 font-medium">
                  New & Featured
                </Link>
                <Link href="#" className="text-black hover:text-orange-600 font-medium">
                  Men
                </Link>
                <Link href="#" className="text-black hover:text-orange-600 font-medium">
                  Women
                </Link>
                <Link href="#" className="text-black hover:text-orange-600 font-medium">
                  Kids
                </Link>
                <Link href="#" className="text-black hover:text-orange-600 font-medium">
                  Sale
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-4 w-4 text-gray-500 mr-2" />
                <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm" />
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamic Banner from Edge Config */}
      <div className={`${bannerType === "sale" ? "bg-orange-600" : "bg-black"} text-white py-3`}>
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">
            {bannerType === "sale"
              ? `🔥 FLASH SALE: Up to 40% off select items ${userName ? `for ${userName}` : ""}`
              : `Free shipping on orders over $50 ${userLocation === "member" ? "| Members get free returns" : ""}`}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/men" className="hover:text-black">
            Men
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/men/shoes" className="hover:text-black">
            Shoes
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-black">Air Max 270</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4ae3c0d4-1573-4842-9b01-5589cb11f359/NIKE+VOMERO+18.png"
                alt="Nike Air Max 270 - Main View"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer border-2 border-black">
                <Image
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d03a5f2-05f6-481b-a982-824028a5e997/NIKE+VOMERO+18.png"
                  alt="Nike Air Max 270 - View 1"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:border-2 hover:border-gray-300">
                <Image
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33d26334-6758-47c8-82b1-4a57c28825e7/NIKE+VOMERO+18.png"
                  alt="Nike Air Max 270 - Side View"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:border-2 hover:border-gray-300">
                <Image
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9e40e32e-c274-43f4-9685-7d27d6f20d4e/NIKE+VOMERO+18.png"
                  alt="Nike Air Max 270 - Back View"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:border-2 hover:border-gray-300">
                <Image
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3dde9670-b73f-4f04-98a3-119f51420870/NIKE+VOMERO+18.png"
                  alt="Nike Air Max 270 - Sole View"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-orange-600 text-white mb-2">Best Seller</Badge>
              <h1 className="text-3xl font-bold text-black mb-2">Nike Air Max 270</h1>
              <p className="text-lg text-gray-600 mb-4">Men's Shoes</p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(1,247 reviews)</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-black">$150.00</span>
                <span className="text-xl text-gray-500 line-through">$180.00</span>
                <Badge className="bg-green-600 text-white">17% OFF</Badge>
              </div>
            </div>

            {userLocation === "member" && (
              <div className="bg-black text-white p-4 rounded-lg">
                <p className="font-medium">
                  👑 Member Exclusive: {userName ? `${userName}, you` : "You"} save an additional $15 with membership!
                </p>
                <p className="text-sm text-gray-300 mt-1">Final price: $135.00</p>
              </div>
            )}

            <div>
              <h3 className="font-semibold text-black mb-3">Select Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 rounded-lg py-3 px-4 text-center hover:border-black focus:border-black focus:outline-none"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link href="#" className="text-sm text-gray-600 hover:text-black mt-2 inline-block">
                Size Guide
              </Link>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-full text-lg font-medium">
                Add to Bag
              </Button>
              <Button
                variant="outline"
                className="w-full border-black text-black hover:bg-black hover:text-white py-4 rounded-full text-lg font-medium bg-transparent"
              >
                <Heart className="h-5 w-5 mr-2" />
                Favorite
              </Button>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium text-black">Free Delivery</p>
                  <p className="text-sm text-gray-600">
                    {userLocation === "member" ? "Free for members" : "On orders over $50"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium text-black">Free Returns</p>
                  <p className="text-sm text-gray-600">
                    {userLocation === "member" ? "Extended 60-day returns" : "30-day return policy"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium text-black">2-Year Warranty</p>
                  <p className="text-sm text-gray-600">Manufacturer warranty included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Product Details</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Nike Air Max 270 delivers visible Air Max cushioning under every step. Inspired by the Air Max 93
                and Air Max 180, it features Nike's largest heel Air unit yet for a super-soft ride that feels as
                impossible as it looks.
              </p>
              <p>
                The engineered mesh upper provides breathability where you need it most, while synthetic overlays add
                durability and structure. The rubber outsole with a modified waffle pattern provides excellent traction.
              </p>
              <ul className="space-y-2">
                <li>• Nike's largest Air unit provides exceptional cushioning</li>
                <li>• Engineered mesh upper for breathability</li>
                <li>• Synthetic overlays for durability</li>
                <li>• Rubber outsole with waffle pattern for traction</li>
                <li>• Pull tabs on tongue and heel for easy on/off</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Size & Fit</h2>
            <div className="space-y-4 text-gray-700">
              <p>The Nike Air Max 270 fits true to size. For a more relaxed fit, consider going up half a size.</p>
              <ul className="space-y-2">
                <li>• True to size fit</li>
                <li>• Medium width (D)</li>
                <li>• Heel-to-toe drop: 10mm</li>
                <li>• Weight: 11.2 oz (men's size 10)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Reviews (1,247)</h2>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              Write a Review
            </Button>
          </div>
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-black">{review.name}</span>
                        {review.verified && (
                          <Badge variant="outline" className="text-xs">
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-current text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-black mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-black mb-1">{product.name}</h3>
                  <p className="font-bold text-black">${product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-black mb-4">Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black">
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Clothing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Sports</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black">
                    Running
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Basketball
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Soccer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black">
                    About Nike
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Nike, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
