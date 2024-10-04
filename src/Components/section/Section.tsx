
import Mobiles from '../../assets/images/Mobile app store badge (1).png';
import Mobilee from '../../assets/images/Mobile app store badge (2).png';
import iPhone from '../../assets/images/Iphone22.png';

function Section() {
  return (
    <div>
      <section
       className="text-white bg-cover h-[120vh] relative flex flex-col lg:flex-row "
       style={{ backgroundColor: "#FFF3E4", clipPath: 'ellipse(100% 80% at 50% 0%)' }}
      >
        <div className="mx-auto max-w-screen-xl px-4  lg:py-32 flex flex-col lg:flex-row lg:items-start">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h1 className='text-[#3774AA] font-semibold text-4xl lg:text-[54px] leading-[64.8px]'>
              <span className='text-secondary mx-2'>(MS)</span> Multiple Sclerosis<br />
              Support App
            </h1>

            <p className='text-black mt-[20px] text-[20px] lg:text-[24px]'>
              Track your mood, movement, and<br /> water intake, book appointments,<br /> support mental health.
            </p>

            <div className='flex gap-2 mt-[24px] lg:mt-[32px]'>
              <img src={Mobiles} className='w-[120px] lg:w-[157px]' />
              <img src={Mobilee} className='w-[120px] lg:w-[157px]' />
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img src={iPhone} className="w-[300px] md:w-[500px] lg:w-[969px] max-w-full md:-translate-y-20 -translate-y-0  -translate-x-0 md:-translate-x-20" alt="iPhone App Preview" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
