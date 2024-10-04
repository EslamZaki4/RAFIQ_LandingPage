
import welcomeImage from "../../assets/images/amico.png";
import Benefit1 from "../../assets/images/Benefit Card 1 (1).png";

function WelcomeMessage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-52 w-[100%] my-12 container  ">
   
        <img data-aos="fade-up" src={welcomeImage} className="w-[544.15px]" alt="welcomeImage" />
     
        
        <div data-aos="fade-up" className="mt-10">
          <h1 className="text-black font-bold  text-3xl">Why <span className="text-[#3774AA]">RAFIQ</span> is right for you?</h1>
          
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-10">
<img src={Benefit1} width={330} />
<img src={Benefit1} width={330} />
<img src={Benefit1} width={330} />
<img src={Benefit1} width={330} />
  </div>
         

         
        </div>
      
      </div>
    </>
  );
}

export default WelcomeMessage;
