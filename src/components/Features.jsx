import { FaTruck, FaLeaf, FaShieldAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-3xl" />,
    title: "Free Delivery",
    desc: "On all orders above $49",
  },
  {
    icon: <FaLeaf className="text-3xl" />,
    title: "100% Organic",
    desc: "Certified organic products",
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Secure Payment",
    desc: "100% protected payments",
  },
  {
    icon: <FaHeadset className="text-3xl" />,
    title: "24/7 Support",
    desc: "Dedicated customer care",
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-primary mb-3 flex justify-center">
              {f.icon}
            </div>
            <h3 className="font-semibold text-gray-800">{f.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
