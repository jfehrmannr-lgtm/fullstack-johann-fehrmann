import React, { Fragment, type JSX } from 'react'
import { Slider } from 'antd'
import Bar from '../Bar/Bar'

interface ICardInfo {
  button: JSX.Element | JSX.Element[]
}

const CardHability = ({
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
      <div className='flex flex-col justify-between h-full'>
        <div>
          React
          <Bar value='xl'/>
        </div>
        <div>
          Express
          <Bar value='xl'/>
        </div>
        <div>
          NestJS
          <Bar value='xl'/>
        </div>
        <div>
          GCP
          <Bar value='xl'/>
        </div>
        <div>
          PostgreSQL
          <Bar value='xl'/>
        </div>
        <div>
          MongoDB
          <Bar value='xl'/>
        </div>
      </div>
    </Fragment>
  )
}

export default React.memo(CardHability)