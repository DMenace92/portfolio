import React, { createContext, useContext, useState } from 'react'
import { sectionIds } from '../constants'

const ActivePageContext = createContext({
  activePage: sectionIds[0],
  setActivePage: () => {},
})

export const ActivePageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(sectionIds[0])

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
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
