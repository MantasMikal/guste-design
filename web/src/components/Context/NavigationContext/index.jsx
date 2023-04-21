import React from 'react'

export const NavigationContext = React.createContext({
  isContactModalOpen: false,
  setContactModalOpen: (state) => {}
})
  