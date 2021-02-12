import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import Contenido from './components/Contenido'

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Contenido/>

    </ThemeProvider>
  );
}

export default App;
