import React from 'react'

export default function CloseIcon(props) {
  const { width, height, color } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.69901 7.78827L14.239 13.3283V14.7883H12.779L7.23901 9.24827L1.69901 14.7883H0.239014V13.3283L5.77901 7.78827L0.239014 2.24827V0.788269H1.69901L7.23901 6.32827L12.779 0.788269H14.239V2.24827L8.69901 7.78827Z"
        fill={color || 'black'}
      />
    </svg>
  )
}
