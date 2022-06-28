import React from 'react';
import classes from './headerpart.module.css';
import Aux from '../../Utility/HOC/auxilliary';
import bannerImg from '../../Assets/Images/cloud.svg';

const firstSection = (props) => (
    <Aux>
        <section className={classes.body}>
            <div className={classes.section_wrapper}>
                <div className={classes.col_left}>
                    <h2>Nigeria</h2>
                    <h1>18<sup>o</sup></h1>
                    <div className={classes.btn_house}>
                        <button><i class="fa-solid fa-cloud"></i>Cloudy</button>
                        <button><i class="fa-solid fa-sun"></i>Sunny</button>
                        <button><i class="fa-solid fa-bolt"></i>Bolt</button>
                    </div>
                </div>

                <div className={classes.col_right}>
                    <img src={bannerImg} alt='Back-image' />
                </div>

            </div>
            
            <div className={classes.row_detail}>
                    <div className={classes.row_data}>
                        <i class="fa-solid fa-temperature-low"></i>
                        <h4>13%</h4>
                    </div>
                    <div className={classes.row_data}>
                        <i class="fa-solid fa-sun"></i>
                        <h4>0.533mBaR</h4>
                    </div>
                    <div className={classes.row_data}>
                        <i class="fa-solid fa-meteor"></i>
                        <h4>9km/h</h4>
                    </div>
            </div>
            <div>
                    <i class="fa-solid fa-meteor"></i>
                    <h4>9km/h</h4>
            </div>
        </section>
    </Aux>
);

export default firstSection;