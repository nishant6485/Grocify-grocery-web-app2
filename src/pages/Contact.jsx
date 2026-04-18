import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const info = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      text: "123 Market Street, Green City, IN 560001",
    },
    {
      icon: <FaPhone />,
      title: "Phone Number",
      text: "+91 98765 43210",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      text: "hello@grocify.com",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      text: "Mon - Sat: 8am - 9pm",
    },
  ];

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Our team
            usually responds within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {info.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl shadow-sm flex gap-4 items-start"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-full text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                title="Grocify Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.72756108546!2d77.59456!3d12.97159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Send us a Message
            </h2>
            {submitted && (
              <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl mb-4 text-sm">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-full font-medium w-full transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
