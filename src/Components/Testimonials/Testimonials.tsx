
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import tests from "../../assets/images/testimonials.svg"
import Ellipse from "../../assets/images/Ellipse 17.png"
import Ellipse2 from "../../assets/images/Ellipse 17 (1).png"
import Ellipse3 from "../../assets/images/Ellipse 17 (2).png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    text: "A beautiful application that is easy to deal with for many patients with MS condition",
    name: "Ahmed Samy",
    role: "Patient",
    image: Ellipse
  },
  {
    id: 2,
    text: "A beautiful application that is easy to deal with for many patients with MS condition",
    name: "Sara Ahmed",
    role: "Doctor",
    image: Ellipse2
  },
  {
    id: 3,
    text: "A beautiful application that is easy to deal with for many patients with MS condition",
    name: "Salma Mohamed",
    role: "Patient",
    image: Ellipse3
  },
  {
    id: 3,
    text: "A beautiful application that is easy to deal with for many patients with MS condition",
    name: "Salma Mohamed",
    role: "Patient",
    image: Ellipse
  },
  {
    id: 3,
    text: "A beautiful application that is easy to deal with for many patients with MS condition",
    name: "Salma Mohamed",
    role: "Patient",
    image: Ellipse2
  },
  {
    id: 3,
    text: "A beautiful application that is easy to deal with for many patients with MS condition",
    name: "Salma Mohamed",
    role: "Patient",
    image: Ellipse3
  },
  {
    id: 3,
    text: "A beautiful application that is easy to deal with for many patients with MS condition",
    name: "Salma Mohamed",
    role: "Patient",
    image: Ellipse
  }
 
];

const Testimonials = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Testimonials</h2>
          <p className="mt-4 text-xl text-[#1D73BD] font-semibold">What Our Clients Are Saying</p>
        </div>
        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                  <div className="flex-grow my-5">
                    <img src={tests}  width={43.95} height={39.18} className='my-5'/>
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center">
                    <img className="w-[50px] h-[50px] rounded-full mr-4" src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;