import Group123 from "../../assets/images/Group123.png";

function Ready() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 container mx-auto px-4 md:px-10 lg:px-20 py-10 ">
      {/* Left Text Section */}
      <div className="flex flex-col gap-5 justify-center">
        {/* Heading */}
        <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-snug">
          Ready to take control of your <br /> journey? Let’s explore together!
        </h2>

        {/* Paragraph */}
        <p className="text-[#828282] text-[14px] sm:text-[16px]">
          A space for people with MS to connect, share experiences, ask <br />
          questions, and support each other on their journey.
        </p>

        {/* Button */}
        <button className="bg-secondary  mt-8 shadow-md w-[70%] sm:w-[217px] h-[52px] rounded-lg cursor-pointer transition-all duration-300 text-white text-sm flex justify-center items-center mx-auto lg:mx-0">
          Join our community
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src={Group123}
          alt="Journey Image"
          className="w-full max-w-[576px] h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Ready;
