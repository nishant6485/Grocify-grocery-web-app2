import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width="400"
            height="192"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-accent text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
          <span className="absolute top-3 right-3 bg-white/90 text-xs text-gray-700 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
            <FaStar />
            <span className="text-gray-700 font-medium">{product.rating}</span>
          </div>
          <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="text-primary font-bold text-lg">
                ${product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-sm ml-2">
                  ${product.oldPrice}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primaryDark text-white p-2.5 rounded-full transition"
              aria-label={`Add ${product.name} to cart`}
            >
              <FaShoppingCart size={14} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
