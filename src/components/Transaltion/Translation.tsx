import React, { Fragment } from 'react'
import { Select } from 'antd'
import { translationOptions } from './transaltion.options'
import { TranslationStore } from '../../store/Translation/Translation.store'

const Translation = () => {
  const { setTranslation, translation } = TranslationStore()

  return (
    <Fragment>
      <Select
        className='bg-white border border-gray-300 rounded-lg'
        variant='borderless'
        size='large'
        value={translation.value}
        onChange={(value: string) => {
          const selected = translationOptions.find(opt => opt.value === value);
          setTranslation(selected!);
        }}
        options={translationOptions}
        optionLabelProp="label"
      />
    </Fragment>
  )
}

export default React.memo(Translation)