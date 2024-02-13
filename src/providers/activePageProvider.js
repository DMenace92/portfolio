import React, { createContext, useContext, useState } from 'react'

const ActivePageContext = createContext({
  activePage: 1,
  setActivePage: () => {},
  isAnimating: false,
  setIsAnimating: () => {},
})

export const ActivePageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <ActivePageContext.Provider
      value={{ activePage, setActivePage, isAnimating, setIsAnimating }}
    >
      {children}
    </ActivePageContext.Provider>
  )
}

export const useActivePage = () => {
  const context = useContext(ActivePageContext)

  if (context === undefined) {
    throw new Error('useActivePage must be used within an ActivePageProvider')
  }

  return context
}
