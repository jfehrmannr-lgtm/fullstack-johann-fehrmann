import React, { useRef, useState } from 'react'
import CardInfo from './CardInfo'
import CardHability from './CardHability'
import { Button } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import JSONTranslation from '../../translation/translation.json'
import { TranslationStore } from '../../store/Translation/Translation.store'

const animationPreset = {
  initial: { opacity: 0, y: 10, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.98 },
  transition: { duration: 0.25, ease: 'easeInOut' }
}

const Card = () => {
  const { translation } = TranslationStore()
  const [itShow, setItShow] = useState<"info" | "hability">("info")
  const cardRef = useRef<HTMLDivElement>(null)

  const translationText = JSONTranslation[translation.value.toLocaleLowerCase() as 'en' | 'es']

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rotate = 0.4

    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * rotate
    const rotateY = ((x - centerX) / centerX) * rotate

    cardRef.current.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg) scale(1)`
  }

  return (
    <div
      ref={cardRef}
      className='bg-white lg:w-[900px] lg:h-[450px] flex flex-col lg:rounded-2xl py-8 px-8 lg:shadow-sm text-cyan-950'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* HEADER (no animado) */}
      <div className='flex md:flex-row flex-col md:items-center mb-4 md:space-y-0 space-y-4'>
        <div className='flex flex-1 items-center gap-2'>
          <div className='md:flex hidden bg-[#D7EAE0] w-12 h-12 items-center justify-center text-2xl rounded-full relative'>
            <span className='relative top-[1px]'>JF</span>
          </div>
          <div className='flex flex-col -space-y-1'>
            <h1 className='text-xl'>
              Johann <span className="md:inline-block hidden" >Alexander</span> Fehrmann Rojas
            </h1>
            <h2 className='text-xl'>
              {translationText["card.developer"]}
            </h2>
          </div>
        </div>

        <Button
          className='md:block items-center justify-center md:w-28 w-full'
          onClick={() => setItShow(itShow === "info" ? "hability" : "info")}
          type='primary'
        >
          {itShow === "info" ? translationText["card.hability"] : translationText["card.information"]}
        </Button>
      </div>

      {/* CONTENIDO ANIMADO */}
      <div className="relative flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={itShow}
            className="flex flex-col h-full"
            initial={animationPreset.initial}
            animate={animationPreset.animate}
            exit={animationPreset.exit}
          >
            {itShow === "info" ? <CardInfo /> : <CardHability />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default React.memo(Card)