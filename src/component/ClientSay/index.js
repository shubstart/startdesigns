import React from 'react';
import Styles from './ClientSay.module.scss';
import ClientBanner from '../../assets/images/clientbanner.svg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const index = () => {
  return (
    <div className={Styles.ClientSay}>
        <div className='container'>
            <div className={Styles.ClientSay_flexbox}>
                <div className={Styles.ClientSay_flexbox_innerone}>
                    <div className={Styles.ClientSay_flexbox_innerone_imagebox}>
                        <img src={ClientBanner} alt='Client Banner' />
                    </div>
                    <p>Case Study</p>
                    <h2>E-Commerce Invest</h2>
                    <small>StartDesigns is a custom web design & web app development agency based out in India, France, and USA.</small>
                </div>
                <div className={Styles.ClientSay_flexbox_innertwo}>
                    <h1 className='head-line'>Client Say</h1>
                    <OwlCarousel className="clientsay_carousal owl-theme" loop={true} margin={10} dots={false} nav={true} items={1} navText={['<span class="prev"></span>','<span class="next"></span>']}>
                        <div className={Styles.ClientSay_flexbox_innertwo_carousalitem}>
                            <p>Start design provided a technical assistant so my technical illiteracy barrier was easily removed.They have an extremely proactive development & communication team which made my project a smooth ride.</p>
                            <div className={Styles.ClientSay_flexbox_innertwo_carousalitem_detailname}>
                                <small>Designation</small>
                                <h6>Client Name</h6>
                            </div>
                        </div>
                        <div className={Styles.ClientSay_flexbox_innertwo_carousalitem}>
                            <p>Start design provided a technical assistant so my technical illiteracy barrier was easily removed.They have an extremely proactive development & communication team which made my project a smooth ride.</p>
                            <div className={Styles.ClientSay_flexbox_innertwo_carousalitem_detailname}>
                                <small>Designation</small>
                                <h6>Client Name</h6>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index