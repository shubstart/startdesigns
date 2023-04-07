import React from 'react';
import Styles from './ServiceWeOffer.module.scss';
import TabHomeService from '../TabHomeService';

const Index = () => {
  return (
    <div className={`${Styles.ServiceWeOffer}`}>
        <div className='container'>
            <h1 className='head-line'>Services We Offer</h1>
            <div className={Styles.tabbox}>
                <TabHomeService />
            </div>
        </div>
    </div>
  )
}

export default Index;
