import React, { useState } from 'react'


import { MenuIcon, X } from 'lucide-react'
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='border border-muted-foreground w-full md:h-20 h-16 rounded-2xl my-5 flex items-center justify-between px-5'>
        {/* logo */}
        <div className='text-2xl font-bold'>
            <p>Blog</p>
        </div>
        {/* mobile menu */}
        <div className='md:hidden'>
            {
                open ? (
                    <X onClick={()=>setOpen(!open)}/>
                ) : (
                    <MenuIcon onClick={()=>setOpen(!open)}/>
                )
            }
            {/* mobile list items */}
            <div className={`w-full h-screen flex items-center justify-center absolute top-16 bg-muted transition-all duration-300 ease-in-out ${open ? 'right-0' : '-right-full'}`}>
menu
            </div>
        </div>
        {/* desktop menu */}
        <div className='hidden md:flex items-center gap-5'>
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/">Most Populer</a>
            <a href="/">About</a>
            <button className='bg-primary text-primary-foreground px-5 py-2 rounded-2xl'>Login 👋</button>
        </div>
    </div>
  )
}

export default Navbar