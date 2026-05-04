import React, { Fragment } from 'react'
import ProfileAvatar from "../../assets/profile-avatar-johann.png"
import WhatsappIcon from "../../assets/whatsapp.png"
import GamilIcon from "../../assets/gmail.png"
import Strong from '../Strong/Strong'
import UbicationIcon from "../../assets/alfiler.png"
import LinkedinIcon from "../../assets/linkedin.png"
import toast from 'react-hot-toast'
import JSONTranslation from '../../translation/translation.json'
import { TranslationStore } from '../../store/Translation/Translation.store'

const CardInfo = () => {
  const { translation } = TranslationStore()

  const translationText = JSONTranslation[translation.value.toLocaleLowerCase() as 'en' | 'es']

  return (
    <Fragment>
      <div className='grow pt-3'>
        <div className='lg:flex flex-grow gap-x-10'>
          <div className='flex items-center'>
            <div className='overflow-hidden lg:block flex items-center justify-center w-full pb-4 lg:pb-0'>
              <img alt="profile_avatar" src={ProfileAvatar} className='w-64 h-64 object-cover rounded-2xl ' />
            </div>
          </div>
          <div className='lg:pb-0 pb-4 flex-1 flex space-y-4 flex-col h-full'>
            <div>
              <h1 className='text-3xl md:text-4xl'>
                Johann Fehrmann Rojas
              </h1>
              <h2 className='text-2xl md:text-3xl'>
                {translationText["card.developer"]} - Semi senior
              </h2>
            </div>
            <p className='text-xl'>{translationText["card.info.text"]}</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-14'>
        <a
          className='flex items-center'
          href="https://maps.app.goo.gl/Bo9mF271fn7sp8nc8"
          target='_blank'
          type='link'
          rel="noopener noreferrer"
        >
          <img
            alt="Ubicación"
            src={UbicationIcon}
            className='w-5 mx-1'
          />
          <div className='text-[#1677FF] text-sm hover:text-[#69B1FF] active:text-[#0859D1] duration-200 hidden md:block'>
            <Strong>Angol</Strong>/Chile
          </div>
        </a>
        <a
          className='flex items-center'
          href="https://wa.me/56986463584"
          target='_blank'
          type='link'
          rel="noopener noreferrer"
        >
          <img alt="WhatsApp" src={WhatsappIcon} className='w-5 mx-1' />
          <div
            className='text-[#1677FF] text-sm hover:text-[#69B1FF] active:text-[#0859D1] duration-200 hidden md:block'
          >
            +56986463584
          </div>
        </a>
        <a
          className='flex items-center '
          href="https://www.linkedin.com/in/johann-fehrmann-rojas-02494a20b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Instagram" src={LinkedinIcon} className='w-5 mx-1' />
          <div className='text-[#1677FF] text-sm hover:text-[#69B1FF] active:text-[#0859D1] duration-200 hidden md:block'>
            Linkedin
          </div>
        </a>
        <button
          className='flex items-center cursor-pointer'
          onClick={() => {
            try {
              navigator.clipboard.writeText("jfehrmannr@gmail.com")
              toast.success('Correo copiado en portapapeles')

            } catch (error) {
              toast.success('No se pudo copiar el correo')
            }
          }}
        >
          <img alt="Correo" src={GamilIcon} className='w-5 mx-1' />
          <div className='text-[#1677FF] text-sm hover:text-[#69B1FF] active:text-[#0859D1] duration-200 hidden md:block'>
            jfehrmannr@gmail.com
          </div>
        </button>
      </div>
    </Fragment>
  )
}

export default React.memo(CardInfo)