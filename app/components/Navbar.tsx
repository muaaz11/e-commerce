import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Announcement bar */}
      <div className="bg-gray-900 px-4 py-2 text-center text-sm text-white">
        Free shipping on orders over Rs. 5,000
      </div>

      {/* Main navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-2xl font-bold tracking-tight text-gray-900"
        >
          <span className="rounded-lg bg-gray-900 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 7h12l1 14H5L6 7Z" />
              <path d="M9 7V5a3 3 0 0 1 6 0v2" />
            </svg>
          </span>
          MyStore
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Shop
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            About
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <Link
            href="/products"
            aria-label="Search products"
            className="hidden text-gray-700 hover:text-black sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </Link>

          {/* Account */}
          <Link
            href="/login"
            aria-label="My account"
            className="text-gray-700 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21a7 7 0 0 1 14 0" />
            </svg>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative text-gray-700 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className="flex gap-6 overflow-x-auto border-t border-gray-100 px-4 py-3 md:hidden">
        <Link href="/" className="shrink-0 text-sm font-medium text-gray-700">
          Home
        </Link>
        <Link
          href="/products"
          className="shrink-0 text-sm font-medium text-gray-700"
        >
          Shop
        </Link>
        <Link
          href="/categories"
          className="shrink-0 text-sm font-medium text-gray-700"
        >
          Categories
        </Link>
        <Link
          href="/about"
          className="shrink-0 text-sm font-medium text-gray-700"
        >
          About
        </Link>
      </div>
    </header>
  );
}
