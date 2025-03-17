import type React from "react";
import Link from "next/link";
import {
  Building2,
  LayoutDashboard,
  Package,
  FileText,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col bg-black text-white">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">Sanatan Builders</span>
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center gap-3 px-3 py-2 bg-gray-800 text-white rounded-md"
            >
              <Package className="h-5 w-5 text-orange-500" />
              Products
            </Link>
            <Link
              href="/admin/blog"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              <FileText className="h-5 w-5" />
              Blog Posts
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              <Users className="h-5 w-5" />
              Users
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <button className="flex w-full items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md">
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
