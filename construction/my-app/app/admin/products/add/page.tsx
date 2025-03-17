"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Building2,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle,
  Upload,
  X,
  Save,
  ArrowLeft,
  Info,
  ImageIcon,
  FileText,
  Tag,
} from "lucide-react"

export default function AddProductPage() {
  const router = useRouter()
  const [images, setImages] = useState<string[]>([])
  const [featuredImage, setFeaturedImage] = useState<string | null>(null)

  // Mock function to handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages([...images, ...newImages])

      if (!featuredImage) {
        setFeaturedImage(newImages[0])
      }
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    const removedImage = newImages.splice(index, 1)[0]
    setImages(newImages)

    if (featuredImage === removedImage) {
      setFeaturedImage(newImages.length > 0 ? newImages[0] : null)
    }
  }

  const setAsFeatured = (image: string) => {
    setFeaturedImage(image)
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" onClick={() => router.back()} className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">Add New Product</h1>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="details" className="flex items-center gap-2">
            <Info className="h-4 w-4" /> Product Details
          </TabsTrigger>
          <TabsTrigger value="images" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" /> Images
          </TabsTrigger>
          <TabsTrigger value="description" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> Description & Features
          </TabsTrigger>
        </TabsList>

        <form className="space-y-6">
          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base">
                      Product Title
                    </Label>
                    <Input id="title" placeholder="e.g. Riverside Apartments" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-base">
                      Product Type
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-base">
                      Price
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                      <Input id="price" placeholder="e.g. 1250000" className="h-12 pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status" className="text-base">
                      Status
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="sold">Sold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-base">
                      Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                      <Input id="location" placeholder="e.g. Downtown Metro" className="h-12 pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="size" className="text-base">
                      Size/Units
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                      <Input id="size" placeholder="e.g. 24 Units or 75,000 sq ft" className="h-12 pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-base">
                      Timeline
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                      <Input id="timeline" placeholder="e.g. 18 Month Timeline" className="h-12 pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status" className="text-base">
                      Development Status
                    </Label>
                    <div className="relative">
                      <CheckCircle className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                      <Input
                        id="development-status"
                        placeholder="e.g. Ready to Build, Permits Approved"
                        className="h-12 pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="short-description" className="text-base">
                      Short Description
                    </Label>
                    <Textarea
                      id="short-description"
                      placeholder="Brief description of the product (displayed on cards)"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="featured" className="text-base">
                        Featured Product
                      </Label>
                      <p className="text-sm text-gray-500">Display this product as featured on the homepage</p>
                    </div>
                    <Switch id="featured" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-base">Product Images</Label>
                    <p className="text-sm text-gray-500">
                      Upload high-quality images of your product. The first image will be used as the featured image.
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center">
                      <Upload className="h-10 w-10 text-gray-400 mb-2" />
                      <h3 className="text-lg font-medium">Drag and drop your images here</h3>
                      <p className="text-sm text-gray-500 mb-4">or click to browse files</p>
                      <Input
                        id="image-upload"
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <Button variant="outline" onClick={() => document.getElementById("image-upload")?.click()}>
                        Select Files
                      </Button>
                    </div>
                  </div>

                  {images.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-base">Uploaded Images</Label>
                        <p className="text-sm text-gray-500">{images.length} images</p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className={`relative group rounded-lg overflow-hidden border-2 ${
                              featuredImage === image ? "border-orange-500" : "border-transparent"
                            }`}
                          >
                            <div className="aspect-video relative">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Product image ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-white text-black hover:bg-orange-500 hover:text-white"
                                onClick={() => setAsFeatured(image)}
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-white text-black hover:bg-red-500 hover:text-white"
                                onClick={() => removeImage(index)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                            {featuredImage === image && (
                              <div className="absolute top-2 left-2 bg-orange-500 text-black text-xs px-2 py-1 rounded">
                                Featured
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="description" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="full-description" className="text-base">
                      Full Description
                    </Label>
                    <Textarea
                      id="full-description"
                      placeholder="Detailed description of the product"
                      className="min-h-[200px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base">Key Features</Label>
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex gap-2">
                          <Input placeholder={`Feature ${item}`} />
                          {item > 3 && (
                            <Button
                              variant="outline"
                              size="icon"
                              className="shrink-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">
                        Add Feature
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-base">Tags</Label>
                      <div className="flex items-center gap-2">
                        <Input placeholder="Add a tag" className="w-40" />
                        <Button variant="outline" size="sm">
                          <Tag className="h-4 w-4 mr-1" /> Add
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["Premium", "Investment", "New Construction"].map((tag) => (
                        <div key={tag} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                          <span className="text-sm">{tag}</span>
                          <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-500 hover:text-red-500">
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <div className="space-x-2">
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                <Save className="mr-2 h-4 w-4" /> Publish Product
              </Button>
            </div>
          </div>
        </form>
      </Tabs>
    </div>
  )
}

