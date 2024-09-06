import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "@/assets/appplogo.png"

function NavBar() {
    const terms=[
        {
            term:"Home",
            path:'/'
        },
        {
            term:"About",
            path:'/about'
        },
        {
            term:"Services",
            path:'/services'
        },
        {
            term:"Contact",
            path:'/contact'
        },
    ]
  return (
    <nav className='w-full h-full flex justify-between px-3 md:px-6 lg:px-14 py-1 items-center font-itim'>
        <div className='flex  items-center'>
        <img src={logo} className='h-14'/>
       <h1 className='text-2xl  text-bggreen'>FarmLink</h1>

        </div>
      <div className='flex items-center gap-3 text-lg text-bggreen md:gap-6 lg:gap-8 font-semibold'>
        {
            terms.map((term, index) => (
                <NavLink 
                to={term.path}
                className={({ isActive }) => 
                  isActive ? 'text-primarytext' : 'hover:text-primarytext'
                }
              >
                {term.term}
              </NavLink>
            ))  
        }

      </div>
    </nav>
  );
}

export default NavBar;
