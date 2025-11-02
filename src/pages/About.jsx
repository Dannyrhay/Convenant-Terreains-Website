import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import TeamSection from '../components/TeamSection';

import AboutImage1 from '../assets/images/About1.jpg';

// --- Reusable Accordion Item Component ---
const AccordionItem = ({ title, content, isOpen, onClick }) => {
    const ChevronDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );

    return (
        <div className="border-b border-white/20">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-4 px-2 text-xl font-semibold focus:outline-none"
            >
                <span>{title}</span>
                <ChevronDownIcon />
            </button>
            <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? '200px' : '0px' }}
            >
                <div className="p-4 pt-0 text-white/80">
                    {content}
                </div>
            </div>
        </div>
    );
};


const About = () => {
  // State to manage which accordion item is open
  const [openAccordion, setOpenAccordion] = useState(0); // Open the first item by default

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const aboutSlide = [
    {
      image: AboutImage1,
      title: "About Convenant Terreains",
      subtitle: "Building the future of real estate, one relationship at a time.",
    },
  ];

  const coreValues = [
    {
      title: "Honesty & Transparency",
      content: "We believe that trust is earned. We operate with open communication and unwavering ethical standards, making sure you have full confidence in our advice and processes from start to finish."
    },
    {
      title: "Commitment to Quality",
      content: "We don't just meet standards—we set them. Our passion for quality drives us to deliver the best properties and services, with an unyielding attention to detail that ensures superior results."
    },
    {
      title: "Dedicated Partnership",
      content: "More than a transaction, it's a true partnership. We take the time to deeply understand your unique needs and commit to being a proactive, supportive guide focused solely on your success."
    }
  ];

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );


  return (
    <div className="bg-white">
      <HeroSlider slides={aboutSlide} />

      {/* --- NEW: Redesigned "Our Journey" Section --- */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop"
                    alt="Expert team discussing a project"
                    className="rounded-lg shadow-xl"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-md shadow-lg">
                    <h3 className="font-bold text-gray-800 text-xl">EXPERT TEAM</h3>
                </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">Connect with us</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover Our Journey So Far</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2022, Covenntterrains began with a simple mission: to revolutionize the real estate experience in Ghana and beyond. We saw a need for a client-focused agency that combined deep local expertise with a global perspective, built on a foundation of trust and innovation.
              </p>
              <ul className="space-y-4">
                  <li className="flex items-center"><CheckIcon /> Over 15 successful projects completed.</li>
                  <li className="flex items-center"><CheckIcon /> 3+ years of industry-leading experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: Redesigned and Interactive "Core Values" Section --- */}
      <section className=" bg-slate-900 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/80">About Us</p>
                    <div className="space-y-2">
                        {coreValues.map((value, index) => (
                            <h3
                                key={index}
                                className={`text-3xl font-bold transition-opacity duration-300 ${openAccordion === index ? 'opacity-100' : 'opacity-60'}`}
                            >
                                {value.title.toUpperCase()}
                            </h3>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2">
                    {coreValues.map((value, index) => (
                        <AccordionItem
                            key={index}
                            title={value.title}
                            content={value.content}
                            isOpen={openAccordion === index}
                            onClick={() => handleAccordionClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* The TeamSection can remain as is, or you can remove it if this page feels complete */}
      { <TeamSection /> }
    </div>
  );
};

export default About;