import React, { useRef } from 'react'
import { Button } from 'antd'
import ProfileAvatar from "../../../public/profile-avatar.png"
import WhatsappIcon from "../../../public/whatsapp.png"
import GamilIcon from "../../../public/gmail.png"
import InstagramIcon from "../../../public/instagram.png"

const Card = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rotate = 1

    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * rotate; // Máximo 2 grados
    const rotateY = ((x - centerX) / centerX) * rotate; // Máximo 2 grados

    cardRef.current.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      className='bg-[#FFFBF5] w-[900px] h-[450px] flex flex-col rounded-2xl py-8 px-8 shadow-sm gap-y-6 text-cyan-950'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-center'>
        <div className='flex flex-1 items-center gap-2'>
          <div className='bg-[#D7EAE0] w-12 h-12 flex items-center justify-center text-2xl rounded-full relative'>
            <span className='relative top-[1px]'>PM</span>
          </div>
          <div className='flex flex-col -space-y-1'>
            <span className='text-xl'>
              Psicólogo
            </span>
            <span className='text-xl'>
              Pablo Martínez Leon
            </span>
          </div>
        </div>
        <div>
          <Button className="!bg-[#D7EAE0] hover:!bg-[#EBF5F1] active:!bg-[#B8D6C7] hover:!border-[#6B8B77] !text-cyan-950">
            Agendar una sesión
          </Button>
        </div>
      </div>
      <div className='grow'>
        <div className='flex flex-grow h-full gap-x-10'>
          <div className='flex items-center'>
            <div className='rounded-2xl overflow-hidden'>
              <img src={ProfileAvatar} className='w-64 h-64' />
            </div>
          </div>
          <div className=' flex-1 flex justify-between flex-col h-full'>
            <div>
              <p className='text-4xl'>Pablo Martínez León</p>
              <p className='text-3xl'>Psicólogo Clínico</p>
            </div>
            <p className='text-xl'>Apoyo psicológico para adultos y jóvenes, con enfoque en manejo de la ansiedad, estrés y crecimiento personal</p>
            <div className=''>
              <Button className="!bg-[#D7EAE0] hover:!bg-[#EBF5F1] active:!bg-[#B8D6C7] hover:!border-[#6B8B77] !text-cyan-950">
                Agendar una sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-14'>
        <div className='flex items-center'>
          <img src={WhatsappIcon} className='w-5 mx-1' />
          <Button type='link' size='small'>+56951975328</Button>
        </div>
        <div className='flex items-center'>
          <img src={InstagramIcon} className='w-5 mx-1' />
          <Button type='link' size='small'>@pspablomartinez</Button>
        </div>
        <div className='flex items-center'>
          <img src={GamilIcon} className='w-5 mx-1' />
          <Button type='link' size='small'>pablomartinezleon22@uc.cl</Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Card)