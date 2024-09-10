// components/Navbar.js

export default function Navbar() {
  return (
    <nav className="text-black p-2">
      <div className="container mx-auto flex justify-between items-center text-sm">
        {/* Logo */}
        <a href="/" className="mr-auto">
          {" "}
          <img src="/images/logo.png" alt="logo" className="w-7 h-7" />
        </a>
        {/* Navigation Links */}
        <div className="flex items-center">
          <a href="/about" className="mr-4 font-serif font-semibold">
            {/* Adjusted spacing */}
            YGN, MM
          </a>
          <img
            src="/images/right-arrow.png"
            alt="arrow"
            className="w-4 h-4 inline"
          />
          <a href="/contact" className="ml-4 font-serif font-semibold">
            {/* Adjusted spacing */}
            SG, SG
          </a>
        </div>
      </div>
    </nav>
  );
}
