import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaLeaf className="text-primary text-2xl" />
              <h2 className="text-2xl font-bold text-white">
                Groc<span className="text-primary">ify</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted online grocery store. Fresh, organic, and delivered
              to your door every day.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-primary">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary">
                  Dairy
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary">
                  Bakery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>123 ABES Engineering College, Ghaziabad, IN 201009</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <span>+91 9027834292</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <span>hello@grocify.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; 2026 Grocify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
