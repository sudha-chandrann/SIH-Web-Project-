import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdSearch } from "react-icons/md";
function Categories() {
    const [data,setdata]=useState();
    const [search,setsearch]=useState()
    useEffect(()=>{
        getcstegorydata() 
    },[search])
    const getcstegorydata=async()=>{
      try{
        const response=await axios.post('/api/v1/category/items',{
            search
        });
        console.log(response.data.data);
        setdata(response.data.data);
  
      }
      catch(error){
        console.log("the error is ",error)
  
      }    
    }
  return (
    <div className='w-full h-dvh bg-bggreen pt-20 '>
     <div className='w-full lg:w-[50%] mx-auto h-12 rounded-full bg-white flex justify-between px-5 py-1 items-center'>
       <input className=' w-[60%]  rounded-full px-1 focus:outline-none' placeholder='Search................' value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
        <MdSearch className='text-2xl'onClick={()=>{getcstegorydata()}}/>
     </div>
     {
        data && search &&(
            <div className='w-full  overflow-hidden lg:w-[50%] mx-auto  rounded-xl mt-2 bg-white flex flex-col gap-1  py-1 items-center relative z-4'>
                {data?.map((item, index) => (
                    <div key={item._id} className='w-full px-4 py-1 bg-white/60 text-black hover:bg-black/10 cursor-pointer'>
                        {item.title}
                    </div>
                ))}
            </div>
        )
     }
    
    </div>
  )
}

export default Categories
