import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaArrowUp } from 'react-icons/fa';
import companyLogo from '../assets/Navlogo.png';
import { FaXTwitter } from 'react-icons/fa6';

const FooterLink = ({ to, children }) => (
    <Link to={to} className="relative inline-block text-gray-300 hover:text-brand-gold transition-colors duration-300 group">
        {children}
        <span className="absolute bottom-[-2px] left-0 w-full h-px bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
    </Link>
);

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div className="space-y-4">
               <Link to="/">
                <img src={companyLogo} alt="Covenntterrains Logo" className="h-16 w-auto" />
              </Link>
              <p className="text-sm"></p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center"><FaMapMarkerAlt className="w-4 h-4 mr-3 text-brand-gold" />Accra, Ghana</p>
                <p className="flex items-center"><FaEnvelope className="w-4 h-4 mr-3 text-brand-gold" />Covenntterrains@gmail.com</p>
                <p className="flex items-center"><FaPhone className="w-4 h-4 mr-3 text-brand-gold" /> (+233) 560477622</p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><FooterLink to="/about">About Us</FooterLink></li>
                <li><FooterLink to="/services">Services Details</FooterLink></li>
                <li><FooterLink to="/contact">Contact</FooterLink></li>
                <li><FooterLink to='/Listings'>Properties</FooterLink></li>
              </ul>
            </div>

            {/* Column 3: Services */}
             <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><FooterLink to="/Listings">Property on sale</FooterLink></li>
                <li><FooterLink to="/about">Team member</FooterLink></li>
                <li><FooterLink to="/contact">Offices for Buy</FooterLink></li>
                <li><FooterLink to="/terms">Terms of use</FooterLink></li>
                <li><FooterLink to="/services">Offices for Rent</FooterLink></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter to get the latest updates.</p>
              <form>
                <div className="flex">
                  <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                  <button type="submit" className="bg-brand-gold text-white px-4 py-2 rounded-r-md hover:opacity-90 transition-colors">Subscribe</button>
                </div>
              </form>
               <div className="flex items-center mt-4">
                  <input type="checkbox" id="terms" className="h-4 w-4 text-brand-gold focus:ring-brand-gold border-gray-300 rounded" />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">I agree to all terms and policies</label>
                </div>
              <div className="flex space-x-4 mt-6">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaXTwitter /></a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Convenant Terreains. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <FooterLink to="/terms">Terms of Use</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-brand-gold text-shadow-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all duration-300 z-50"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Footer;
