import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {
    //consume
    const {post, loading} = useContext(AppContext);

  return (
    
    <div className='w-11/12 sm:max-w-[650px] max-w-screen-lg py-[60px] flex flex-col gap-y-7'>

      {
        loading ? (<Spinner />) : (
            post.length === 0 ? (
                <div>
                    <p>No Post Found</p>
                </div>
            ) : (post.map((post) =>  (
              <div className='mt-3 mb-3' key={post.id}>
                <p className= 'font-extrabold text-md'>{post.title}</p>
                <p className='text-xs mt-1'>
                  By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                </p>
                <p className='text-xs mt-[3px]'>Posted on <span>{post.date}</span></p>
                <p className='text-sm text-justify mt-[10px]'>{post.content}</p>
                <div className='flex gap-x-2 sm:gap-x-3 mt-2 overflow-visible'>
                {post.tags.map((tag, index)=>{
                  return (
                    <span className='sm:text-xs text-[11px] text-blue-500 font-bold' key={index}>{`#${tag} `}</span>
                  )
                })}
                </div>
              </div>
            )))
        )
      }
    </div>
  )
}

export default Blogs
