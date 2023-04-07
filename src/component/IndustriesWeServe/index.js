import React from 'react';
import Styles from './IndustriesWeServe.module.scss';
import RealEstateIcon from '../../assets/images/realestateicon.svg';
import FashionIcon from '../../assets/images/fashionicon.svg';
import HospitalityIcon from '../../assets/images/hospitalityicon.svg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const index = () => {
  return (
    <div className={Styles.IndustriesWeServe}>
      <h1 className='head-line'>Industries We Serve</h1>
      <div className={Styles.IndustriesWeServe_carousal}>
        <OwlCarousel className='owl-theme industries_carousal' loop={false} margin={10} dots={false} nav={true} items={3} navText={['<span class="prev"></span>','<span class="next"></span>']}>
            <div className={Styles.IndustriesWeServe_carousal_box}>
                <div className={Styles.IndustriesWeServe_carousal_box_icondiv}>
                  <img src={RealEstateIcon} alt='Real Estate Icon'/>
                </div>
                <h6>Real estate</h6>
                <p>StartDesigns is based in India and provides web design and development ...</p>
            </div>
            <div className={Styles.IndustriesWeServe_carousal_box}>
                <div className={Styles.IndustriesWeServe_carousal_box_icondiv}>
                  <img src={FashionIcon} alt='Fashion Icon'/>
                </div>
                <h6>Fashion</h6>
                <p>StartDesigns is based in India and provides web design and development ...</p>
            </div>
            <div className={Styles.IndustriesWeServe_carousal_box}>
                <div className={Styles.IndustriesWeServe_carousal_box_icondiv}>
                  <img src={HospitalityIcon} alt='Hospitality Icon'/>
                </div>
                <h6>Hospitality</h6>
                <p>StartDesigns is based in India and provides web design and development ...</p>
            </div>
            <div className={Styles.IndustriesWeServe_carousal_box}>
                <div className={Styles.IndustriesWeServe_carousal_box_icondiv}>
                  <img src={HospitalityIcon} alt='Hospitality Icon'/>
                </div>
                <h6>Hospitality</h6>
                <p>StartDesigns is based in India and provides web design and development ...</p>
            </div>
        </OwlCarousel>
    </div>
    </div>
  )
}

export default index