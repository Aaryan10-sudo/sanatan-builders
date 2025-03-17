import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2,
  HardHat,
  Truck,
  Users,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Calendar,
  User,
  Tag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ConstructionHomepage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white text-black">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Sanatan Builders logo"
              width={60} // Set a sensible width
              height={60} // Auto scales
            />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-orange-500"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-orange-500"
            >
              Projects
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium transition-colors hover:text-orange-500"
            >
              Products
            </Link>
            <Link
              href="#blog"
              className="text-sm font-medium transition-colors hover:text-orange-500"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-orange-500"
            >
              Contact
            </Link>
          </nav>

          <Button className="hidden md:inline-flex bg-black hover:bg-orange-600 text-white">
            Get a Quote
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-white text-white hover:bg-white/10 hover:text-orange-500"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative h-[600px]">
          <Image
            src="/maxresdefault.jpg"
            alt="Construction site with workers and equipment"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-start">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Building Your Vision,{" "}
                <span className="text-orange-500">Exceeding Expectations</span>
              </h1>
              <p className="text-white/90 md:text-xl">
                Professional construction services for residential and
                commercial projects. Quality craftsmanship, on-time delivery,
                and customer satisfaction guaranteed.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                  Our Services
                </Button>
                <Button
                  variant="outline"
                  className="text-black border-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Comprehensive Construction Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From residential renovations to commercial construction, we
                offer a wide range of services to meet your needs.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Building2 className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Commercial Construction
              </h3>
              <p className="text-sm text-gray-500">
                Office buildings, retail spaces, and industrial facilities built
                to the highest standards.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-orange-600"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <HardHat className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Residential Construction
              </h3>
              <p className="text-sm text-gray-500">
                Custom homes, renovations, and additions that transform your
                living space.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-orange-600"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Truck className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Infrastructure Projects
              </h3>
              <p className="text-sm text-gray-500">
                Roads, bridges, and utilities built with durability and public
                safety in mind.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-orange-600"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Users className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Project Management</h3>
              <p className="text-sm text-gray-500">
                Expert oversight ensuring your project is completed on time and
                within budget.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-orange-600"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Clock className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Renovation & Remodeling
              </h3>
              <p className="text-sm text-gray-500">
                Transform existing spaces with our expert renovation and
                remodeling services.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-orange-600"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <CheckCircle className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Consultation & Design</h3>
              <p className="text-sm text-gray-500">
                Expert advice and design services to bring your construction
                vision to life.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-orange-600"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-black">
                Our Products
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Construction Projects For Sale
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Invest in our premium pre-designed construction projects and
                property developments.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Product 1 */}
            <Card className="overflow-hidden border-gray-800 bg-gray-950 transition-all hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Modern apartment complex"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-black">
                    Featured
                  </Badge>
                  <span className="text-orange-500 font-bold">
                    Rs.1,250,000
                  </span>
                </div>
                <CardTitle className="text-xl mt-2 text-white">
                  Riverside Apartments
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Luxury apartment complex with 24 units, riverside views, and
                  premium amenities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-1 text-white">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>Downtown Metro</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Building2 className="h-4 w-4 text-orange-500" />
                    <span>24 Units</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Ready to Build</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>18 Month Timeline</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">
                  View Project Details
                </Button>
              </CardFooter>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden border-gray-800 bg-gray-950 transition-all hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Commercial office building"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-black">
                    Commercial
                  </Badge>
                  <span className="text-orange-500 font-bold">
                    Rs.3,750,000
                  </span>
                </div>
                <CardTitle className="text-xl mt-2 text-white">
                  Metro Business Center
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Modern office complex with 5 floors, underground parking, and
                  smart building technology.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-1 text-white">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>Business District</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Building2 className="h-4 w-4 text-orange-500" />
                    <span>75,000 sq ft</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Permits Approved</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>24 Month Timeline</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">
                  View Project Details
                </Button>
              </CardFooter>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden border-gray-800 bg-gray-950 transition-all hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Residential community"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-black">
                    Residential
                  </Badge>
                  <span className="text-orange-500 font-bold">
                    Rs.5,200,000
                  </span>
                </div>
                <CardTitle className="text-xl mt-2 text-white">
                  Oakridge Community
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Planned community with 45 single-family homes, community
                  center, and green spaces.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-1 text-white">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>Suburban Area</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Building2 className="h-4 w-4 text-orange-500" />
                    <span>45 Homes</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Ready for Development</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>36 Month Timeline</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">
                  View Project Details
                </Button>
              </CardFooter>
            </Card>

            {/* Product 4 */}
            <Card className="overflow-hidden border-gray-800 bg-gray-950 transition-all hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Mixed-use development"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-black">
                    Mixed-Use
                  </Badge>
                  <span className="text-orange-500 font-bold">
                    Rs.8,900,000
                  </span>
                </div>
                <CardTitle className="text-xl mt-2 text-white">
                  Urban Village Square
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Mixed-use development with retail, office space, and luxury
                  condominiums.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-1 text-white">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>City Center</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Building2 className="h-4 w-4 text-orange-500" />
                    <span>120,000 sq ft</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Zoning Approved</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>42 Month Timeline</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">
                  View Project Details
                </Button>
              </CardFooter>
            </Card>

            {/* Product 5 */}
            <Card className="overflow-hidden border-gray-800 bg-gray-950 transition-all hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Industrial complex"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-black">
                    Industrial
                  </Badge>
                  <span className="text-orange-500 font-bold">
                    Rs.4,500,000
                  </span>
                </div>
                <CardTitle className="text-xl mt-2 text-white">
                  Eastside Industrial Park
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Modern industrial complex with 8 units, loading docks, and
                  logistics infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-1 text-white">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>Industrial Zone</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Building2 className="h-4 w-4 text-orange-500" />
                    <span>85,000 sq ft</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Ready to Develop</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>20 Month Timeline</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">
                  View Project Details
                </Button>
              </CardFooter>
            </Card>

            {/* Product 6 */}
            <Card className="overflow-hidden border-gray-800 bg-gray-950 transition-all hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Retail plaza"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-black">
                    Retail
                  </Badge>
                  <span className="text-orange-500 font-bold">
                    Rs.2,800,000
                  </span>
                </div>
                <CardTitle className="text-xl mt-2 text-white">
                  Westview Shopping Plaza
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Modern retail development with 12 units, ample parking, and
                  high visibility location.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-1 text-white">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>Commercial District</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Building2 className="h-4 w-4 text-orange-500" />
                    <span>45,000 sq ft</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Fully Permitted</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>16 Month Timeline</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black">
                  View Project Details
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black">
              View All Available Projects{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="/maxresdefault.jpg"
              width="600"
              height="600"
              alt="Construction team at work"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Building Excellence Since 1995
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  {
                    "With over 25 years of experience, we've established ourselves as leaders in the construction industry."
                  }
                </p>
              </div>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-bold">Experienced Team</h3>
                    <p className="text-sm text-gray-500">
                      Our team of professionals brings decades of combined
                      experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-bold">Quality Craftsmanship</h3>
                    <p className="text-sm text-gray-500">
                      We never compromise on quality, using only the best
                      materials and techniques.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-bold">On-Time Delivery</h3>
                    <p className="text-sm text-gray-500">
                      We understand the importance of deadlines and strive to
                      complete projects on schedule.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-bold">Transparent Pricing</h3>
                    <p className="text-sm text-gray-500">
                      No hidden costs or surprises - we provide detailed
                      estimates upfront.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                  About Our Company
                </Button>
                <Button variant="outline">Meet The Team</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Featured Projects
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a look at some of our recent construction projects that
                showcase our expertise and quality.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Modern office building"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Downtown Office Complex
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  A 12-story modern office building in the heart of the city.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                    Commercial
                  </span>
                  <Link
                    href="#"
                    className="text-sm font-medium text-orange-600"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Luxury residential homes"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Lakeside Residences</h3>
                <p className="text-sm text-gray-500 mb-4">
                  A collection of 24 luxury homes with lakefront views.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                    Residential
                  </span>
                  <Link
                    href="#"
                    className="text-sm font-medium text-orange-600"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl hover:border-orange-500">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Highway construction"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Highway 95 Expansion</h3>
                <p className="text-sm text-gray-500 mb-4">
                  A major infrastructure project expanding the highway to six
                  lanes.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                    Infrastructure
                  </span>
                  <Link
                    href="#"
                    className="text-sm font-medium text-orange-600"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                Our Blog
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Construction Insights
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest trends, tips, and news from the
                construction industry.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Modern construction techniques"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2025</span>
                  <User className="h-4 w-4 ml-2" />
                  <span>John Builder</span>
                </div>
                <CardTitle className="text-xl">
                  Modern Construction Techniques That Save Time and Money
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 line-clamp-3">
                  Discover the latest innovations in construction technology
                  that are revolutionizing how we build. From prefabrication to
                  3D printing, these methods are changing the industry.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-500">Technology</span>
                </div>
                <Link
                  href="#"
                  className="text-sm font-medium text-orange-600 hover:underline"
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>

            {/* Blog Post 2 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Sustainable building materials"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 10, 2025</span>
                  <User className="h-4 w-4 ml-2" />
                  <span>Sarah Architect</span>
                </div>
                <CardTitle className="text-xl">
                  Sustainable Building Materials for Eco-Friendly Construction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 line-clamp-3">
                  Explore the growing range of sustainable building materials
                  that reduce environmental impact while maintaining structural
                  integrity and aesthetic appeal.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-500">Sustainability</span>
                </div>
                <Link
                  href="#"
                  className="text-sm font-medium text-orange-600 hover:underline"
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>

            {/* Blog Post 3 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Construction project management"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 5, 2025</span>
                  <User className="h-4 w-4 ml-2" />
                  <span>Michael Manager</span>
                </div>
                <CardTitle className="text-xl">
                  5 Project Management Tips for Construction Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 line-clamp-3">
                  Learn the essential project management strategies that keep
                  construction projects on time, within budget, and meeting
                  quality standards.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-500">Management</span>
                </div>
                <Link
                  href="#"
                  className="text-sm font-medium text-orange-600 hover:underline"
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your{" "}
                <span className="text-orange-500">Project?</span>
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {
                  "Contact us today for a free consultation and estimate. Let's build something great together"
                }
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                Get a Free Quote
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us Today
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Have questions or ready to start your next project? Reach out
                  to our team for assistance.
                </p>
              </div>
              <ul className="grid gap-6 md:gap-8">
                <li className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-sm text-gray-500">+977 9777777777</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm text-gray-500">
                      info@sanatanbuilders@gmail.com.com
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-bold">Office</h3>
                    <p className="text-sm text-gray-500">
                      Kathmandu Metropolitan City, Nepal
                      <br />
                      Boudha 6 , Kathmandu{" "}
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-md">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">
                      Residential Construction
                    </option>
                    <option value="infrastructure">
                      Infrastructure Projects
                    </option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="consultation">Consultation & Design</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/hlooooo.jpg"
                  alt="Sanatan Builders logo"
                  width={60} // Set a sensible width
                  height={60} // Auto scales
                />
                <span className="text-xl font-bold">Sanatan Builders</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Quality construction services for residential, commercial, and
                infrastructure projects since 1995.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Residential Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Infrastructure Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Renovation & Remodeling
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Consultation & Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 text-sm"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 text-orange-500 shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Kathmandu Metropolitan City, Nepal
                    <br />
                    Boudha 6, Kathmandu
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-400 text-sm">+977 9777777777</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-400 text-sm">
                    info@sanatanbuilders@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Sanatan Builders. All rights
                reserved.
              </p>
              <nav className="flex gap-4">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
