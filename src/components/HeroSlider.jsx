import { useState, useEffect } from "react";
import { Parallax } from 'react-scroll-parallax';
import { NavLink } from 'react-router-dom'; // --- NEW: Import NavLink for CTA

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides && slides.length > 1) {
      const timer = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 8000); // Note: Video duration might be longer, but slide will still change
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slides]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* --- MODIFIED: Conditional background rendering --- */}
          <Parallax speed={-25} className="h-full">
            {slide.video ? (
              // If 'video' prop exists, render video
              <video
                src={slide.video}
                autoPlay
                loop
                muted
                playsInline // Important for mobile
                className="w-full h-full object-cover"
                key={slide.video} // Add key to force re-render on video source change
              />
            ) : (
              // Otherwise, render image
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/1600x900/cccccc/ffffff?text=Image+Not+Found`;
                }}
              />
            )}
          </Parallax>
          {/* --- END MODIFICATION --- */}

          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <Parallax speed={10}>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl animate-fade-in-up">
                {slide.subtitle}
              </p>

              {/* --- NEW: Call to Action Button --- */}
              {slide.cta && (
                <NavLink
                  to={slide.cta.link}
                  className="bg-amber-500 text-white font-bold py-3 px-8 rounded-lg text-lg
                             inline-block mt-8 animate-fade-in-up
                             hover:bg-amber-600 transform hover:-translate-y-1 transition-all duration-300"
                >
                  {slide.cta.text}
                </NavLink>
              )}
              {/* --- END NEW CTA --- */}

            </Parallax>
          </div>
        </div>
      ))}

      {/* Navigation dots (no change) */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;