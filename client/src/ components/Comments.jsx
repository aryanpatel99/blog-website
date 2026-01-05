import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
        <h1 className='text-xl font-semibold text-neutral-600 underline'>Comments</h1>
        <div className='flex items-center justify-between gap-2 w-full'>
            <textarea placeholder='Write a comment...' className='w-full px-4 py-2 rounded-xl bg-neutral-200'/>
            <button className='bg-foreground text-background px-2 py-1 rounded-xl'>Send</button>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </div>
  )
}

export default Comments