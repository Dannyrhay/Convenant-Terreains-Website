import React from 'react';
import HeroSlider from '../components/HeroSlider';


import ServiceImage1 from '../assets/images/Services2.jpg';

// --- SVG Icons ---
const ValuationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);
const InvestmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v.01M12 15c-.51 0-1.02.194-1.414.586A2.001 2.001 0 009 17.001A2 2 0 1012 15z" />
  </svg>
);
const RelocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0 0v2.25m0-2.25h1.5m-1.5 0H5.625m3.375 0H9m-3.375 0H5.625m0 0V6.75m0 0H9m3.375 0v2.25m0 0v-2.25m0 0h1.5m-1.5 0H18.375m-3.375 0h3.375m0 0V6.75m0 0h-3.375M14.25 12.75h4.5m-4.5 0v2.25m0 0v-2.25m0 0h-1.5m1.5 0h.01M6.375 12.75h4.5m-4.5 0v2.25m0 0v-2.25m0 0H9m1.5-1.5H12m0 0H9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const LandBankingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l.41-1.64a.75.75 0 01.737-.53h17.206a.75.75 0 01.736.53l.41 1.64M4.5 15.75h15" />
  </svg>
);

// Store service data in an array
const servicesList = [
  {
    icon: <ValuationIcon />,
    title: "Property Valuation",
    description: "Get accurate and comprehensive insights into your property's value and the current market trends."
  },
  {
    icon: <InvestmentIcon />,
    title: "Investment Property Services",
    description: "We identify lucrative opportunities and provide comprehensive support for your real estate investments."
  },
  {
    icon: <RelocationIcon />,
    title: "Relocation Services",
    description: "Our relocation services provide seamless support, helping you find your new home and settle into your community."
  },
  {
    icon: <LandBankingIcon />,
    title: "Land Banking",
    description: "Get premium land services anywhere in Ghana for the right price with no issues."
  }
];

const Services = () => {
  const servicesSlide = [
    {
      image: ServiceImage1,
      title: "Our Services",
      subtitle: "Tailored solutions for every real estate need.",
    },
  ];

  return (
    <div>
      <HeroSlider slides={servicesSlide} />

      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">What We Offer</h2>
                <p className="text-gray-300 mt-2">From brokerage to construction, we provide a comprehensive suite of services.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

              {/* --- MODIFICATION START --- */}
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-lg shadow-lg transform
                             transition-all duration-300 ease-in-out
                             hover:-translate-y-2 hover:bg-slate-700 hover:shadow-xl"
                >
                    {service.icon}
                    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
              {/* --- MODIFICATION END --- */}

            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;