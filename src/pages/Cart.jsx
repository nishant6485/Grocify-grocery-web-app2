import { Link } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
    clearCart,
  } = useCart();

  const deliveryFee = totalPrice > 0 ? 4.99 : 0;
  const grandTotal = totalPrice + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center fade-in">
        <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-6 bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-full transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="fade-in py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 md:p-5 shadow-sm flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width="96"
                  height="96"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-primary font-bold mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center border border-gray-200 rounded-full">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-2 hover:text-primary"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="px-3 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-2 hover:text-primary"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                  >
                    <FaTrash size={12} /> Remove
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-red-600 hover:underline mt-2"
            >
              Clear Cart
            </button>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block text-center bg-primary hover:bg-primaryDark text-white py-3 rounded-full font-medium transition"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/shop"
              className="mt-3 block text-center text-gray-600 hover:text-primary text-sm"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
