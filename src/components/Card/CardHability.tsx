import React, { Fragment } from 'react'
import Bar from '../Bar/Bar'

const CardHability = () => {
  return (
    <Fragment>
      <div className='flex flex-col justify-between h-full'>
        <div className='text-xl font'>
          React
          <Bar value='full'/>
        </div>
        <div className='text-xl font'>
          Express
          <Bar value='lg'/>
        </div>
        <div className='text-xl font'>
          NestJS
          <Bar value='xl'/>
        </div>
        <div className='text-xl font'>
          PostgreSQL
          <Bar value='lg'/>
        </div>
        <div className='text-xl font'>
          MongoDB
          <Bar value='lg'/>
        </div>
        <div className='text-xl font'>
          GCP
          <Bar value='xl'/>
        </div>
        <div className='text-xl font'>
          Inglés
          <Bar value='full'/>
        </div>
      </div>
    </Fragment>
  )
}

export default React.memo(CardHability)