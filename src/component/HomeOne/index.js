import React from 'react'
import Styles from './HomeOne.module.scss';
import OutlineButton from '../common/OutlineButton';

const index = () => {
  return (
    <div className={`${Styles.HomeOne_main} header-pt-92 pb-92`}>
        <div className={`${Styles.HomeOne_main_content} container`}>
            <h1>Award Winning <span>WEB DESIGN</span> Company</h1>
            <p>Complete Website Design | Web Development | Search Engine Optimization | UI/UX Design | Branding</p>
            <p className={Styles.para}>StartDesigns is based in India and provides web design and development services worldwide. We thrive digital representation of businesses through our intuitive, user-friendly, and modern website design and development services. With over 6+ years of experience and a professional approach, we deliver websites that meet your company's goals and make you 100% satisfied with our work.</p>
            <OutlineButton />
        </div>
    </div>
  )
}

export default index