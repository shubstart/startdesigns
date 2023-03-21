import React from 'react';
import Styles from './TurstedSoftware.module.scss';
import GetProposal from '../GetProposal';

const index = () => {
  return (
    <div className={Styles.TurstedSoftware}>
        <div className={Styles.TurstedSoftware_innerone}>
            <h1 className='head-line'>Trusted Software <br></br>Development Company</h1>
            <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
            <div className={Styles.TurstedSoftware_innerone_flexbox}>
                <div className={Styles.TurstedSoftware_innerone_flexbox_inner}>
                    <h1>700+ clients</h1>
                    <p>Happy Clients</p>
                </div>
                <div className={Styles.TurstedSoftware_innerone_flexbox_inner}>
                    <h1>1800+ Delivered</h1>
                    <p>Client roster</p>
                </div>
                <div className={Styles.TurstedSoftware_innerone_flexbox_inner}>
                    <h1>25+ Twenty-five</h1>
                    <p>Team Members</p>
                </div>
                <div className={Styles.TurstedSoftware_innerone_flexbox_inner}>
                    <h1>5.0</h1>
                    <p>Overall client ratings</p>
                </div>
            </div>
        </div>
        <div className={Styles.TurstedSoftware_innertwo}>
            <GetProposal padd={true} />
        </div>
    </div>
  )
}

export default index