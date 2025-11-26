import React from 'react';
import HeroSlider from '../components/HeroSlider';
import PropertyCard from '../components/PropertyCard';


import ProjectImage1 from '../assets/images/Hero2.jpg';

const Listings = () => {
  const listingsSlide = [
    {
      image: ProjectImage1,
      title: "Projects & Properties",
      subtitle: "Explore our curated collection of premium listings.",
    },
  ];

  const properties = [
    { id: 1, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop', price: '$500,000', title: 'Modern Family Home', address: 'Accra, Ghana', bedrooms: 4, bathrooms: 3, area: 2400 },
    { id: 2, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop', price: '$750,000', title: 'Luxury Villa with Pool', address: 'Accra, Ghana', bedrooms: 5, bathrooms: 5, area: 4500 },
    { id: 3, image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop', price: '$350,000', title: 'Cozy Suburban House', address: 'Accra, Ghana', bedrooms: 3, bathrooms: 2, area: 1800 },
    { id: 4, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop', price: '$1,200,000', title: 'Modern Mansion', address: 'Accra, Ghana', bedrooms: 6, bathrooms: 7, area: 7000 },
    { id: 5, image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop', price: '$420,000', title: 'Beachfront Cottage', address: 'Accra, Ghana', bedrooms: 2, bathrooms: 2, area: 1500 },
    { id: 6, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop', price: '$630,000', title: 'Downtown Loft', address: 'Accra, Ghana', bedrooms: 3, bathrooms: 3, area: 2200 },
  ];

  return (
    <div className="bg-white">
      <HeroSlider slides={listingsSlide} />

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;