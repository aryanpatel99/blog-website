import React, { useState } from 'react'
import PostList from '../ components/PostList'
import SideMenu from '../ components/SideMenu'

const PostListPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h1 className='mb-8 text-2xl'>Development Page</h1>
      <button onClick={()=> setOpen(!open)} className='md:hidden bg-neutral-900 text-white px-4 py-2 rounded-2xl mb-4 text-sm'>{open ? 'Close' : 'Filter or Search'}</button>
      <div className='flex flex-col-reverse md:flex-row gap-8'>
        <div className=''>
          <PostList/>
        </div>       
        <div className={`md:block ${open ? 'block' : 'hidden'}`}>
          <SideMenu/>
        </div>

      </div>
    </div>
  )
}

export default PostListPage