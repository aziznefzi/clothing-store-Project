import React from 'react'
{/* style css import */}
import style from './contact.module.css'
{/* style css import */}

{/* mui icon */}
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
{/* mui icon */}

{/* i18n import */}
import { useTranslation } from 'react-i18next';
{/* i18n import */}

{/* theme import */}
import { useTheme } from '@mui/material/styles';
{/* theme import */}

export default function contact() {
  {/* i18n hock */}
  const { t } = useTranslation();
  {/* i18n hock */}

  {/* theme hock */}
  const theme = useTheme();
  {/* theme hock */}

  const ContactValue = [
    {id:1, icon: <MailOutlineIcon />, title: "EmailUs", text:"Eraa@Store.com"},
    {id:2, icon: <LocalPhoneIcon />, title: "CallUs", text:"+216 20 222 333"},
    {id:3, icon: <LocationOnIcon />, title: "VisitUs", text:"123 Ben Arous, Tunis, Tunisia"},
  ]
  return (
    <div id="contact" className={style.contactUs}>
      <div className={style.header}>
        <h4 className={`${style.title} ${theme.palette.mode === "dark" ? style.titleDark : style.titleLight}`}>
          {t("contactUs")}
        </h4>
        <p className={style.description} style={{ color: theme.palette.wbsiteTheme.text.text6 }}>
          {t("contactText")}
        </p>
      </div>
      
      <div className={style.cardsContainer}>
        {ContactValue.map((item) => (
          <div 
            key={item.id}
            className={`${style.card} ${theme.palette.mode === "dark" ? style.cardDark : style.cardLight}`}
          >
            <div className={style.iconWrapper}>
              {item.icon}
            </div>
            <div className={style.cardContent}>
              <h5 className={style.cardTitle}>{t(item.title)}</h5>
              <p className={style.cardText} style={{ color: theme.palette.wbsiteTheme.text.text7 }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
