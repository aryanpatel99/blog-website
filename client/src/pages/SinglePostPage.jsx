import { Image } from '@imagekit/react'
import React from 'react'
import { Link } from 'react-router-dom'
import PostMenuActions from '../ components/PostMenuActions'
import Search from '../ components/Search'
import Comments from '../ components/Comments'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit.</h1>
          <div className='flex items-center gap-2 text-xs text-neutral-400 font-medium'>
            <span>Written by</span>
            <Link className='hover:underline hover:text-neutral-600'>John Doe</Link>
            <span>on</span>
            <Link className='hover:underline hover:text-neutral-600'>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-neutral-600 text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sapiente temporibus modi amet nobis cum minima recusandae omnis. Beatae perspiciatis dicta itaque voluptates sint libero facere? Velit deleniti architecto quisquam.</p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} loading="lazy" alt="Logo" src="/ISAGI YOICHI.jpeg" width={600} className='rounded-2xl object-cover' />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text */}
        <div className='lg:text-lg text-neutral-700 space-y-3 text-justify'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, repudiandae? Laborum labore architecto sint natus placeat exercitationem consequuntur voluptatum! Quas, quasi sequi quidem autem delectus aspernatur, odio laborum est adipisci magni, cumque ullam sapiente laboriosam eveniet consequatur omnis unde perferendis non totam? Perferendis dicta delectus vero nesciunt corporis illum, corrupti ratione ipsam voluptatem! Totam, nesciunt eaque fugiat dolorem temporibus cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate assumenda architecto nisi eligendi dolorem ut? Eos tenetur perspiciatis cumque officia ipsam. Omnis dolorum unde obcaecati cumque sequi quos qui quas quod quaerat, doloremque, possimus debitis maiores, est aliquid repellat consequuntur ab porro illo veritatis temporibus magnam excepturi. Quaerat, libero.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione velit a. Quas ipsam laborum veniam totam, deserunt mollitia tempora similique impedit. Voluptas nam sed molestias suscipit rem animi unde quis. Delectus quis non sit eius assumenda, vero error expedita itaque aliquam incidunt recusandae, commodi fuga quae optio sunt aliquid quas, neque nemo fugit dolorum ipsam obcaecati nam fugiat! Incidunt iure asperiores maiores temporibus blanditiis voluptatum eligendi natus aspernatur. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus vero et dolorem? Saepe eos quae perspiciatis atque aliquid, ex sapiente consequatur. Officia laborum id quod illum architecto iure? Optio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione velit a. Quas ipsam laborum veniam totam, deserunt mollitia tempora similique impedit. Voluptas nam sed molestias suscipit rem animi unde quis. Delectus quis non sit eius assumenda, vero error expedita itaque aliquam incidunt recusandae, commodi fuga quae optio sunt aliquid quas, neque nemo fugit dolorum ipsam obcaecati nam fugiat! Incidunt iure asperiores maiores temporibus blanditiis voluptatum eligendi natus aspernatur. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus vero et dolorem? Saepe eos quae perspiciatis atque aliquid, ex sapiente consequatur. Officia laborum id quod illum architecto iure? Optio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione velit a. Quas ipsam laborum veniam totam, deserunt mollitia tempora similique impedit. Voluptas nam sed molestias suscipit rem animi unde quis. Delectus quis non sit eius assumenda, vero error expedita itaque aliquam incidunt recusandae, commodi fuga quae optio sunt aliquid quas, neque nemo fugit dolorum ipsam obcaecati nam fugiat! Incidunt iure asperiores maiores temporibus blanditiis voluptatum eligendi natus aspernatur. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus vero et dolorem? Saepe eos quae perspiciatis atque aliquid, ex sapiente consequatur. Officia laborum id quod illum architecto iure? Optio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione velit a. Quas ipsam laborum veniam totam, deserunt mollitia tempora similique impedit. Voluptas nam sed molestias suscipit rem animi unde quis. Delectus quis non sit eius assumenda, vero error expedita itaque aliquam incidunt recusandae, commodi fuga quae optio sunt aliquid quas, neque nemo fugit dolorum ipsam obcaecati nam fugiat! Incidunt iure asperiores maiores temporibus blanditiis voluptatum eligendi natus aspernatur. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus vero et dolorem? Saepe eos quae perspiciatis atque aliquid, ex sapiente consequatur. Officia laborum id quod illum architecto iure? Optio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione velit a. Quas ipsam laborum veniam totam, deserunt mollitia tempora similique impedit. Voluptas nam sed molestias suscipit rem animi unde quis. Delectus quis non sit eius assumenda, vero error expedita itaque aliquam incidunt recusandae, commodi fuga quae optio sunt aliquid quas, neque nemo fugit dolorum ipsam obcaecati nam fugiat! Incidunt iure asperiores maiores temporibus blanditiis voluptatum eligendi natus aspernatur. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus vero et dolorem? Saepe eos quae perspiciatis atque aliquid, ex sapiente consequatur. Officia laborum id quod illum architecto iure? Optio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione velit a. Quas ipsam laborum veniam totam, deserunt mollitia tempora similique impedit. Voluptas nam sed molestias suscipit rem animi unde quis. Delectus quis non sit eius assumenda, vero error expedita itaque aliquam incidunt recusandae, commodi fuga quae optio sunt aliquid quas, neque nemo fugit dolorum ipsam obcaecati nam fugiat! Incidunt iure asperiores maiores temporibus blanditiis voluptatum eligendi natus aspernatur. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus vero et dolorem? Saepe eos quae perspiciatis atque aliquid, ex sapiente consequatur. Officia laborum id quod illum architecto iure? Optio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione velit a. Quas ipsam laborum veniam totam, deserunt mollitia tempora similique impedit. Voluptas nam sed molestias suscipit rem animi unde quis. Delectus quis non sit eius assumenda, vero error expedita itaque aliquam incidunt recusandae, commodi fuga quae optio sunt aliquid quas, neque nemo fugit dolorum ipsam obcaecati nam fugiat! Incidunt iure asperiores maiores temporibus blanditiis voluptatum eligendi natus aspernatur. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus vero et dolorem? Saepe eos quae perspiciatis atque aliquid, ex sapiente consequatur. Officia laborum id quod illum architecto iure? Optio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione velit a. Quas ipsam laborum veniam totam, deserunt mollitia tempora similique impedit. Voluptas nam sed molestias suscipit rem animi unde quis. Delectus quis non sit eius assumenda, vero error expedita itaque aliquam incidunt recusandae, commodi fuga quae optio sunt aliquid quas, neque nemo fugit dolorum ipsam obcaecati nam fugiat! Incidunt iure asperiores maiores temporibus blanditiis voluptatum eligendi natus aspernatur. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus vero et dolorem? Saepe eos quae perspiciatis atque aliquid, ex sapiente consequatur. Officia laborum id quod illum architecto iure? Optio.</p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                src="/ISAGI YOICHI.jpeg"
                className='w-12 h-12 rounded-full object-cover'
                w="48"
                h="48"
                transformation={[{ width: 48, height: 48 }]}
              />
              <Link className="text-neutral-600 font-medium">John Doe</Link>
            </div>
            <p className="text-xs text-neutral-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image
                urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                src="/ISAGI YOICHI.jpeg"
                className='w-8 h-8 rounded-full object-cover'
                w="48"
                h="48"
                transformation={[{ width: 48, height: 48 }]}
              />
              </Link>
              <Link>
                <Image
                urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                src="/ISAGI YOICHI.jpeg"
                className='w-8 h-8 rounded-full object-cover'
                w="48"
                h="48"
                transformation={[{ width: 48, height: 48 }]}
              />
              </Link>
            </div>
          </div>
          <PostMenuActions/>
          <h1 className='mt-4 mb-2 text-sm font-medium'>Categories</h1>
          <div className="flex flex-col gap-2 mt-2 text-xs">
            <Link to={"/"} className='hover:underline hover:text-neutral-600'>All</Link>
            <Link to={"/"} className='hover:underline hover:text-neutral-600'>Web Design</Link>
            <Link to={"/"} className='hover:underline hover:text-neutral-600'>Web Development</Link>
            <Link to={"/"} className='hover:underline hover:text-neutral-600'>UI/UX</Link>
            <Link to={"/"} className='hover:underline hover:text-neutral-600'>Business</Link>
          </div>
          <h1 className='mt-4 mb-2 text-sm font-medium'>Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>

    
  )
}

export default SinglePostPage