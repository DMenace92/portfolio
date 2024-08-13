import React from 'react'

export default function DownCaret(props) {
  const { className } = props
  return (
    <svg
      className={className}
      fill="#ffffff"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10S17.515 2 12 2zm0 14-5-6h10l-5 6z" />
    </svg>
  )
}
