import React from 'react'

export default function DEIcon(props) {
  const { width, height, color } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={color} />
      <defs>
        <pattern
          id="pattern0_409_98"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.000976562 0.000968054)" />
        </pattern>
        <image id="image0_409_98" width={width} height={height} />
      </defs>
    </svg>
  )
}
