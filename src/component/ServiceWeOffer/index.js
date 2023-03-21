import React from 'react';
import Styles from './ServiceWeOffer.module.scss';
import LeftTabs from '../TabHomeService';

const index = () => {
  return (
    <div className={`${Styles.ServiceWeOffer}`}>
        <div className='container'>
            <h1 className='head-line'>Services We Offer</h1>
            <div className={Styles.tabbox}>
                <LeftTabs />
            </div>
        </div>
    </div>
  )
}

export default index