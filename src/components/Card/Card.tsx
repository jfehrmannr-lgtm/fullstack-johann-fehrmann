import React, { useRef, useState } from 'react'
import CardInfo from './CardInfo'
import CardHability from './CardHability';
import { Button } from 'antd';



const Card = () => {
  const [itShow, setItShow] = useState<"info" | "hability">("info")
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
      className='bg-white lg:w-[900px] lg:h-[450px] flex flex-col lg:rounded-2xl py-8 px-8 lg:shadow-sm gap-y-6 text-cyan-950'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {itShow === "info" && (
        <CardInfo button={
          <Button onClick={() => setItShow("hability")} type='primary'>
            Habilidades
          </Button>
        } />
      )}
      {itShow === "hability" && (
        <CardHability button={
          <Button onClick={() => setItShow("info")} type='primary'>
            Habilidades
          </Button>
        }/>
      )}
    </div>
  )
}

export default React.memo(Card)