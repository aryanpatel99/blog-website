import { Image } from '@imagekit/react'
import React from 'react'
import { Link } from 'react-router-dom'
const FeaturedPost = () => {
    return (
        <div className='mt-8 flex flex-col lg:flex-row gap-8'>
            {/* first post */}
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                {/* iamge */}
                <Image className='rounded-3xl object-cover' urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} loading="lazy" alt="Logo" src="/ISAGI YOICHI.jpeg" transformation={[{width: 895}]} lqip={{active: true, quality: 20}} />
                {/* details */}
                <div className='flex items-center gap-4'>
                    <h1 className='font-semibold lg:text-lg'>01.</h1>
                    <Link className='text-neutral-400 text-md hover:underline hover:text-neutral-600'>Web Development</Link>
                    <span className='text-neutral-400 text-sm'>2 days ago</span>
                </div>
                {/* title */}
                <Link to={'/test'} className='font-semibold lg:text-lg hover:underline '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
            </div>
            {/* other posts */}
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                {/* second  */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <Image src='/ISAGI YOICHI.jpeg' className='rounded-3xl object-cover w-1/2 lg:w-1/3 aspect-video' urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} loading="lazy" alt="Logo" transformation={[{width: 298}]} />
                    <div className='w-2/3'>
                        <div className='flex items-center text-sm gap-4 lg:text-base mb-2'>
                            <h1 className='font-semibold md:text-lg'>02.</h1>
                            <Link className='text-neutral-400 text-sm hover:underline hover:text-neutral-600'>Web Design</Link>
                            <span className='text-neutral-400 text-sm'>2 days ago</span>
                        </div>
                        <Link to={'/test'} className='text-base sm:text-lg hover:underline'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>
                {/* third */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <Image src='/ISAGI YOICHI.jpeg' className='rounded-3xl object-cover w-1/2 lg:w-1/3 aspect-video' urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} loading="lazy" alt="Logo" transformation={[{width: 298}]} />
                    <div className='w-2/3'>
                        <div className='flex items-center text-sm gap-4 lg:text-base mb-2'>
                            <h1 className='font-semibold md:text-lg'>03.</h1>
                            <Link className='text-neutral-400 text-sm hover:underline hover:text-neutral-600'>Web Design</Link>
                            <span className='text-neutral-400 text-sm'>2 days ago</span>
                        </div>
                        <Link to={'/test'} className='text-base sm:text-lg hover:underline'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>
                {/* fourth */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <Image src='/ISAGI YOICHI.jpeg' className='rounded-3xl object-cover w-1/2 lg:w-1/3 aspect-video' urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} loading="lazy" alt="Logo" transformation={[{width: 298}]} />
                    <div className='w-2/3'>
                        <div className='flex items-center text-sm gap-4 lg:text-base mb-2'>
                            <h1 className='font-semibold md:text-lg'>04.</h1>
                            <Link className='text-neutral-400 text-sm hover:underline hover:text-neutral-600'>Web Design</Link>
                            <span className='text-neutral-400 text-sm'>2 days ago</span>
                        </div>
                        <Link to={'/test'} className='text-base sm:text-lg hover:underline'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FeaturedPost