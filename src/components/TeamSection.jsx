import React from 'react';

// --- 1. Import your local images from the assets folder ---
import teamMember1 from '../assets/images/CEO.jpg';
import teamMember2 from '../assets/images/chiefArchitect.jpg';
import teamMember3 from '../assets/images/chiefArchitect2.jpg';


// A reusable component for each team member card
const TeamMemberCard = ({ image, name, title }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group h-96">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        // The onError fallback is still good practice, just in case.
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x800/cccccc/ffffff?text=Image+Not+Found`; }}
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-white text-2xl font-bold">{name}</h3>
        <p className="text-white/90 text-sm">{title}</p>
      </div>
    </div>
  );
};


const TeamSection = () => {
  // --- 2. Use the imported images in your data array ---
  const teamMembers = [
    {
      name: "Kevin Asante",
      title: "CEO",
      image: teamMember1, // Use the imported variable
    },
    {
      name: "Stanley",
      title: "Chief Architect",
      image: teamMember2, // Use the imported variable
    },
    {
      name: "Eli",
      title: "Employee of the Year",
      image: teamMember3, // Use the imported variable
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wider uppercase">
            Professional Team
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our professional team, dedicated to excellence, brings extensive expertise and meticulous attention to detail to every construction project, ensuring superior quality and client satisfaction.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;