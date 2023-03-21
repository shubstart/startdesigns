import React from 'react';
import Styles from './Header.module.scss';
import Logo from '../../assets/images/logo.svg';
import Button from '../common/Button';
import Email from '../../assets/images/email.svg';
import Skype from '../../assets/images/skype.svg';
import IndiaFlag from '../../assets/images/india-flag.svg';

const index = () => {
  return (
    <header className={Styles.main}>
        <div className={`${Styles.main_header} container`}>
            <div className={Styles.main_header_flex}>
                <div className={Styles.main_header_flex_logo}>
                    <img src={Logo} alt='logo-start-designs'/>
                </div>
                <div className={Styles.naviga}>
                    <div className={Styles.naviga_info}>
                        <ul className={Styles.naviga_info_list}>
                            <li className={Styles.naviga_info_list_item}><span><img src={Email} alt='Email'/></span> info@startdesigns.com</li>
                            <li className={Styles.naviga_info_list_item}><span><img src={Skype} alt='Skype'/></span>start10designs</li>
                            <li className={Styles.naviga_info_list_item}><span><img src={IndiaFlag} alt='India Flag'/></span>+91 141-4044287</li>
                        </ul>
                    </div>
                    <nav className={Styles.naviga_nav}>
                        <ul className={Styles.naviga_nav_link}>
                            <li className={Styles.naviga_nav_link_item}><a href='#'>Home</a></li>
                            <li className={Styles.naviga_nav_link_item}><a href='#'>About Us</a></li>
                            <li className={Styles.naviga_nav_link_item}><a href='#' className={Styles.dropdown}>Services</a></li>
                            <li className={Styles.naviga_nav_link_item}><a href='#' className={Styles.dropdown}>Hire Resources</a></li>
                            <li className={Styles.naviga_nav_link_item}><a href='#'>Portfolio</a></li>
                            <li className={Styles.naviga_nav_link_item}><a href='#'>Career</a></li>
                            <li className={Styles.naviga_nav_link_item}><a href='#'>Contact Us</a></li>
                            <li className={Styles.naviga_nav_link_item}><a href='#'>Blog</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={Styles.header_btn}>
                    <Button />
                </div>
            </div>
        </div>
    </header>
  )
}

export default index