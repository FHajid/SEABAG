// src/components/AboutPage.tsx
import { FaRecycle, FaTruckMoving, FaLeaf, FaUsers } from 'react-icons/fa';
import Navbar from '../component/navbar';

export default function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About EcoClean Waste Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Committed to cleaner communities through sustainable waste management
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            At EcoClean, we're revolutionizing waste management through innovative recycling programs,
            eco-friendly disposal methods, and community education. Our goal is to divert 75% of
            waste from landfills by 2025 while maintaining exceptional service reliability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-md">
                <service.icon className="text-emerald-600 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose EcoClean?</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <StatCard icon={FaLeaf} title="Eco-Friendly" value="85% Waste Diverted" />
          <StatCard icon={FaTruckMoving} title="Vehicles" value="20+ Green Fleet" />
          <StatCard icon={FaUsers} title="Clients" value="50,000+ Served" />
          <StatCard icon={FaRecycle} title="Recycled" value="1M+ Tons/Yr" />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-emerald-600 mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Green Revolution</h2>
          <p className="text-xl mb-8">Get started with sustainable waste management today</p>
          <button className="bg-white text-emerald-800 px-8 py-3 rounded-full font-semibold
            hover:bg-emerald-100 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

// Helper components
const StatCard = ({ icon: Icon, title, value }: { 
  icon: React.ElementType,
  title: string,
  value: string 
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <Icon className="text-emerald-600 text-4xl mx-auto mb-4" />
    <div className="text-2xl font-bold text-gray-800 mb-2">{value}</div>
    <div className="text-gray-600">{title}</div>
  </div>
  </>
);

// Data arrays
const services = [
  {
    icon: FaRecycle,
    title: "Recycling Programs",
    description: "Advanced sorting systems for maximum material recovery"
  },
  {
    icon: FaTruckMoving,
    title: "Residential Pickup",
    description: "Weekly collection with 99.9% reliability rate"
  },
  {
    icon: FaLeaf,
    title: "Organic Waste",
    description: "Composting services for food and yard waste"
  }
];

const teamMembers = [
  {
    name: "John Greenfield",
    position: "CEO & Founder",
    bio: "20+ years in waste management innovation",
    image: "https://example.com/ceo.jpg" // Replace with actual images
  },
  // Add other team members...

];