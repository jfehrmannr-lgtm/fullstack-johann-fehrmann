import React from 'react'

interface IBar {
  value: 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const Bar = ({
  value
}: IBar) => {
  const barPosition = {
    'xsm': 'w-0',
    'sm': 'w-1/5',
    'md': 'w-2/5',
    'lg': 'w-3/5',
    'xl': 'w-4/5',
    'full': 'w-full'
  }

  return (
    <div className='w-full bg-gray-300 h-2 rounded-full'>
      <div className={`${barPosition[value]} bg-blue-500 h-2 rounded-full`}></div>
    </div>
  )
}

export default Bar