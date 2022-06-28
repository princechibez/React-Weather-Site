import React from "react";
import classes from './listschildren.module.css';

import Aux from "../../Utility/HOC/auxilliary";


const listschildren = (props) => (
    <Aux>
        <section className={classes.parent}>
        <div className={classes.flex_display}>
            <div className={classes.col_left}>
                <h1>{props.tempValue}<sup>o</sup></h1>
                <h3>{props.city}</h3>
                <h4>{props.state}</h4>
            </div>
            <div className={classes.col_right}>
                <i class="fa-solid fa-meteor"></i>
            </div>
        </div>
        <div className={classes.row_display}>
            <div className={classes.row_data}>
                <i class="fa-solid fa-temperature-low"></i>
                <h4>{props.percentage}%</h4>
            </div>
            <div className={classes.row_data}>
                <i class="fa-solid fa-temperature-low"></i>
                <h4>{props.speed}km/h</h4>
            </div>
        </div>
    </section>
    </Aux>
);

export default listschildren;