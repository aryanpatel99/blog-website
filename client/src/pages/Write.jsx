import React, { useEffect, useRef } from 'react'
import { useUser } from '@clerk/clerk-react'
import 'react-quill-new/dist/quill.snow.css'
import ReactQuill from 'react-quill-new';
const Write = () => {
  const { isSignedIn, user, isLoaded } = useUser()


  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (isLoaded && !isSignedIn) {
    return <div>Unauthorized! Please sign in to write a blog.</div>
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-4'>
      <h1 className='text-xl font-bold'>Create Post</h1>
      <form action="" className='flex flex-col gap-4 flex-1 mb-6 '>
        <button className='w-max p-2 bg-neutral-200 rounded-2xl text-sm shadow-md'>Add a cover image</button>
        <input type="text" placeholder='My awesome story' className='text-4xl font-semibold outline-none bg-transparent' />
        <div className='flex items-center gap-2 text-sm'>
          <label htmlFor="">Choose a category: </label>
          <select name="cat" id="" className='bg-neutral-200 p-2 rounded-xl shadow-md'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engine Optimization</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" placeholder='Write your story ' className='bg-neutral-200 outline-none p-4 rounded-xl shadow-md' />
        <ReactQuill theme="snow" className='flex-1 rounded-xl bg-white shadow-lg' />
        <button className='bg-foreground text-background px-4 py-2 rounded-xl font-medium mt-2 w-36'>Post</button>
      </form>
    </div>
  )
}

export default Write