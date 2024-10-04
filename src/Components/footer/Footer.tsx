import footerLogo from "../../assets/images/footerLogo.png"
import footerLogos from "../../assets/images/Group.svg"

function Footer() {
  return (
    <>
     <footer className="bg-[#FFF3E4]">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
  
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
       
         <img src={footerLogo} alt="footerLogo" width={192} height={87.3}/>
         <p className="font-semibold mt-5">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Viverra nunc ante velit vitae. Est<br/> tellus vitae, nullam lobortis enim.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
        <div>
          <p className=" text-black font-bold uppercase text-[24px]">Quick link</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-black transition hover:opacity-75"> Home </a>
            </li>

            <li>
              <a href="#" className="text-black transition hover:opacity-75"> About Us </a>
            </li>

            <li>
              <a href="#" className="text-black transition hover:opacity-75"> Admissions </a>
            </li>

            <li>
              <a href="#" className="text-black transition hover:opacity-75"> Academics </a>
            </li>

            <li>
              <a href="#" className="text-black transition hover:opacity-75"> News </a>
            </li>
          </ul>
        </div>

       

       
        <div className="">
          <p className="font-bold text-black uppercase text-[24px]"> news letter   </p>

         <p className="mt-10" >Subscribe our newsletter to get our latest
         update & news</p>
         


         <div className="input-container mt-5">
        <input type="email" className="email-input" placeholder="Your email address" />
        <button className="submit-button"><img src={footerLogos} width={24} /></button>
      </div>


        </div>
      </div>
    </div>

   
  </div>
  
</footer>
    </>
  )
}

export default Footer
