import React from 'react'

const Strong = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <strong {...props} className={`font-normal ${props.className}`}>
      {props.children}
    </strong>
  )
}

export default React.memo(Strong)