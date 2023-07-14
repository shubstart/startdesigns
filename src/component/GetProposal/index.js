import React from 'react';
import Styles from './GetProposal.module.scss';
import Button from '../common/Button';

const index = ({padd}) => {
  return (
    <div className={!padd ?`${Styles.padTop_120} ${Styles.GetProposal}`:Styles.GetProposal}>
        <h1>Get your free proposal today:</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className={Styles.GetProposal_form}>
            <input type='text' placeholder='Enter Your Website' />
            <Button />  
        </div>
    </div>
  )
}

export default index