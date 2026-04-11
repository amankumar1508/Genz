import React from 'react'
import { FaAmazon, FaGit, FaGithub, FaMicrosoft, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { services } from '../assets/assets'
import Teams from './Teams'

export default function Partner() {
  return (
    <div className='w-full bg-white '>
      <div className='container  mx-auto pb-7  flex flex-col gap-8 items-center'>
        <h1 className='font-semibold text-4xl  sm:text-5xl'>Trusted by 10k+ partners...</h1>
        <div className='w-full flex flex-wrap gap-4  sm:gap-6 md:gap-8 justify-center items-center '>
          <div className='w-10 h-10 border-2 border-amber-400 flex items-center justify-center rounded-full sm:w-18 sm:h-18 hover:scale-105 duration-300 transition cursor-pointer '>
            <FaMicrosoft className='w-8 h-8 sm:h-10 sm:w-10 md:w-12 md:h-12' />
          </div>
          <div className='w-10 h-10 border-2 border-amber-400 flex items-center justify-center rounded-full sm:w-18 sm:h-18 hover:scale-105 hover:bg-blue-500 duration-300 transition cursor-pointer '>
            <FaTwitter className='w-8 h-8 sm:h-10 sm:w-10 md:w-12 md:h-12' />
          </div>
          <div className='w-10 h-10 border-2 border-amber-400 flex items-center justify-center rounded-full sm:w-18 sm:h-18 hover:scale-105 duration-300 transition cursor-pointer '>
            <FaWhatsapp className='w-8 h-8 sm:h-10 sm:w-10 md:w-12 md:h-12' />
          </div>
          <div className='w-10 h-10 border-2 border-amber-400 flex items-center justify-center rounded-full sm:w-18 sm:h-18 hover:scale-105 duration-300 transition cursor-pointer '>
            <FaYoutube className='w-8 h-8 sm:h-10 sm:w-10 md:w-12 md:h-12' />
          </div>
          <div className='w-10 h-10 border-2 border-amber-400 flex items-center justify-center rounded-full sm:w-18 sm:h-18 hover:scale-105 duration-300 transition cursor-pointer '>
            <FaGithub className='w-8 h-8 sm:h-10 sm:w-10 md:w-12 md:h-12' />
          </div>
          <div className='w-10 h-10 border-2 border-amber-400 flex items-center justify-center rounded-full sm:w-18 sm:h-18 hover:scale-105 duration-300 transition cursor-pointer '>
            <FaGit className='w-8 h-8 sm:h-10 sm:w-10 md:w-12 md:h-12' />
          </div>
          <div className='w-10 h-10 border-2 border-amber-400 flex items-center justify-center rounded-full sm:w-18 sm:h-18 hover:scale-105 duration-300 transition cursor-pointer '>
            <FaAmazon className='w-8 h-8 sm:h-10 sm:w-10 md:w-12 md:h-12' />
          </div>
        </div>
      </div>

      <div className="border-2   h-auto p-4 flex flex-wrap gap-6 justify-center items-center text-center ">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className='border-2 border-amber-300 rounded-2xl h-24 w-118 flex justify-center items-center p-2'>
              <Icon className='w-10 h-10' />
              <div className="">
                <h3 className="text-black/50 font-bold ">{service.title}</h3>
                <p className='text-black '>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Teams />

    </div>
  )
}
