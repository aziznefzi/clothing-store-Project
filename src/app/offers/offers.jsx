import React from 'react'
import { useTranslation } from 'react-i18next';
import style from './offers.module.css';
import { useTheme } from '@mui/material/styles';

{/* img imports */}
import category1 from "../../frontend/image/Floral Short.png"
import category5 from "../../frontend/image/Casual Sneakers.png"
import category8 from "../../frontend/image/black shapo.png"
import category7 from "../../frontend/image/Linen Cropped Pants.png"
{/* img imports */}

export default function offers() {
  const theme = useTheme()
  const {t} = useTranslation();
  const Products = [
   {id:1, imgProdict: category1, nameProduct: "Product1", priceProduct: "30$", offre: "15$"},
   {id:2, imgProdict: category5, nameProduct: "Product2", priceProduct: "43$", offre: "20$"},
   {id:3, imgProdict: category8, nameProduct: "Product3", priceProduct: "20$", offre: "10$"},
   {id:4, imgProdict: category7, nameProduct: "Product4", priceProduct: "79$", offre: "25$"}
  ]
  return (
    <div id='offers' className={theme.palette.mode === "dark" ? style.offersContainerDark : style.offersContainer}>
      <h4 className={style.offersH4}>{t("OffersH4")}</h4>
      <div className={style.ContentOffre}>
        {Products.map((product) => {
          return(
            <div className={style.Product} key={product.id}>
            <img src={product.imgProdict} alt={product.nameProduct} />
            <h6 style={{
              color: theme.palette.wbsiteTheme.text.text17
              }}>{t(product.nameProduct)}</h6>
            <div className={style.price}>
            <del style={{
              color: "#9c0d0d",
              textDecoration: "line-through"}}>{product.priceProduct}
            </del>
            <p>{product.offre}</p>
            </div>
          </div>
          )
        })}
      </div>
      <button>{t("AllProducts")}</button>
    </div>
  )
}
