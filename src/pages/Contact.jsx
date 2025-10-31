import React from 'react';
import HeroSlider from '../components/HeroSlider';
import MapSection from '../components/MapSection';
import contactHeroImage from '../assets/images/contactus2.jpg';

const Contact = () => {
  const contactSlide = [
    {
      image: contactHeroImage,
      title: "Contact Us",
      subtitle: "We're here to help. Reach out to us anytime.",
    },
  ];

  return (
    <div className="bg-white">
      <HeroSlider slides={contactSlide} />

      {/* Get In Touch Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
                <p className="text-gray-600 mt-2">Have a question or a project in mind? Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <form className="max-w-2xl mx-auto mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="Your Email"/>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" id="subject" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="How can we help?" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="Your message..."></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-amber-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-amber-600 transform hover:-translate-y-1 transition-all duration-300">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
      </section>

      {/* 2. Add the MapSection component here */}
      <MapSection />
    </div>
  );
};

export default Contact;