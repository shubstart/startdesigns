import React from 'react';
import Styles from './CompanyList.module.scss';
import DAMLLogo from '../../assets/images/damllogo.svg';
import MetaverseLogo from '../../assets/images/metaverselogo.svg';
import ACSLogo from '../../assets/images/acslogo.svg';
import EcomheroesLogo from '../../assets/images/ecomheroeslogo.svg';
import ChangesLogo from '../../assets/images/changeslogo.svg';

const index = () => {
  return (
    <div className={Styles.CompanyList}>
        <div>
            <img src={DAMLLogo} alt='DAML'/>
        </div>
        <div>
            <img src={MetaverseLogo} alt='Metaverse Summit'/>
        </div>
        <div>
            <img src={ACSLogo} alt='ACS'/>
        </div>
        <div>
            <img src={EcomheroesLogo} alt='Ecomheroes'/>
        </div>
        <div>
            <img src={ChangesLogo} alt='Changes'/>
        </div>
    </div>
  )
}

export default index