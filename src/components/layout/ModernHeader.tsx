import { Search, ShoppingBag, User, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          Free shipping on orders over $100 | 30-day returns
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <h1 className="text-2xl font-bold text-gray-900 ml-2 md:ml-0">
              Modern
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">New</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Women</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Men</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Kids</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Sale</a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
              <Search className="h-4 w-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent flex-1 outline-none text-sm"
              />
            </div>

            {/* Mobile search */}
            <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>

            {/* User actions */}
            <button className="p-2 rounded-md hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">New</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Women</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Men</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Kids</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Sale</a>
              <div className="pt-4 border-t">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <Search className="h-4 w-4 text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent flex-1 outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
