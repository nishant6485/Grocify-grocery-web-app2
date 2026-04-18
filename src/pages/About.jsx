import { FaLeaf, FaUsers, FaAward, FaSmile } from "react-icons/fa";
import story from "../assets/images/about-story-800.webp";

const stats = [
  { icon: <FaUsers />, value: "10k+", label: "Happy Customers" },
  { icon: <FaAward />, value: "500+", label: "Fresh Products" },
  { icon: <FaLeaf />, value: "100%", label: "Organic" },
  { icon: <FaSmile />, value: "24/7", label: "Support" },
];

const About = () => {
  return (
    <div className="fade-in">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Grocify
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We believe that everyone deserves to eat fresh, organic, and
            healthy food — delivered right to their door.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={story}
            alt="Our grocery story"
            loading="lazy"
            width="800"
            height="320"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
          <div>
            <span className="text-primary font-medium">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Fresh groceries, delivered with care
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Grocify started with a simple mission: make healthy food
              accessible to everyone. We partner with local farmers and
              producers to bring you the freshest, highest-quality products at
              fair prices.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              From fruits and vegetables to bakery and dairy — every item is
              carefully selected and packed with care before reaching your
              doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-primary text-3xl flex justify-center mb-3">
                {s.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {s.value}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team / Values */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="text-gray-600 mt-2">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Freshness</h3>
              <p className="text-gray-600 mt-2">
                Products reach your home within hours of harvest.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Quality</h3>
              <p className="text-gray-600 mt-2">
                Every item is inspected and certified for highest quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Trust</h3>
              <p className="text-gray-600 mt-2">
                Transparent pricing with no hidden fees — ever.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
