import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import style from './header.module.css'
{/* style css import */}

{/* i18n import */}
import { useTranslation } from 'react-i18next';
{/* i18n import */}

{/* icon import */}
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GridViewIcon from '@mui/icons-material/GridView';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlaceIcon from '@mui/icons-material/Place';
import RateReviewIcon from '@mui/icons-material/RateReview';
import EmailIcon from '@mui/icons-material/Email';
import SegmentIcon from '@mui/icons-material/Segment';
import { ThemeContext } from '../../context/themebuttonContext';
import Slide from '@mui/material/Slide';
{/* icon import */}

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false); 
    React.useEffect(() => {
      document.body.style.overflowY = openNav ? 'hidden' : 'auto';
    }, [openNav])
  {/* Navigation Value */}
  const NavValue = [
    {id:1, icon:<HomeIcon fontSize="small"/>, name:"Hero",link:"/"},
    {id:2, icon:<InfoIcon fontSize="small"/>, name:"About",link:"/about"},
    {id:3, icon:<GridViewIcon fontSize="small"/>, name:"Collections",link:"/collections"},
    {id:4, icon:<LocalOfferIcon fontSize="small"/>, name:"Offers",link:"/offers"},
    {id:5, icon:<PlaceIcon fontSize="small"/>, name:"Close Us",link:"/close-us"},
    {id:7, icon:<RateReviewIcon fontSize="small"/>, name:"Testimonials",link:"/testimonials"},
    {id:6, icon:<EmailIcon fontSize="small"/>, name:"Contact",link:"/contact"},
    {id:8, icon:<SegmentIcon fontSize="small"/>, name:"Footer",link:"/footer"},
  ]
  
  {/* i18n hock */}
  const { t, i18n } = useTranslation();
  {/* i18n hock */}
  
  {/* theme context */}
  const { WebsiteTheme, setWebsiteTheme } = React.useContext(ThemeContext);
  {/* theme context */}
  
  const [openLanguegeSelect, setOpenLanguegeSelect] = React.useState(false);
  const changeLanguage = (e) => {
    const langValue = e.target.value;
    i18n.changeLanguage(langValue);
    localStorage.setItem('lang', langValue);
  };

  
  {/* theme hock */}
  const theme = useTheme();
  {/* theme hock */}
  {/* Navigation Handler */}
   const NavLis = NavValue.map((value)=>{
      return(
       <li 
       style={{
        '--hover-bg-li': theme.palette.wbsiteTheme.background.headerBg,
        '--hover-border-li': theme.palette.wbsiteTheme.border.borderHeader,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        
       }}
       key={value.id}>
        <a style={{color:theme.palette.wbsiteTheme.text.text4}} href={value.link}>{t(value.name)}</a>
        <span style={{ 
          color: theme.palette.wbsiteTheme.text.text17 }}>{value.icon}</span>
       </li> 
       )
    })
  {/* Navigation Handler */}

  return (
    <>
      {/* reader */}
      <header
      style={{
        backgroundColor: theme.palette.wbsiteTheme.background.default,
        borderColor: theme.palette.wbsiteTheme.border.borderHeader,
        '--hover-line': theme.palette.wbsiteTheme.text.text17,
        '--hover-text': theme.palette.wbsiteTheme.text.text1
      }}
      className={style.header}>
        {openNav === true ? 
        <HighlightOffIcon
         className={style.iconNav}
         onClick={() => setOpenNav(false)}
         /> : 
        <MenuIcon onClick={() => setOpenNav(true)} className={style.iconNav}/>}
        <ul className={style.nav}>
           {NavLis}
        </ul>
        {/* theme and language button*/}
        <div className={style.Options}>
           {/* theme button */}
           <div 
             className={style.themeBtn} 
             onClick={() => setWebsiteTheme(WebsiteTheme === 'dark' ? 'light' : 'dark')}
             style={{
               backgroundColor: WebsiteTheme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
               borderColor: theme.palette.wbsiteTheme.border.borderHeader,
               color: theme.palette.wbsiteTheme.text.text17
             }}
           >
            {WebsiteTheme === 'dark' ? <LightModeIcon /> 
            : <DarkModeIcon />}
           </div>
           {/* theme button */}
           {/* language button */}
        <FormControl sx={{ minWidth: 90 }} size="small">
          <InputLabel 
            id="language-select-label" 
            sx={{ 
              color: WebsiteTheme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
              fontSize: '0.85rem',
              '&.Mui-focused': { color: theme.palette.wbsiteTheme.text.text17 }
            }}
          >
            {t("Lang")}
          </InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            open={openLanguegeSelect}
            onClose={() => setOpenLanguegeSelect(false)}
            onOpen={() => setOpenLanguegeSelect(true)}
            label="Lang"
            defaultValue={localStorage.getItem("lang") || "ar"}
            onChange={changeLanguage}
            sx={{
              color: theme.palette.wbsiteTheme.text.text1,
              fontSize: '0.85rem',
              height: '38px',
              borderRadius: '20px',
              background: WebsiteTheme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.wbsiteTheme.border.borderHeader,
                borderRadius: '20px',
              },
              '&:hover': {
                background: WebsiteTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.wbsiteTheme.text.text17,
                },
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.wbsiteTheme.text.text17,
                borderWidth: '1.5px',
              },
              '& .MuiSvgIcon-root': {
                color: theme.palette.wbsiteTheme.text.text17,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: theme.palette.wbsiteTheme.background.paper,
                  color: theme.palette.wbsiteTheme.text.text1,
                  border: `1px solid ${theme.palette.wbsiteTheme.border.borderHeader}`,
                  marginTop: '5px',
                  '& .MuiMenuItem-root': {
                    fontSize: '0.85rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: WebsiteTheme === 'dark' ? 'rgba(29, 233, 182, 0.1)' : 'rgba(85, 139, 47, 0.1)',
                    },
                    '&.Mui-selected': {
                      bgcolor: WebsiteTheme === 'dark' ? 'rgba(29, 233, 182, 0.15)' : 'rgba(85, 139, 47, 0.15)',
                      '&:hover': {
                        bgcolor: WebsiteTheme === 'dark' ? 'rgba(29, 233, 182, 0.25)' : 'rgba(85, 139, 47, 0.2)',
                      }
                    }
                  }
                }
              }
            }}
          >
            <MenuItem value={"en"}>{t("English")}</MenuItem>
            <MenuItem value={"ar"}>{t("Arabic")}</MenuItem>
          </Select>
        </FormControl>
           {/* language button */}
        </div>
      </header>
      {/* header media */}
     <Slide in={openNav} >
     <header
      style={{
        position: 'fixed',
        top: "60px",
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: theme.palette.wbsiteTheme.background.headerBg,
        borderColor: theme.palette.wbsiteTheme.border.borderHeader,
      }}
      className={style.headerMedia}
      >
       <ul className={style.navMedia}>
         {NavLis}
       </ul>
      </header>
    </Slide>
      {/* header media */}
    {/* reader */}
    </>
  )
}