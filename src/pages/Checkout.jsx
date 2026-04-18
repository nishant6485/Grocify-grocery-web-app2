import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    payment: "cod",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
    setTimeout(() => navigate("/"), 3000);
  };

  const deliveryFee = totalPrice > 0 ? 4.99 : 0;
  const grandTotal = totalPrice + deliveryFee;

  if (placed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center fade-in">
        <FaCheckCircle className="text-6xl text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mt-3">
          Thank you for shopping with Grocify. Your order is on its way 🚚
        </p>
        <p className="text-sm text-gray-500 mt-6">
          Redirecting to home in a few seconds...
        </p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-6 bg-primary text-white px-6 py-3 rounded-full"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Checkout
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Billing Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Billing Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP / Postal Code"
                value={form.zip}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            {/* Payment */}
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Payment Method
            </h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === "card"}
                  onChange={handleChange}
                />
                Credit / Debit Card
              </label>
              <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={form.payment === "upi"}
                  onChange={handleChange}
                />
                UPI / Net Banking
              </label>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Your Order
            </h2>
            <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">
                    {item.name}{" "}
                    <span className="text-gray-400">× {item.quantity}</span>
                  </span>
                  <span className="text-gray-900 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-4" />
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mt-2">
              <span>Delivery</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-full font-medium transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
