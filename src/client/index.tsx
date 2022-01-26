import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Provider from './store'
import Favicon from './components/favicon'
import Import from './components/import'
import Router from './components'

const theme = createTheme({
  palette: {
    text: {
      primary: 'rgb(34, 39, 51)',
      secondary: 'rgb(255, 255, 255)'
    },
    primary: {
      main: 'rgb(0, 181, 242)',
      contrastText: 'white'
    },
    background: {
      paper: 'rgb(238, 233, 221)'
    }
  },
  typography: {
    fontFamily: ['Arimo', 'sans-serif'].join(','),
    h1: {fontWeight:800},
    h2: {fontWeight:800},
    h3: {fontWeight:800},
    h4: {fontWeight:800},
    allVariants: {
      lineHeight: 1.2
    }
  }
})

ReactDOM.render(
  <Provider>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <Favicon/>
      <Import/>
      <Router/>
    </ThemeProvider>
  </Provider>
, document.getElementById('root'))