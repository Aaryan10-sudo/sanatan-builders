import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/admin/products/add">
          <Button className="bg-orange-500 hover:bg-orange-600 text-black">
            <Plus className="mr-2 h-4 w-4" /> Add New Product
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Location</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-200"></div>
                    <div className="ml-4">
                      <div className="font-medium">Riverside Apartments</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">Residential</td>
                <td className="py-3 px-4">$1,250,000</td>
                <td className="py-3 px-4">Downtown Metro</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-200"></div>
                    <div className="ml-4">
                      <div className="font-medium">Metro Business Center</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">Commercial</td>
                <td className="py-3 px-4">$3,750,000</td>
                <td className="py-3 px-4">Business District</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-200"></div>
                    <div className="ml-4">
                      <div className="font-medium">Oakridge Community</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">Residential</td>
                <td className="py-3 px-4">$5,200,000</td>
                <td className="py-3 px-4">Suburban Area</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Draft</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

