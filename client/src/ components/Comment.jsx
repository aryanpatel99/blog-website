import React from 'react'
import { Image } from '@imagekit/react';
const Comment = () => {
  return (
   <div className="p-4 bg-neutral-200 rounded-xl mb-8">
      <div className="flex items-center gap-4">
          <Image
            src="/ISAGI YOICHI.jpeg"
            className="w-10 h-10 rounded-full object-cover"
            w="40"
          />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">
          {new Date().toLocaleString()}
        </span>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
    </div>
  );
}

export default Comment