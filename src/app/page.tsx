'use client'
// import axios from "axios";
// import { useState } from "react";
// import { useRouter } from 'next/navigation'

// const Login = () => {
//   let [userName, setuserName] = useState("")
//   let [password, setPassword] = useState("")
//   const router = useRouter()

//   const login = async () => {
//     const user = {
//       username: userName,
//       password: password,
//     }
//     try {
//       let { data } = await axios.post("https://store-api.softclub.tj/Account/login", user)
//       localStorage.setItem("access_token", data.data)
//       router.push('/')
//     } catch (error) {
//       console.error(error);
//     }
//   }


//   return (
//     <div className="flex items-center justify-center min-h-screen px-4">
//       <div className="w-full max-w-[90%] sm:max-w-sm md:max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-lg my-10 sm:my-16 md:my-20">
//         <h1 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-center sm:text-left">
//           Log in to Exclusive
//         </h1>
//         <p className="text-gray-600 mb-4 text-center sm:text-left text-sm sm:text-base">
//           Enter your details below
//         </p>

//         <div className="space-y-3">
//           <input
//             onChange={(e) => setuserName(e.target.value)}
//             value={userName}
//             type="text"
//             placeholder="UserNmae"
//             className="block w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             type="password"
//             placeholder="Password"
//             className="block w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//           />
//           <button className="block w-full border py-2 rounded-lg hover:bg-gray-100 transition text-[#DB4444] text-sm sm:text-base">
//             Forget Password?
//           </button>
//           <button className="block w-full bg-[#DB4444] text-white py-2 rounded-lg hover:bg-[#DB5554] transition text-sm sm:text-base" onClick={login}>
//             Log In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import axios from 'axios';
// import React, { useState } from 'react';
// import Link from 'next/link';

// const SignUp = () => {
//   let [email, setEmail] = useState("")
//   let [password, setPassword] = useState("")
//   let [confirmPassword, setConfirmPassword] = useState("")
//   let [userName, setuserName] = useState("")
//   let [phoneNumber, setphoneNumber] = useState("")


//   const registration = async () => {

//     const user = {
//       userName: userName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//       phoneNumber: phoneNumber
//     }
//     try {
//       await axios.post("https://store-api.softclub.tj/Account/register", user)
//       window.location.href = "/login"
//     } catch (error) {
//       console.error(error);
//     }
//   }


//   return (
//     <div className="flex justify-center items-center min-h-screen p-4">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-2">Create an account</h1>
//         <p className="text-gray-600 text-center mb-4">Enter your details below</p>
//         <div className="space-y-3">
//           <input
//             onChange={(e) => setuserName(e.target.value)}
//             value={userName}
//             type="text"
//             placeholder="Name"
//             className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//           />
//           <input
//             onChange={(e) => setphoneNumber(e.target.value)}
//             value={phoneNumber}
//             type="text"
//             placeholder="Phone Number"
//             className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//           />
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             type="text"
//             placeholder="Email"
//             className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             type="password"
//             placeholder="Password"
//             className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//           />
//           <input
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             value={confirmPassword}
//             type="password"
//             placeholder="confirmPassword"
//             className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//           />

//           <button className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition" onClick={registration}>
//             Create Account
//           </button>
//           <button className="block w-full border py-3 rounded-lg hover:bg-gray-100 transition">
//             Sign up with Google
//           </button>
//         </div>
//         <p className="mt-4 text-center text-gray-600 text-sm sm:text-base">
//           Already have an account?
//           <Link href="/login" className="text-blue-600 hover:underline ml-1">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;







// import Image from "next/image"
// import img from "@/app/images/Side Image.png"
// import img1 from "@/app/images/Services (1).png"
// import img2 from "@/app/images/Services (2).png"
// import img3 from "@/app/images/Services (3).png"
// import img4 from "@/app/images/Services.png"
// import img5 from "@/app/images/Frame 874.png"
// import img6 from "@/app/images/Frame 875.png"
// import img7 from "@/app/images/Frame 876.png"
// import img8 from "@/app/images/Frame 877.png"
// import img9 from "@/app/images/Services (4).png"
// import img10 from "@/app/images/Services (5).png"
// import img11 from "@/app/images/Services (6).png"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const About = () => {
//     return (
//       <>
//         <div className="max-w-[1200px] mx-[auto]">
  
  
//           <div className="flex justify-around mt-[100px] mb-[150px] md:flex-row sm:flex-col  ">
//             <div className="md:w-[40%] sm:w-[100%]">
//               <p className="text-[50px] font-[600]">Our Story</p>
//               <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /><br /><br />
//                 Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
//             </div>
//             <Image src={img} alt="" />
//           </div>
  
  
//           <div className="flex justify-around p-[20px] mb-[150px] md:flex-row sm:flex-col sm:gap-[30px]">
//             <div className="border flex flex-col items-center justify-center gap-3 h-[200px] w-[300px] text-center mx-auto rounded hover:bg-[#DB4444] hover:text-[white]">
//               <Image src={img4} alt="" className="" />
//               <h1 className="text-[20px] font-[800]">10.5k </h1>
//               <p>Sallers active our site</p>
//             </div>
  
//             <div className="border flex flex-col items-center justify-center gap-3 h-[200px] w-[300px] text-center mx-auto hover:bg-[#DB4444] hover:text-[white] rounded">
//               <Image src={img2} alt="" className="" />
//               <h1 className="text-[20px] font-[800]">33k </h1>
//               <p>Mopnthly Produduct Sale</p>
//             </div>
//             <div className="border flex flex-col items-center justify-center gap-3 h-[200px] w-[300px] text-center mx-auto rounded hover:bg-[#DB4444] hover:text-[white]">
//               <Image src={img3} alt="" className="" />
//               <h1 className="text-[20px] font-[800]">45.5k </h1>
//               <p>Customer active in our site</p>
//             </div>
//             <div className="border flex flex-col items-center justify-center gap-3 h-[200px] w-[300px] text-center mx-auto rounded hover:bg-[#DB4444] hover:text-[white]">
//               <Image src={img4} alt="" className="" />
//               <h1 className="text-[20px] font-[800]">25k </h1>
//               <p>Anual gross sale in our site</p>
//             </div>
//           </div>
  
  
//           <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 1000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         // modules={[Autoplay, Pagination, Navigation]}
//          className="mySwiper rounded flex md:flex-row justify-around  sm:flex-col sm:gap-[20px]"
//       >
//         <SwiperSlide>
//         <div className="flex rounded md:flex-row justify-around  sm:flex-col sm:gap-[20px]">
//             <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className=' w-[30%]' src={img5} alt="" />
//               <p className='text-black'><b>Tom Cruise    </b> <br />
//                 Founder & Chairman</p>
//               <div className="flex gap-[10px]">
//                 <Image src={img8} alt="" />
//               </div>
//             </div>
//         <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className=' w-[30%]' src={img6} alt="" />
//               <p className='text-black'><b>Emma Watson    </b> <br />
//               Managing Director</p>
//               <div className="flex gap-[10px]">
//               <Image src={img8} alt="" />
//               </div>
//             </div>
//         <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className=' w-[30%]' src={img7} alt="" />
//               <p className='text-black'><b>Will Smith    </b> <br />
//               Product Designer</p>
//               <div className="flex gap-[10px]">
//               <Image src={img8} alt="" />
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="flex rounded md:flex-row justify-around  sm:flex-col sm:gap-[20px]">
//             <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className='w-[30%]' src={img5} alt="" />
//               <p className='text-black'><b>Tom Cruise    </b> <br />
//                 Founder & Chairman</p>
//               <div className="flex gap-[10px]">
//                 <Image src={img8} alt="" />
//               </div>
//             </div>
//         <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className=' w-[30%]' src={img6} alt="" />
//               <p className='text-black'><b>Emma Watson    </b> <br />
//               Managing Director</p>
//               <div className="flex gap-[10px]">
//               <Image src={img8} alt="" />
//               </div>
//             </div>
//         <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className=' w-[30%]' src={img7} alt="" />
//               <p className='text-black'><b>Will Smith    </b> <br />
//               Product Designer</p>
//               <div className="flex gap-[10px]">
//               <Image src={img8} alt="" />
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="flex rounded md:flex-row justify-around  sm:flex-col sm:gap-[20px]">
//             <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className=' w-[30%]' src={img5} alt="" />
//               <p className='text-black'><b>Tom Cruise    </b> <br />
//                 Founder & Chairman</p>
//               <div className="flex gap-[10px]">
//                 <Image src={img8} alt="" />
//               </div>
//             </div>
//         <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className=' w-[30%]' src={img6} alt="" />
//               <p className='text-black'><b>Emma Watson    </b> <br />
//               Managing Director</p>
//               <div className="flex gap-[10px]">
//               <Image src={img8} alt="" />
//               </div>
//             </div>
//         <div className="rounded h-[400px] w-[400px] flex flex-col gap-3">
//               <Image className=' w-[30%]' src={img7} alt="" />
//               <p className='text-black'><b>Will Smith    </b> <br />
//               Product Designer</p>
//               <div className="flex gap-[10px]">
//               <Image src={img8} alt="" />
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

//           <div>
//             <div className="flex justify-around mt-[150px] p-[40px] md:flex-row sm:flex-col sm:gap-[20px]">
//               <div className="text-center flex flex-col gap-4">
//                 <Image src={img9} alt="" className='m-auto' />
//                 <p> <b className='text-[20px]'>FREE AND FAST DELIVERY</b><br />
//                   Free delivery for all orders over $140</p>
//               </div>
//               <div className="text-center flex flex-col gap-4">
//                 <Image src={img10} alt="" className='m-auto' />
//                 <p> <b className='text-[20px]'>24/7 CUSTOMER SERVICE</b><br />
//                 Friendly 24/7 customer support</p>
//               </div>
//               <div className="text-center flex flex-col gap-4">
//                 <Image src={img11} alt="" className='m-auto' />
//                 <p> <b className='text-[20px]'>MONEY BACK GUARANTEE</b><br />
//                 We reurn money within 30 days</p>
//               </div>
//             </div>
//           </div>
  
  
//         </div>
  
//       </>
//     )
//   }
  
//   export default About
  
  






// import { Button } from "@mui/material";
// import iconIphone from "@/app/images/icons-phone.png"
// import iconEmail from "@/app/images/icons-mail.png"
// import Image from "next/image";

// const Contact = () => {
//   return (
//     <div className="m-auto max-w-[1200px] py-[200px]">
//       <p className="text-gray-600 mb-16">Home / Contact</p>

//       <div className="flex flex-wrap md:flex-nowrap gap-6">
//         <div className="shadow-md w-full md:w-1/2 flex flex-col gap-5 p-6 rounded-lg">
//           <div className="flex flex-col gap-4 p-6 border-b">
//             <div className="flex gap-4 items-center">
//               <Image src={iconIphone} alt="Phone" />
//               <h1 className="text-lg font-semibold">Call To Us</h1>
//             </div>
//             <p>We are available 24/7, 7 days a week.<br />Phone: +8801611112222</p>
//           </div>

//           <div className="flex flex-col gap-4 p-6 border-b">
//             <div className="flex gap-4 items-center">
//               <Image src={iconEmail} alt="Email" />
//               <h1 className="text-lg font-semibold">Write To Us</h1>
//             </div>
//             <p>Fill out our contact form, and we’ll get back to you shortly.</p>
//             <p>Emails: customer@exclusive.com</p>
//             <p>Emails: support@exclusive.com</p>
//           </div>
//         </div>

//         <div className="shadow-md w-full md:w-1/2 p-6 flex flex-col gap-4 rounded-lg">
//           <div className="flex flex-wrap gap-4">
//             <input type="text" placeholder="Name" className="border p-3 rounded w-full" />
//             <input type="text" placeholder="Email" className="border p-3 rounded w-full" />
//             <input type="text" placeholder="Phone" className="border p-3 rounded w-full" />
//           </div>
//           <textarea placeholder="Your Message" className="border p-3 rounded w-full h-32"></textarea>
//           <Button variant="contained" className="bg-[#DB4444] w-full md:w-auto">
//             Send Message
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;





// import { Button } from '@mui/material'
// import React from 'react'
// import jostyk from "../../assets/images/jost.png";

// const Wishlist = () => {
//     return (
//         <>
//             <div className='mt-[100px] flex justify-between mb-[100px]'>
//                 <h1>Wishlist(4)</h1>
//                 <Button variant='outlined'>Move All To Bag</Button>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
//                 <Flashcard price="99.99" name="HAVIT HV-G92 Gamepad" img={jostyk} />
//                 <Flashcard price="99.99" name="AK-900 Wired Keyboard" img={jostyk} />
//                 <Flashcard price="99.99" name="IPS LCD Gaming Monitor" img={jostyk} />
//                 <Flashcard price="99.99" name="S-Series Comfort Chair" img={jostyk} />
//             </div>
//             <div className='mt-[100px] flex justify-between mb-[100px]'>
//                 <h1>Just For You</h1>
//                 <Button variant='outlined'>See All</Button>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
//                 <Flashcard price="99.99" name="HAVIT HV-G92 Gamepad" img={jostyk} />
//                 <Flashcard price="99.99" name="AK-900 Wired Keyboard" img={jostyk} />
//                 <Flashcard price="99.99" name="IPS LCD Gaming Monitor" img={jostyk} />
//                 <Flashcard price="99.99" name="S-Series Comfort Chair" img={jostyk} />
//             </div>
//         </>
//     )
// }

// export default Wishlist








// import React from 'react'
// import Button from '@mui/material/Button';

// const NotFound = () => {
//   return (
//     <div className='py-[200px] flex flex-col items-center justify-center gap-8'>
//         <h1 className='font-bold text-8xl text-center'>404 Not Found</h1>
//         <p className='text-center'>Your visited page not found. You may go home page.</p>
//         <Button sx={{backgroundColor: "red", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "30px", paddingRight: "30px", textAlign: "center"}} variant="contained" disableElevation>
//       Back to home page
//     </Button>
//     </div>
//   )
// }

// export default NotFound











