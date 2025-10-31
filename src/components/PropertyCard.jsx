import React from 'react';

// --- SVG Icons for property details ---

const BedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

const BathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12 6.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zM12 8c-1.1 0-2 .9-2 2v1h4v-1c0-1.1-.9-2-2-2zM4 21h16v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2z" />
  </svg>
);

const AreaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5" />
  </svg>
);


const PropertyCard = ({ property }) => {
  return (
    // The 'group' class allows us to style child elements on hover of the parent.
    // We've added transition, transform, and hover effects for the pop-up animation.
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        {/* The image will now zoom in slightly when the card is hovered */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/cccccc/ffffff?text=Property`; }}
        />
        <div className="absolute top-0 right-0 bg-amber-500 text-white text-sm font-bold px-3 py-1 m-4 rounded-md">
          FOR SALE
        </div>
      </div>
      <div className="p-6">
        <p className="text-2xl font-bold text-secondary mb-2">{property.price}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-secondary transition-colors duration-300">{property.title}</h3>
        <p className="text-neutral-600 mb-4">{property.address}</p>
        <div className="flex justify-between text-sm text-neutral-500 border-t pt-4">
          <span className="flex items-center"><BedIcon /> {property.bedrooms} Beds</span>
          <span className="flex items-center"><BathIcon /> {property.bathrooms} Baths</span>
          <span className="flex items-center"><AreaIcon /> {property.area} sqft</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;