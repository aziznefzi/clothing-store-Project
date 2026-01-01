import React from 'react'
import style from "./collection.module.css"
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import imgIcon from "../../frontend/image/CollaborationImgj.png"

import nike from "../../frontend/image/nike-icon.svg"
import adidas from "../../frontend/image/adidas-icon.svg"
import puma from "../../frontend/image/puma-logo-icon.svg"

export default function Collection() {
  const {t} = useTranslation();
  const theme = useTheme();
  const iconsBandsClassname = theme.palette.mode === 'light' ? style.iconsBandsDark : "";
  return (
    <div id="collections" className={style.collectionContainer} data-theme={theme.palette.mode}>
      <div className={theme.palette.mode === 'dark' ? style.collectionImgDark : style.collectionImg}>
      <img src={imgIcon} alt="" />
      </div>
      <div className={style.collectionContent}>
        <h4 className={theme.palette.mode === 'dark' ? style.h4Dark : ""}>{t("Collection")}</h4>
        <p style={{
         color: theme.palette.wbsiteTheme.text.text9
        }}>{t("CollectionText")}</p>
        <div className={style.bands}>
          <div className={`${style.brandWrapper} ${iconsBandsClassname}`}>
            <img src={nike} alt="Nike" />
          </div>
          <div className={`${style.brandWrapper} ${iconsBandsClassname}`}>
            <img src={adidas} alt="Adidas" />
          </div>
          <div className={`${style.brandWrapper} ${iconsBandsClassname}`}>
            <img src={puma} alt="Puma" />
          </div>
        </div>
        <button className={theme.palette.mode === 'dark' ? style.ButtonDark : ""}>{t("Explore")}</button>
      </div>
    </div>
  )
}
