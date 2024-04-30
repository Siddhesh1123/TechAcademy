'use client'

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 sm:px-7 lg:px-9">
        <div className="text-left">
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 ">
            Tech Academy: Empowering you with essential skills for success in
            engineering, IT development, and emerging tech.
          </p>
        </div>
        <div className="text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Mumbai, India</p>
          <p>Email: example@gmail.com</p>
          <p>Phone: +91 900XXXXXXXX</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer