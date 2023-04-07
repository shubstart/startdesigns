import React from 'react';
import Styles from './CompanyList.module.scss';
import DAMLLogo from '../../assets/images/damllogo.svg';
import MetaverseLogo from '../../assets/images/metaverselogo.svg';
import ACSLogo from '../../assets/images/acslogo.svg';
import EcomheroesLogo from '../../assets/images/ecomheroeslogo.svg';
import ChangesLogo from '../../assets/images/changeslogo.svg';


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const index = () => {
  return (
    <div className={Styles.CompanyList}>
        <OwlCarousel className="owl-theme" loop margin={10} dots={false} nav={false} items={5}>
            <div className={Styles.CompanyList_itemcont}>
                <img src={DAMLLogo} alt='DAML'/>
            </div>
            <div className={`${Styles.CompanyList_itemcont} ${Styles.CompanyList_metaverseimg}`}>
                <img src={MetaverseLogo} alt='Metaverse Summit'/>
            </div>
            <div className={`${Styles.CompanyList_itemcont} ${Styles.CompanyList_acsimg}`}>
                <img src={ACSLogo} alt='ACS'/>
            </div>
            <div className={`${Styles.CompanyList_itemcont} ${Styles.CompanyList_ecomheroesimg}`}>
                <img src={EcomheroesLogo} alt='Ecomheroes'/>
            </div>
            <div className={Styles.CompanyList_itemcont}>
                <img src={ChangesLogo} alt='Changes'/>
            </div>
        </OwlCarousel>
    </div>
  )
}

export default index