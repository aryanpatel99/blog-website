import React from 'react'
import {Image} from "@imagekit/react"
import { Link } from 'react-router-dom'

const PostListItem = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
        <div className='md:hidden lg:block xl:w-1/3'>
            <Image className='rounded-2xl object-cover w-full h-full' urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} loading="lazy" alt="Logo" src="/ISAGI YOICHI.jpeg" transformation={[{width: 735}]} lqip={{active: true, quality: 20}}/>
        </div>
        <div className='flex flex-col gap-4 xl:w-2/3'>
            <Link to="/test" className='font-medium hover:underline text-sm md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Link>
            <div className='flex items-center gap-2 text-xs text-neutral-500'>
                <span>Written by</span>
                <Link className='hover:underline'>John Doe</Link>
                <span>on</span>
                <Link className='hover:underline'>Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil exercitationem ipsa esse. Unde, non.</p>
            <Link to="/test" className='text-xs md:text-sm text-neutral-500 hover:underline'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem