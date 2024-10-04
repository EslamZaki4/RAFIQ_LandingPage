import aboutUsImage1 from "../../assets/images/Frame 1984077236 (1).png"
import card1 from "../../assets/images/Card1.png"
import card2 from "../../assets/images/Card2.png"
import card3 from "../../assets/images/Card3.png"
import card4 from "../../assets/images/Card4.png"

function AboutUs() {
  return (
    <>
      <div className="bg-white text-white pt-10 shadow-sm mx-auto">
        {/* Section Heading */}
        <h1 className="text-black text-center font-bold text-2xl sm:text-3xl">
          How <span className="text-[#3774AA]">RAFIQ</span> Supports You
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 container mx-auto w-full mt-10 px-4 md:px-10 lg:px-20">
          
          {/* Left Image Section */}
          <div className="lg:mt-10">
            <img src={aboutUsImage1} alt="welcomeImage" className="w-full h-auto object-cover" />
          </div>
          
          {/* Right Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-10">
            <img src={card1} alt="card1" className="w-full h-auto object-cover" />
            <img src={card2} alt="card2" className="w-full h-auto object-cover" />
            <img src={card3} alt="card3" className="w-full h-auto object-cover" />
            <img src={card4} alt="card4" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-8">
          <button className='bg-secondary shadow-md w-[70%] sm:w-[217px] h-[52px] rounded-lg cursor-pointer transition-all duration-300 text-white text-sm flex justify-center items-center'>
            Download Now
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
