import React from 'react'
import { node, oneOf } from 'prop-types'

const StatusContext = React.createContext()

const StatusContextProvider = ({ children, status }) => (
  <StatusContext.Provider value={status}>{children}</StatusContext.Provider>
)

StatusContextProvider.propTypes = {
  children: node.isRequired,
  status: oneOf(['error', 'notice', 'success', 'warning'])
}

const StatusContextConsumer = StatusContext.Consumer

export { StatusContext, StatusContextProvider, StatusContextConsumer }
