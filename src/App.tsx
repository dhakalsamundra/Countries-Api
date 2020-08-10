import React, { useState } from 'react'

import Routes from './Routes'
import themeContext, { themes } from './themeContext'

export default function App() {
  const [context, setContext] = useState({
    theme: themes.primary,
    switchTheme: (code: string) => {
      // console.log(code)
      setContext((current) => ({
        ...current,
        theme:
          code === themes.primary.code
            ? themes.primary
            : code === themes.secondary.code
              ? themes.secondary
              : themes.third,
      }))
    },
  })
  return (
    <themeContext.Provider value={context}>
      <Routes />
    </themeContext.Provider>
  )
}
