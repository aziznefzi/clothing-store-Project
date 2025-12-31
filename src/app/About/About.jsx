import React, { useContext } from 'react'
import style from './About.module.css'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import AboutUsImage from "../../frontend/image/AboutUsImage.png"

import {ThemeContext} from "../../context/themebuttonContext"
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
export default function About() {
  const theme = useTheme()
  const ColorItem = {
       color: theme.palette.wbsiteTheme.text.text17 
  }
  const { t } = useTranslation();
  const {WebsiteTheme} = useContext(ThemeContext);
  {/* Our Advantages */}
  const OurAdvantages = [
    {
      id:1,
      title:"Highquality",
      text: "OurAdvantagesText1",
      icon: <ElectricBoltIcon sx={ColorItem}/>
    },
    {
      id:2,
      title: "Livraisonrapide",
      text: "OurAdvantagesText2",
      icon: <RocketLaunchIcon sx={ColorItem}/>
    },
    {
      id:3,
      title: "Desprixraisonnables",
      text: "OurAdvantagesText3",
      icon: <MonetizationOnIcon sx={ColorItem}/>
    },
  ]
  {/* Our Advantages */}
  return (
    <>
    {/* About */}
    <div className={style.About}>
      <h4 className={WebsiteTheme === "dark" ? style.darkModeH4 : style.lightModeH4}>{t("AboutUs")}</h4>
      <p 
      style={{
        color: theme.palette.wbsiteTheme.text.text4
      }}
      className={style.AboutUsText}>{t("AboutUsText")}</p>
      {/* About Container */}
      <div className={style.AboutContainer}>
        {/* Our Advantages */}
         <div className={style.OurAdvantages}>
         {OurAdvantages.map((item)=>{
          return(
            <div key={item.id} 
            style={{
              borderColor: theme.palette.wbsiteTheme.text.text17
            }}
            className={WebsiteTheme === "dark" ? style.OurAdvantagesItemDark : style.OurAdvantagesItemLight}>
              <div className={style.TextItem}>
              <h5 style={ColorItem}>{t(item.title)}</h5>
              <p
                style={{
                 color: theme.palette.wbsiteTheme.text.text5             
                }}
              >{t(item.text)}</p>
              </div>
              {item.icon}
            </div>
          )
         })}
         <button 
         style={{color: theme.palette.wbsiteTheme.text.text16}}
         className={WebsiteTheme === "dark" ? style.BtntDark : style.BtntLight}>{t("Findoutmore")}</button>
         </div>
        {/* Our Advantages */}
        {/* img about */}
        <div className={`${style.ImgAbout} ${WebsiteTheme === "dark" ? style.ImgAboutDark : style.ImgAboutLight}`}>
          <img src={AboutUsImage} alt="" />
        </div>
      </div>
        {/* img about */}
      {/* About Container */}
    </div>
    {/* About */}
    </>
  )
}
