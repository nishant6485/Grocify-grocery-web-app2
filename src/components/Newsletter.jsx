import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white shadow-lg">
          <FaEnvelope className="mx-auto text-4xl mb-4 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-2 text-white/90 max-w-xl mx-auto">
            Get weekly updates on new arrivals, seasonal offers, and exclusive
            discounts — right in your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm bg-white/20 inline-block px-4 py-1 rounded-full">
              ✓ Thanks for subscribing!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
