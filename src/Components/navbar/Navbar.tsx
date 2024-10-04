import { useState } from 'react';
import Logo from '../../../src/assets/images/logo.svg';

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="top-0 left-0 w-full bg-[#FFF3E4] pt-5" dir="ltr">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="  w-auto lg:w-[192px] md:h-16 h-10 lg:h-auto" />
          </div>
          
          <div className="flex items-center gap-10">
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li><a className="text-secondary font-semibold hover:text-secondary hover:scale-110 transition-all duration-300" href="#">Home</a></li>
                  <li><a className="text-black font-semibold hover:text-secondary hover:scale-110 transition-all duration-300" href="#">About Us</a></li>
                  <li><a className="text-black font-semibold hover:text-secondary hover:scale-110 transition-all duration-300" href="#">Services</a></li>
                  <li><a className="text-black font-semibold hover:text-secondary hover:scale-110 transition-all duration-300" href="#">Contact Us</a></li>
                </ul>
              </nav>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <button className="bg-secondary w-[120px] h-[44px] rounded-lg cursor-pointer transition-all duration-300 text-white text-sm hover:bg-secondary-dark">
                Sign Up
              </button>
              <button className="border-secondary border w-[120px] h-[44px] cursor-pointer transition-all duration-300 rounded-lg text-secondary text-sm hover:bg-secondary hover:text-white">
                Login
              </button>
            </div>

            <div className="block md:hidden">
              <button onClick={toggleDrawer} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleDrawer}>
          <div className="absolute top-0 right-0 w-64 bg-white h-full shadow-lg flex flex-col p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleDrawer} className="self-end p-2 text-black transition hover:text-secondary hover:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a className="text-secondary font-semibold hover:text-secondary transition-all duration-300" href="#">Home</a></li>
                <li><a className="text-black font-semibold hover:text-secondary transition-all duration-300" href="#">About Us</a></li>
                <li><a className="text-black font-semibold hover:text-secondary transition-all duration-300" href="#">Services</a></li>
                <li><a className="text-black font-semibold hover:text-secondary transition-all duration-300" href="#">Contact Us</a></li>
             
             
                <button className="bg-secondary py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 text-white text-sm hover:bg-secondary-dark">
                Sign Up
              </button>
              <button className="border-secondary border py-2 px-4 cursor-pointer transition-all duration-300 rounded-lg text-secondary text-sm hover:bg-secondary hover:text-white">
                Login
              </button> </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
