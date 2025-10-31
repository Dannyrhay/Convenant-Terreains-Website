import React from 'react';
import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';

const ConsultingCta = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop';

  return (
    <ParallaxBanner
      layers={[
        { image: backgroundImageUrl, speed: -20 },
        {
          speed: -10,
          children: (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="relative container mx-auto px-4 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider uppercase">
                  Comprehensive Real Estate Consulting Services
                </h2>

                <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>

                <p className="max-w-2xl mx-auto mb-8 text-white/90">
                  For expert guidance and tailored solutions, contact us now for comprehensive real estate consulting services.
                </p>

                <Link
                  to="/contact"
                  className="inline-block font-semibold text-white bg-amber-500 py-3 px-8 rounded-md hover:bg-amber-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  Contact Now
                </Link>
              </div>
            </div>
          ),
        },
      ]}
      className="h-[60vh]"
    />
  );
};

export default ConsultingCta;