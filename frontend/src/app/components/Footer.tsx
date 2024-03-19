import Image from 'next/image'
import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import SocialMedia from './SocialMedia'

function Footer () {
    return (
      <div className="flex flex-col justify-start items-center md:flex-row md:justify-around md:items-start  w-full bg-yellow-300 gap-6 md:gap-0 py-10">
          <div className="flex w-full bg-red-200 max-w-[400px] md:w-[30%] flex-col gap-6 items-center justify-center ">
              <p className="m-auto md:mx-6 text-justify text-gray-500">0XInnovators team</p>
              <p className="m-auto md:mx-6 text-justify text-gray-500">Willian Rios</p>
              <p className="m-auto md:mx-6 text-justify text-gray-500">Moisés Lima</p>
              <p className="m-auto md:mx-6 text-justify text-gray-500">Vinicius Feitosa</p>
          </div>
          <div className="flex w-full bg-red-200 max-w-[400px] md:w-[30%] flex-col gap-6 items-center justify-center ">
              <Image src='' alt='Footer logo' height={100} width={100} />
              <p className="m-auto md:mx-6 text-justify text-gray-500">Sistema de gerenciamento escolar.</p>
              <SocialMedia />
          </div>
          <div className="w-full bg-blue-700 max-w-[400px] md:w-[30%] flex flex-col gap-4">
              <h3 className="">Subscribe</h3>
              <div className="flex gap-1 items-center justify-between rounded-full px-4 py-2 bg-gray-700">
                  <input type='email' className='grow text-sm outline-none max-w-[75%] bg-transparent text-white' placeholder='Enter your email*' />
                  <RiSendPlaneFill className='text-white cursor-pointer h-4 w-4 mr-2 my-2 hover:scale-125 transition-all ease-in-outs' />
              </div>
              <p className="text-gray-500 text-justify">Descrição.</p>
          </div>
      </div>
    )
}

export default Footer