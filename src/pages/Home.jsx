import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import Features from "../components/Features";
import products from "../data/products";
import promoFruits from "../assets/images/cat-fruits-800.webp";
import promoVeggies from "../assets/images/cat-vegetables-800.webp";

const Home = () => {
  // Show first 8 products as "Featured"
  const featured = products.slice(0, 8);

  return (
    <div className="fade-in">
      <Hero />
      <Features />
      <CategoryList />

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="text-gray-600 mt-2">
                Our best-selling items this week
              </p>
            </div>
            <Link
              to="/shop"
              className="text-primary hover:text-primaryDark font-medium"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner / Promo */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-3xl p-8 md:p-10 flex items-center gap-6">
              <img
                src={promoFruits}
                alt="Fresh fruits promo"
                loading="lazy"
                width="144"
                height="144"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow"
              />
              <div>
                <p className="text-sm text-yellow-700 font-medium">
                  Weekend Offer
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                  Fresh Fruits <br />
                  20% OFF
                </h3>
                <Link
                  to="/shop"
                  className="mt-3 inline-block text-primary font-medium hover:underline"
                >
                  Shop Now →
                </Link>
              </div>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 md:p-10 flex items-center gap-6">
              <img
                src={promoVeggies}
                alt="Fresh vegetables promo"
                loading="lazy"
                width="144"
                height="144"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow"
              />
              <div>
                <p className="text-sm text-green-700 font-medium">Best Deal</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                  Fresh Veggies <br />
                  Up to 30% OFF
                </h3>
                <Link
                  to="/shop"
                  className="mt-3 inline-block text-primary font-medium hover:underline"
                >
                  Shop Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
