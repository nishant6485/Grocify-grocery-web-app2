import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import hero from "../assets/images/hero-800.webp";
import { FiTruck } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="fade-in">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              100% Fresh & Organic
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fresh Groceries <br />
              <span className="text-primary">Delivered Daily</span>
            </h1>
            <p className="text-gray-600 mt-5 text-base md:text-lg max-w-lg">
              Shop fresh fruits, vegetables, dairy, and more — delivered right
              to your doorstep. Quality you can trust, prices you'll love.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/shop"
                className="bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition"
              >
                Shop Now <FaArrowRight />
              </Link>
              <Link
                to="/about"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">10k+</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-sm text-gray-600">Support</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={hero}
              alt="Fresh groceries on display"
              loading="eager"
              width="800"
              height="480"
              className="rounded-2xl shadow-xl w-full object-cover h-80 md:h-[480px]"
            />
            <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-2xl p-4 items-center gap-3 hidden sm:flex">
              <div className="bg-primary/10 text-primary rounded-full p-3 text-xl">
                <FiTruck/>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Free Delivery</h4>
                <p className="text-xs text-gray-500">On orders above ₹499</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
