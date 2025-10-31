import React from 'react';

// --- SVG Icons for the stats section ---

const ClientIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const WorldwideIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const GrowthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);


const MissionSection = () => {
  const stats = [
    {
      icon: <ClientIcon />,
      title: "10K Client",
      description: "A global clientele relationship.",
    },
    {
      icon: <WorldwideIcon />,
      title: "Worldwide",
      description: "Hosting a portfolio that contains multiple properties spanning beyond the coasts of Africa.",
    },
    {
      icon: <ProjectsIcon />,
      title: "610 Projects",
      description: "Over 400 properties sold through our brokerage arm. 150+ architectural design and 60+ building/installing renovation projects completed by our construction arm.",
    },
    {
      icon: <GrowthIcon />,
      title: "$16M PE",
      description: "Grossing a PBT exceeding 16 million dollars since conception in 2014.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Top Section: Mission Statement */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
              alt="Luxurious modern living room"
              className="rounded-lg shadow-xl object-cover w-full h-full"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/cccccc/ffffff?text=Interior`; }}
            />
          </div>
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-wider uppercase">
              Our Mission is Building The Future
            </h2>
            <p className="text-gray-600 mb-8">
              We are a leading global real estate company headquartered in Ghana, specializing in commercial and luxury residential properties.
            </p>
            <button className="font-semibold text-gray-800 bg-transparent py-3 px-8 border-2 border-amber-500 rounded-md hover:bg-amber-500 hover:text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
              All Projects
            </button>
          </div>
        </div>

        {/* Bottom Section: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 group transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="flex justify-center items-center">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-amber-600 mb-2">{stat.title}</h3>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;