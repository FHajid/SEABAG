import { FaRecycle, FaTruckMoving, FaLeaf, FaUsers } from 'react-icons/fa';
import Navbar from '../component/navbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const serviceSlides = [
  {
    icon: FaRecycle,
    title: "Recycling Programs",
    description: "Advanced sorting systems for maximum material recovery.",
    image: "/recyled_product.jpg",
  },
  {
    icon: FaTruckMoving,
    title: "Smart Waste Solutions",
    description: "Weekly collection with 99.9% reliability rate.",
    image: "/wasted_solution.jpg",
  },
  {
    icon: FaLeaf,
    title: "Planet-First Services",
    description: "Composting services for food and yard waste.",
    image: "/planet_ocean.jpg",
  },
];


const teamMembers = [
  {
    name: "John Greenfield",
    position: "CEO & Founder",
    bio: "20+ years in waste management innovation",
    image: "/jhon.jpg",
    
  },

  {
    name: "sandy Smith",
    position: "Marketing Director",
    bio: "10+ years in waste management innovation",
    image: "/sandy_smith.jpg",
    
  },

  {
    name: "Mark Johnson",
    position: "research Director",
    bio: "9+ years in waste management innovation",
    image: "mark_johnson.jpg",
    
  },
];

const StatCard = ({ icon: Icon, title, value }: { 
  icon: React.ElementType,
  title: string,
  value: string 
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center">
    <Icon className="text-blue-500 text-4xl mx-auto mb-4" />
    <div className="text-2xl font-bold text-gray-800">{value}</div>
    <div className="text-gray-600 mt-1">{title}</div>
  </div>
);

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center border-b border-gray-200 bg-white">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">
                About SEABAG Waste Solutions
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Committed to building cleaner communities through smart, sustainable waste management.
              </p>
            </div>
          </section>




        {/* Services Section */}
        <section className="min-h-screen bg-white border-t border-gray-200 flex items-center py-12">
          <div className="w-full max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-500">Driving a Cleaner Future</h2>

            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={50}
              slidesPerView={1}
              className="w-full"
            >
              {serviceSlides.map((service, idx) => (
                <SwiperSlide key={idx}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 sm:h-80 md:h-[600px] lg:h-[800px] object-cover rounded-xl shadow"
                    />

                    {/* Text */}
                    <div className="text-left px-2 md:px-4">
                      <div className="flex items-center gap-3 mb-4">
                        <service.icon className="text-blue-500 text-3xl" />
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg">{service.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>



        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-blue-500">Why Choose EcoClean?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard icon={FaLeaf} title="Eco-Friendly" value="85% Waste Diverted" />
              <StatCard icon={FaTruckMoving} title="Vehicles" value="20+ Green Fleet" />
              <StatCard icon={FaUsers} title="Clients" value="50,000+ Served" />
              <StatCard icon={FaRecycle} title="Recycled" value="1M+ Tons/Yr" />
            </div>
          </div>
        </section>

        {/* Team Section */}
    <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12 text-blue-500">Our Crew</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {teamMembers.map((member) => (
        <div
          key={member.name}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-left transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          {/* Image Wrapper */}
          <div className="w-full h-[400px] sm:h-[300px] md:h-[320px] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top transition duration-700 ease-in-out"
            />
          </div>

          {/* Text Content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-blue-500 font-medium mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          </div>
        </div>

      ))}
    </div>
  </div>
</section>



        {/* CTA */}
        <section className="py-20 border-t border-gray-200 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Join Our Green Revolution
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Let’s work together toward a cleaner, more sustainable future.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
