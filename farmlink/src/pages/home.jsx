import NavBar from '@/components/custom/NavBar'
import React from 'react'
import bgimage from "@/assets/agriculturefield.jpg";
import logo from "@/assets/appplogo.png";
import vector from "@/assets/Vector.png"
import vector2 from "@/assets/Vector2.png"
import crop from "@/assets/crops2.jpg";
import floral from "@/assets/Floral.png";
import { LuPointer } from "react-icons/lu";
import { Link } from 'react-router-dom';
function Home() {

    
  return (
    <div className='h-dvh '>
        <div className='w-full h-16 fixed top-0 z-10 shadow-xl bg-white'>
            <NavBar />

        </div>
        <main className='w-full h-dvh flex justify-center items-center'>
            <img src={bgimage} className='object-cover w-full max-h-dvh h-full absolute top-0 left-0 right-0 bottom-0 '/>
            <div className='bg-white/35 h-[50%] lg:h-[80%] w-[80%] lg:w-[60%]  backdrop-blur-sm flex items-center justify-center flex-col rounded-xl'>
            <img src={logo} className='h-40 lg:h-48'/>
            <div className='relative top-[-15px] flex items-center flex-col gap-2'>
            <h1 className='lg:text-5xl text-3xl font-extrabold font-itim text-bggreen text-center'>Welcome to FarmLink Website</h1>
            <p className='lg:text-2xl text-lg  font-itim text-bggreen text-center'>An app where both farmer and consumer gets profit</p>
            </div>
            </div>
        </main>
       <section className='w-full bg-white h-44 '>
        <div className='w-full h-full flex items-center flex-col py-2 px-5 justify-center'>
         <p className='text-bggreen font-semibold md:text-2xl py-2 text-center text-lg '>
            "When farmers thrive, consumers flourish. Together, we cultivate a
            sustainable future where the harvest is shared, and everyone
            prospers."
          </p>
        </div>
       </section>
       <section className='bg-bggreen w-full h-dvh'>
        <div className='w-full h-full flex items-center justify-between overflow-hidden'>
            <div className='w-[48%] h-full p-4  relative flex items-center justify-center'>
            <img src={crop} className='object-cover h-[90%] w-[90%] rounded-3xl object-center absolute top-[5%] left-[5%]'/>
            <div className='w-[80%] h-[80%] bg-white/40 backdrop-blur-sm rounded-xl flex flex-col justify-center items-center'>
            <img src={floral} className='md:h-20 h-14'/>
            <h1 className='font-itim text-primarytext font-extrabold md:text-2xl text-lg'>Value</h1>
            <p className='text-center md:text-lg px-3 text-sm text-white'>
            "By directly connecting farmers and consumers, both benefit—farmers
             earn fair prices for their crops, and consumers gain access to fresh, local produce.
              This fosters a transparent, fair, and sustainable marketplace,
             supporting livelihoods and promoting healthier communities."</p>
            </div>
            </div>
            <div className='relative w-[48%] h-full py-20 text-lg font-itim'>
            <img src={vector} className=' absolute right-[10%] h-[80%] top-[10%]'/>
            <h1 className='text-primarytext text-lg md:text-xl font-extrabold font-itim md:mb-5 mb-3'>Why Our Platform Matters ?</h1>
            <div className='pt-2 md:pt-3'> <span className='text-yellow-400  text-md md:text-lg flex items-center'> <LuPointer className='pr-2 text-primarytext text-lg md:text-3xl'/> Middleman-Free Transactions :</span>
            <p className='text-white md:text-base pl-2 text-xs'>Farmers can sell directly to retailers and consumers, removing intermediaries and ensuring better prices for both sides.</p>
            </div>

            <div className='pt-2 md:pt-3'> <span className='text-yellow-400 text-md md:text-lg flex items-center'> <LuPointer className='pr-2 text-primarytext text-lg md:text-3xl'/> Local Purchasing :</span>
            <p className='text-white md:text-base pl-2 text-xs'>Retailers and consumers can buy produce directly from nearby farms, promoting local sourcing, reducing transportation costs, and fostering sustainability.</p>
            </div>

            <div className='pt-2 md:pt-3'> <span className='text-yellow-400 text-md md:text-lg flex items-center'> <LuPointer className='pr-2 text-primarytext text-lg md:text-3xl'/>Government Use :</span>
            <p className='text-white md:text-base pl-2 text-xs'>MSP recommendations are made based on actual market prices and regional trends, ensuring fair policies.</p>
            </div>

            <div className='pt-2 md:pt-3'> <span className='text-yellow-400 text-md md:text-lg flex items-center'> <LuPointer className='pr-2 text-primarytext text-lg md:text-3xl'/> Real-time Data :</span>
            <p className='text-white md:text-base pl-2 text-xs'>Track crop sales in different regions to understand market dynamics and make informed purchasing decisions.</p>
            </div>



            </div>
       
       
        </div>
       </section>
       <section className='bg-white w-full h-dvh'></section>
       <footer class="bg-bggreen text-white py-10 md:px-10 relative">
       <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
       <img src={vector} className=' absolute right-[50%] h-[80%] top-[10%]'/>
    <div class="mb-4 md:mb-0">
    <img src={floral} className='md:h-20 h-14'/>
      <h3 class="font-bold text-lg mb-2">Important Links</h3>
      <ul class="space-y-2">
        <li><Link to={"/"} class="text-white hover:text-yellow-400">About Us</Link></li>
        <li><Link to={"/"} class="text-white hover:text-yellow-400">Government Initiatives</Link></li>
        <li><Link to={"/"} class="text-white hover:text-yellow-400">Contact Us</Link></li>
        <li><Link to={"/"} class="text-white hover:text-yellow-400">Privacy Policy</Link></li>
      </ul>
    </div>
    
 
    <div>
      <h3 class="font-bold text-lg mb-2">Contact Us</h3>
      <ul class="space-y-2">
        <li>Email: <a href="mailto:info@farmlink.com" class="text-white hover:text-yellow-400">info@farmlink.com</a></li>
        <li>Phone: <a href="tel:+1234567890" class="text-white hover:text-yellow-400">+123 456 7890</a></li>
        <li class="flex space-x-4">
          <Link to={"/"} class="text-white hover:text-yellow-400">Facebook</Link>
       <Link to={"/"} class="text-white hover:text-yellow-400">Twitter</Link>
       <Link to={"/"} class="text-white hover:text-yellow-400">Instagram</Link>
     </li>
      </ul>
    </div>
  </div>
  

  <div class="text-center mt-8 border-t border-white pt-4">
    <p>&copy; 2024 FarmLink. All rights reserved.</p>
  </div>
</footer>

      
    </div>
  )
}

export default Home
