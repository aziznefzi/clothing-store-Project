import { useContext, useEffect, useState, useMemo } from 'react'
import './App.css'

{/* components project import */}
import Header from './app/header/header';
import Hero from './app/Hero/Hero';
import About from './app/About/About';
import Collections from './app/collection/collection';
import Offers from './app/offers/offers';
import CloseUs from './app/CloseUs/CloseUs';
import Testimonials from './app/testimonials/testimonials';
{/* components project import */}

{/* theme import */}
import {getDesignTokens} from './frontend/theme/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './context/themebuttonContext';
import CssBaseline from '@mui/material/CssBaseline'
{/* theme import */}

{/* i18n import */}
import { useTranslation } from 'react-i18next';
{/* i18n import */}

{/* router router import */}
import {Routes,Route} from 'react-router-dom'
{/* router router import */}
function App() {
  const {WebsiteTheme} = useContext(ThemeContext);
  const theme = useMemo(() => createTheme(getDesignTokens(WebsiteTheme)), [WebsiteTheme])
  {/* Store mode in theme */}
  useEffect(() => {
    localStorage.setItem('WebsiteTheme', WebsiteTheme);
  }, [WebsiteTheme]);
  {/* Store mode in theme */}
  {/* i18n hock */}
  const { t, i18n } = useTranslation();
  {/* i18n hock */}
  useEffect(() => {
    document.body.style.direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  return (
    <div className='App'>
      {/* Routes */}
       <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* route App components */}
            <Route path="/" element={
            <>
          {/* App components */}
          <Header />
          <Hero />
          <About />
          <Collections />
          <Offers />
          <CloseUs />
          <Testimonials />
          {/* App components */}
          </>
          } />
          {/* route App components */}
        </Routes>
       </ThemeProvider>
      {/* Routes */}
    </div>
  )
}

export default App
