import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './App'

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#418FDE',
      },
      secondary: {
         main: '#C8102E',
      },
      background: {
         default: '#E5E8E8',
      },
   },
})

ReactDOM.render(
   <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
   </MuiThemeProvider>,
   document.getElementById('root')
)
