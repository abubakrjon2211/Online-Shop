'use client'
import Image from "next/image"
import img from "@/app/images/Side Image.png"
import img1 from "@/app/images/Services (1).png"
import img2 from "@/app/images/Services (2).png"
import img3 from "@/app/images/Services (3).png"
import img4 from "@/app/images/Services.png"
import img5 from "@/app/images/Frame 874.png"
import img6 from "@/app/images/Frame 875.png"
import img7 from "@/app/images/Frame 876.png"
import img8 from "@/app/images/Frame 877.png"
import img9 from "@/app/images/Services (4).png"
import img10 from "@/app/images/Services (5).png"
import img11 from "@/app/images/Services (6).png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const About = () => {
    return (
      <>
        <div className="max-w-[1200px] mx-[auto]">
  
  
          <div className="flex justify-around mt-[100px] mb-[150px] md:flex-row sm:flex-col  ">
            <div className="md:w-[40%] sm:w-[100%]">
              <p className="text-[50px] font-[600]">Our Story</p>
              <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /><br /><br />
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <Image src={img} alt="" />
          </div>
  
  
          <div className="flex justify-around p-[20px] mb-[150px] md:flex-row sm:flex-col sm:gap-[30px]">
            <div className="border flex flex-col items-center justify-center gap-3 h-[200px] w-[300px] text-center mx-auto rounded hover:bg-[#DB4444] hover:text-[white]">
              <Image src={img4} alt="" className="" />
              <h1 className="text-[20px] font-[800]">10.5k </h1>
              <p>Sallers active our site</p>
            </div>
  
            <div className="border flex flex-col items-center justify-center gap-3 h-[200px] w-[300px] text-center mx-auto hover:bg-[#DB4444] hover:text-[white] rounded">
              <Image src={img1} alt="" className="" />
              <h1 className="text-[20px] font-[800]">33k </h1>
              <p>Mopnthly Produduct Sale</p>
            </div>
            <div className="border flex flex-col items-center justify-center gap-3 h-[200px] w-[300px] text-center mx-auto rounded hover:bg-[#DB4444] hover:text-[white]">
              <Image src={img2} alt="" className="" />
              <h1 className="text-[20px] font-[800]">45.5k </h1>
              <p>Customer active in our site</p>
            </div>
            <div className="border flex flex-col items-center justify-center gap-3 h-[200px] w-[300px] text-center mx-auto rounded hover:bg-[#DB4444] hover:text-[white]">
              <Image src={img3} alt="" className="" />
              <h1 className="text-[20px] font-[800]">25k </h1>
              <p>Anual gross sale in our site</p>
            </div>
          </div>
  
  
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper rounded flex md:flex-row justify-around  sm:flex-col sm:gap-[20px]"
      >
        <SwiperSlide>
        <div className="flex rounded md:flex-row justify-around  sm:flex-col sm:gap-[20px]">
            <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className=' w-[30%]' src={img5} alt="" />
              <p className='text-black'><b>Tom Cruise    </b> <br />
                Founder & Chairman</p>
              <div className="flex gap-[10px]">
                <Image src={img8} alt="" />
              </div>
            </div>
        <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className=' w-[30%]' src={img6} alt="" />
              <p className='text-black'><b>Emma Watson    </b> <br />
              Managing Director</p>
              <div className="flex gap-[10px]">
              <Image src={img8} alt="" />
              </div>
            </div>
        <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className=' w-[30%]' src={img7} alt="" />
              <p className='text-black'><b>Will Smith    </b> <br />
              Product Designer</p>
              <div className="flex gap-[10px]">
              <Image src={img8} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex rounded md:flex-row justify-around  sm:flex-col sm:gap-[20px]">
            <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className='w-[30%]' src={img5} alt="" />
              <p className='text-black'><b>Tom Cruise    </b> <br />
                Founder & Chairman</p>
              <div className="flex gap-[10px]">
                <Image src={img8} alt="" />
              </div>
            </div>
        <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className=' w-[30%]' src={img6} alt="" />
              <p className='text-black'><b>Emma Watson    </b> <br />
              Managing Director</p>
              <div className="flex gap-[10px]">
              <Image src={img8} alt="" />
              </div>
            </div>
        <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className=' w-[30%]' src={img7} alt="" />
              <p className='text-black'><b>Will Smith    </b> <br />
              Product Designer</p>
              <div className="flex gap-[10px]">
              <Image src={img8} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex rounded md:flex-row justify-around  sm:flex-col sm:gap-[20px]">
            <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className=' w-[30%]' src={img5} alt="" />
              <p className='text-black'><b>Tom Cruise    </b> <br />
                Founder & Chairman</p>
              <div className="flex gap-[10px]">
                <Image src={img8} alt="" />
              </div>
            </div>
        <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className=' w-[30%]' src={img6} alt="" />
              <p className='text-black'><b>Emma Watson    </b> <br />
              Managing Director</p>
              <div className="flex gap-[10px]">
              <Image src={img8} alt="" />
              </div>
            </div>
        <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
              <Image className=' w-[30%]' src={img7} alt="" />
              <p className='text-black'><b>Will Smith    </b> <br />
              Product Designer</p>
              <div className="flex gap-[10px]">
              <Image src={img8} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

          <div>
            <div className="flex justify-around mt-[150px] p-[40px] md:flex-row sm:flex-col sm:gap-[20px]">
              <div className="text-center flex flex-col gap-4">
                <Image src={img9} alt="" className='m-auto' />
                <p> <b className='text-[20px]'>FREE AND FAST DELIVERY</b><br />
                  Free delivery for all orders over $140</p>
              </div>
              <div className="text-center flex flex-col gap-4">
                <Image src={img10} alt="" className='m-auto' />
                <p> <b className='text-[20px]'>24/7 CUSTOMER SERVICE</b><br />
                Friendly 24/7 customer support</p>
              </div>
              <div className="text-center flex flex-col gap-4">
                <Image src={img11} alt="" className='m-auto' />
                <p> <b className='text-[20px]'>MONEY BACK GUARANTEE</b><br />
                We reurn money within 30 days</p>
              </div>
            </div>
          </div>
  
  
        </div>
  
      </>
    )
  }
  
  export default About
  
  