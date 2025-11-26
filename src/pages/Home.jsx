import HeroSlider from "../components/HeroSlider";
import MissionSection from "../components/MissionSection";
import ConsultingCta from "../components/ConsultingCta";
import MapSection from "../components/MapSection";
import { Parallax } from "react-scroll-parallax";
import { NavLink } from "react-router-dom";

// --- NEW: Import local assets ---
// Make sure you have these files in the correct folders
import heroVideo from '../assets/videos/Site.mp4';
import homeImage1 from '../assets/images/pro2.jpg';
import homeImage2 from '../assets/images/pro3.jpg';

import sunlitImage from '../assets/images/sunlit-estates.jpg';
import whiteOakImage from '../assets/images/white-oak-homes.jpg';
import graphiteImage from '../assets/images/graphite-homes.jpg';
import landsImage from '../assets/images/premiumlands.jpg';

const Home = () => {
    // --- MODIFIED: Updated slides array ---
    const homeSlides = [
        {
            video: heroVideo, // Use the imported video
            title: "Find Your Dream Home",
            subtitle: "We have the best properties for you",
            cta: { // Add Call to Action
                text: "Consult Now",
                link: "/contact"
            }
        },
        {
            image: homeImage1, // Use the imported image
            title: "Luxury Apartments",
            subtitle: "Experience the best of city living",
            cta: { // You can add CTAs to all slides
                text: "View Listings",
                link: "/listings"
            }
        },
        {
            image: homeImage2, // Use the imported image
            title: "",
            subtitle: "Live in your own private paradise",
            cta: {
                text: "Learn More",
                link: "/about"
            }
        },
    ];

    // --- NEW: Data for the "Available Properties" section ---
    const projects = [
      { id: 1, image: sunlitImage, title: 'Sunlit Estates' },
      { id: 2, image: whiteOakImage, title: 'White Oak Homes' },
      { id: 3, image: graphiteImage, title: 'Graphite Homes' },
      { id: 4, image: landsImage, title: 'Premium Lands' },
    ];

    // --- "Featured Properties" section (properties array) has been REMOVED ---

    return (
        <div>
            {/* Pass the updated slides array */}
            <HeroSlider slides={homeSlides} />
            <Parallax speed={5}><MissionSection /></Parallax>

            {/* --- NEW "AVAILABLE PROPERTIES" SECTION --- */}
            <section className="bg-slate-900 py-16 sm:py-24">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Available Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="group text-center transform transition-all duration-300 ease-in-out hover:-translate-y-2"
                    >
                      {/* Added bg-slate-800 for card contrast */}
                      <div className="overflow-hidden rounded-lg shadow-lg bg-slate-800">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <h3 className="text-xl font-bold text-gray-200 mt-4 mb-4 group-hover:text-amber-500 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- NEW "View More" Button --- */}
                <div className="text-center mt-16">
                  <NavLink
                    to="/listings"
                    className="bg-amber-500 text-white font-bold py-3 px-8 rounded-lg text-lg
                               inline-block
                               hover:bg-amber-600 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View More
                  </NavLink>
                </div>

              </div>
            </section>
            {/* --- END OF NEW SECTION --- */}

            {/* --- "Featured Properties" Section REMOVED --- */}

            <ConsultingCta />
            <MapSection />
        </div>
    );
};

export default Home;