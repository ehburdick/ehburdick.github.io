import React from 'react'
import Image from 'next/image';

import {Envelope, Linkedin} from "./icons/";

const Sidebar = ({data}) => {
    const {name,role, education, contactLinks} = data
  return (
    <div className='bg-black flex flex-col h-screen content-between w-full h-auto sm:justify-around sm:w-1/3 sm:fixed '>
       <div className = 'text-white flex flex-col p-10 items-center'>
        <Image 
            priotriy
            width={300}
            height={300}
            className = 'rounded-full h-full mb-6'
            src='/images/henryburdick.jpg'
            alt='henryburdick.jpg'
            aria-label='henryburdick.jpg'

        />
            <h1 className='mb-2'>{name}</h1>
            <h2 className='mb-8'>{role}</h2>
            <p className='mb-2' >{education[0]}</p>
            <p className='mb-2' >{education[1]}</p>
            <div className = 'text-white text-center mb-4 mt-4 sm:mt-8'>
                <h3 className='mb-2'>CONACT ME</h3>
                <div className = 'flex flex-row justify-center gap-2'>
                <a className='icons-contactme' href={contactLinks?.[0]} aria-label = {'email link'}>
                    <Envelope />
                </a>
                <a className='icons-contactme' href={contactLinks?.[1]} aria-label = {'linkedin link'}>
                    <Linkedin />
                </a>
                </div>
            </div>
       </div>
    </div>
  )
}
 
export default Sidebar