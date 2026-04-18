import { Link } from "react-router-dom";
import catFruits from "../assets/images/cat-fruits-800.webp";
import catVegetables from "../assets/images/cat-vegetables-800.webp";
import catDairy from "../assets/images/cat-dairy-800.webp";
import catBakery from "../assets/images/cat-bakery-800.webp";
import catBeverages from "../assets/images/cat-beverages-800.webp";
import catMeat from "../assets/images/cat-meat-800.webp";

const categories = [
  { name: "Fruits", image: catFruits, color: "bg-red-50" },
  { name: "Vegetables", image: catVegetables, color: "bg-green-50" },
  { name: "Dairy", image: catDairy, color: "bg-blue-50" },
  { name: "Bakery", image: catBakery, color: "bg-yellow-50" },
  { name: "Beverages", image: catBeverages, color: "bg-orange-50" },
  { name: "Meat", image: catMeat, color: "bg-pink-50" },
];

const CategoryList = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our wide range of fresh products
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat) => (
            <Link
              to="/shop"
              key={cat.name}
              className={`${cat.color} rounded-2xl p-5 text-center hover:shadow-md transition-all transform hover:-translate-y-1`}
            >
              <img
                src={cat.image}
                alt={`${cat.name} category`}
                loading="lazy"
                width="80"
                height="80"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-3 border-4 border-white shadow"
              />
              <h3 className="font-semibold text-gray-800">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
