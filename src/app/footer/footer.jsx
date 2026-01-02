import React from 'react';
import style from './footer.module.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

{/* mui icons */}
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
{/* mui icons */}

export default function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  // Removed iconStyle object as we will use CSS variables
   const styleIcon = {
      '--icon-color': theme.palette.wbsiteTheme.text.text17,
      '--icon-hover-color': theme.palette.wbsiteTheme.text.text16
      }
  return (
    <footer className={`${style.footer} ${isDark ? style.footerDark : style.footerLight}`} id="footer">
      <div className={style.container}>

        {/* Welcome Section */}
        <div className={style.welcomeSection}>
          <h2 className={isDark ? style.logoLight : style.logo}>Eraa Store</h2>
          <p className={style.description}>
            {t('FooterWelcome')}
          </p>
        </div>

        {/* Social Media Section */}
        <div className={style.socialSection}>
          <h3 className={style.socialTitle}>{t('FollowUs')}</h3>
          <div className={style.icons}>
            <a 
              href="#" 
              className={`${style.iconLink} ${isDark ? style.iconLinkDark : style.iconLinkLight}`} 
              aria-label="Facebook"
              style={styleIcon}
            >
              <FacebookIcon />
            </a>
            <a 
              href="#" 
              className={`${style.iconLink} ${isDark ? style.iconLinkDark : style.iconLinkLight}`} 
              aria-label="Instagram"
              style={styleIcon}
            >
              <InstagramIcon />
            </a>
            <a 
              href="#" 
              className={`${style.iconLink} ${isDark ? style.iconLinkDark : style.iconLinkLight}`} 
              aria-label="Twitter"
              style={styleIcon}
            >
              <TwitterIcon />
            </a>
            <a 
              href="#" 
              className={`${style.iconLink} ${isDark ? style.iconLinkDark : style.iconLinkLight}`} 
              aria-label="LinkedIn"
              style={styleIcon}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <hr style={{backgroundColor: theme.palette.wbsiteTheme.text.text17}}/>
      <div
      style={{
        color: theme.palette.wbsiteTheme.text.text17
      }}
      className={style.copyright}>
        {t('Copyright')}
      </div>
    </footer>
  );
}
