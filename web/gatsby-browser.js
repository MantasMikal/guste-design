import './src/assets/scss/base.global.scss'

import React from 'react'
import { NavigationContext } from 'Context/NavigationContext'

export const wrapRootElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>
}

const Wrapper = ({ children }) => {
  const [isContactModalOpen, setContactModalOpen] = React.useState(false)
  return (
    <NavigationContext.Provider
      value={{
        isContactModalOpen,
        setContactModalOpen
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
