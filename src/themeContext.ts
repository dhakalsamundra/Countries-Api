import React from 'react'

export const themes = {
  primary: {
    color: 'Crimson',
    code: '#a30f2d',
  },
  secondary: {
    color: 'Green',
    code: '#00cc00',
  },
  third: {
    color: 'Pink',
    code: '#ff6666',
  },
}

export default React.createContext({
  theme: themes.primary,
  switchTheme: (code: string) => {},
})
