import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaStar, FaMinus, FaPlus, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Product Not Found</h2>
        <Link
          to="/shop"
          className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-full"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="fade-in py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6"
        >
          <FaArrowLeft /> Back
        </button>

        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl p-6 md:p-10 shadow-sm">
          <div>
            <img
              src={product.image}
              alt={product.name}
              loading="eager"
              width="800"
              height="384"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-gray-500 uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-1 text-yellow-500 mt-3">
              <FaStar />
              <span className="text-gray-700 font-medium">
                {product.rating}
              </span>
              <span className="text-gray-400 ml-2">
                (In Stock: {product.stock})
              </span>
            </div>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-baseline gap-3 mt-6">
              <span className="text-4xl font-bold text-primary">
                ${product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-lg">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-6">
              <span className="font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-primary"
                >
                  <FaMinus size={12} />
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-primary"
                >
                  <FaPlus size={12} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 bg-primary hover:bg-primaryDark text-white px-6 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 transition"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
