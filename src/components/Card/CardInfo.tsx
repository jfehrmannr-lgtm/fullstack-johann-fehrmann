import React, { Fragment, type JSX } from 'react'
import { Button } from 'antd'
import ProfileAvatar from "../../assets/profile-avatar-johann.png"
import WhatsappIcon from "../../assets/whatsapp.png"
import GamilIcon from "../../assets/gmail.png"
import InstagramIcon from "../../assets/instagram.png"
import Strong from '../Strong/Strong'
import UbicationIcon from "../../assets/alfiler.png"

interface ICardInfo {
  button: JSX.Element | JSX.Element[]
}

const CardInfo = ({
  button
}: ICardInfo) => {
  return (
    <Fragment>
      <div className='flex items-center'>
          <div className='flex flex-1 items-center gap-2'>
            <div className='bg-[#D7EAE0] w-12 h-12 flex items-center justify-center text-2xl rounded-full relative'>
              <span className='relative top-[1px]'>JF</span>
            </div>
            <div className='flex flex-col -space-y-1'>
              <h1 className='text-xl'>
                Johann Alexander Fehrmann Rojas
              </h1>
              <h2 className='text-xl'>
                Desarrollador Fullstack
              </h2>
            </div>
          </div>
          <div>
            {button}
          </div>
        </div>
        <div className='grow'>
          <div className='lg:flex flex-grow h-full gap-x-10'>
            <div className='flex items-center'>
              <div className='rounded-2xl overflow-hidden'>
                <img alt="profile_avatar" src={ProfileAvatar} className='w-64 h-64 object-cover'  />
              </div>
            </div>
            <div className=' flex-1 flex space-y-4 flex-col h-full'>
              <div>
                <h1 className='text-4xl'>
                  Johann Fehrmann Rojas
                </h1>
                <h2 className='text-3xl'>
                  Desarrollador Fullstack - Semi senior
                </h2>
              </div>
              <p className='text-xl'>Enfocado en la construcción, mantención y evolución de aplicaciones web en entornos productivos, utilizando stacks modernos como React, Node.js y servicios cloud, con énfasis en escalabilidad, rendimiento y buenas prácticas de desarrollo.</p>
            </div>
          </div>
        </div>
        <div className='lg:flex items-center justify-center space-x-14'>
          <div className='flex items-center'>
            <img
              alt="Ubicación"
              src={UbicationIcon} 
              className='w-5 mx-1'
            />
            <a
              className='text-[#1677FF] text-sm hover:text-[#69B1FF] active:text-[#0859D1] duration-200'
              href="https://www.google.com/maps?q=-33.4489,-70.6693"
              target='_blank'
              type='link'
              rel="noopener noreferrer"
            >
              <Strong>Angol</Strong>/Chile
            </a>
          </div>
          <div className='flex items-center'>
            <img alt="WhatsApp" src={WhatsappIcon} className='w-5 mx-1' />
            <a
              className='text-[#1677FF] text-sm hover:text-[#69B1FF] active:text-[#0859D1] duration-200'
              href="https://wa.me/56986463584"
              target='_blank'
              type='link'
              rel="noopener noreferrer"
            >
              +56986463584
            </a>
          </div>
          <div className='flex items-center'>
            <img alt="Instagram" src={InstagramIcon} className='w-5 mx-1' />
            <a
              className='text-[#1677FF] text-sm hover:text-[#69B1FF] active:text-[#0859D1] duration-200'
              href="https://www.linkedin.com/in/johann-fehrmann-rojas-02494a20b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div className='flex items-center'>
            <img alt="Correo" src={GamilIcon} className='w-5 mx-1' />
            <Button type='link' size='small'>jfehrmannr@gmail.com</Button>
          </div>
        </div>
    </Fragment>
  )
}

export default React.memo(CardInfo)