// INFO : This has to be a client component, as accessing stuff related to redux must be done inside the client
'use client'

import { store } from './store'
import { Provider } from 'react-redux'
import React, { ReactNode } from 'react'

function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
