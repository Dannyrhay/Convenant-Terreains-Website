import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from '../assets/Navlogo2.png';

// --- Icon Components ---
const MenuIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> </svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg> );

// --- NEW: Social Media Icons ---
const XIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.667 4.77-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.667-4.77 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947C21.727 2.69 19.305.273 14.947.072 13.667.014 13.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" />
  </svg>
);
const FacebookIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const heroPaths = ["/", "/about", "/services", "/listings", "/contact"];
    const hasFullScreenHero = heroPaths.includes(location.pathname);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        if (hasFullScreenHero) {
            window.addEventListener("scroll", handleScroll);
        } else {
            setIsScrolled(false);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasFullScreenHero]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/listings' },
        { name: 'Contact', path: '/contact' },
    ];

    const headerClasses = hasFullScreenHero
        ? `p-4 fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`
        : 'bg-white p-4 sticky top-0 z-50 shadow-md';

    const navTextColor = hasFullScreenHero && !isScrolled ? 'text-amber-500' : 'text-neutral-900';
    const underlineColor = hasFullScreenHero && !isScrolled ? 'bg-white' : 'bg-amber-500';

    const navLinks = (
        <>
            {navItems.map(item => (
                 <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setShowMenu(false)}
                    // Use NavLink's render prop to access isActive state
                    className="relative group py-2"
                >
                    {({ isActive }) => (
                        <>
                            <span className={`transition-colors duration-300 ${isActive ? 'font-bold' : ''}`}>
                                {item.name}
                            </span>
                            {/* This span is the animated underline */}
                            <span
                                className={`
                                    absolute bottom-0 left-0 block w-full h-0.5
                                    ${underlineColor}
                                    transform transition-transform duration-300 ease-in-out
                                    origin-left
                                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                `}
                            >
                            </span>
                        </>
                    )}
                </NavLink>
            ))}
        </>
    );

    // --- NEW: Social Links JSX (inherits color from parent) ---
    const socialLinks = (
        <>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="transition-opacity duration-300 hover:opacity-70">
                <XIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="transition-opacity duration-300 hover:opacity-70">
                <InstagramIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="transition-opacity duration-300 hover:opacity-70">
                <FacebookIcon />
            </a>
        </>
    );

    return (
        <header className={headerClasses}>
            <nav className="container mx-auto flex justify-between items-center">
                {/* Left Column: Logo */}
                <div className="flex-1">
                    <NavLink to="/" className={`text-2xl font-bold text-slate-900 ${navTextColor}`}>
                        <img src={logoImage} alt="StanDav Logo" className="h-10 w-auto" />
                    </NavLink>
                </div>

                {/* Center Column: Nav Links (Desktop) */}
                <div className={`hidden md:flex flex-none justify-center space-x-8 items-center ${navTextColor}`}>
                    {navLinks}
                </div>

                {/* Right Column: Socials (Desktop) + Hamburger (Mobile) */}
                <div className="flex-1 flex justify-end items-center">

                    {/* --- NEW: Social Icons (Desktop) --- */}
                    <div className={`hidden md:flex items-center space-x-6 ${navTextColor}`}>
                        {socialLinks}
                    </div>

                    {/* --- Mobile Hamburger Button --- */}
                    {/* Added ml-6 for spacing from social icons on md screens if needed, though they swap visibility */}
                    <div className="md:hidden ml-6">
                        <button onClick={toggleMenu} className={`text-2xl ${navTextColor}`}>
                            {showMenu ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu container */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${showMenu ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                {/* --- MODIFIED: Added social links to mobile menu --- */}
                <div className={`flex flex-col items-center space-y-4 rounded-lg p-4 text-center ${hasFullScreenHero && !isScrolled ? 'bg-amber-50 bg-opacity-30 text-amber-400' : 'bg-white text-neutral-800'}`}>
                    {navLinks}

                    {/* --- NEW: Social Icons (Mobile) --- */}
                    <hr className="w-full border-t border-gray-400/50 my-2" />
                    <div className="flex space-x-8 pt-2">
                        {socialLinks}
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Navbar;