import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const heroPaths = ["/", "/about", "/services", "/listings", "/contact"];
  const hasFullScreenHero = heroPaths.includes(location.pathname);

  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <main className={hasFullScreenHero ? 'relative' : 'pt-24'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;