import React from 'react';
import CompanyList from '../CompanyList';
import Styles from './AboutStartDesigns.module.scss';
import FiveRatingStar from '../../assets/images/fivestarrate.svg';
import FourRatingStar from '../../assets/images/fourstarrate.svg';
import GetProposal from '../GetProposal';

const index = () => {
  return (
    <div className={Styles.About}>
        <CompanyList />
        <div className={Styles.About_content}>
            <div className={Styles.About_content_flex}>
                <div className={Styles.About_content_flex_area}>
                    <div className={Styles.About_content_flex_area_data}>
                        <h1 className='head-line'>About Start Designs</h1>
                        <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                        <a href='#'>Read More  ...</a>
                    </div>
                    <div className={Styles.About_content_flex_area_rating} >
                        <div className={Styles.About_content_flex_area_rating_box}>
                            <h6>Google Rating</h6>
                            <div className={Styles.About_content_flex_area_rating_box_rate}>
                                <span>5.0</span>
                                <img src={FiveRatingStar} alt='five rating star' />
                            </div>
                            <small>Based on 50 Reviews</small>
                        </div>
                        <div className={Styles.About_content_flex_area_rating_box}>
                            <h6>Trustpilot</h6>
                            <div className={Styles.About_content_flex_area_rating_box_rate}>
                                <span>5.0</span>
                                <img src={FiveRatingStar} alt='five rating star' />
                            </div>
                            <small>Based on 1 Reviews</small>
                        </div>
                        <div className={Styles.About_content_flex_area_rating_box}>
                            <h6>Clutch</h6>
                            <div className={Styles.About_content_flex_area_rating_box_rate}>
                                <span>4.0</span>
                                <img src={FourRatingStar} alt='four rating star' />
                            </div>
                            <small>Based on 2 Reviews</small>
                        </div>
                    </div>
                </div>
                <GetProposal />
            </div>
        </div>
    </div>
  )
}

export default index