import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
