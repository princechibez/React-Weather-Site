import React, { Component } from "react";
import Aux from "../../Utility/HOC/auxilliary";

import classes from './otherlist.module.css';
import Listschildren from "../../Components/listschildren/listschildren";
import { Link } from "react-router-dom";


class OtherList extends Component {
    state = {
        listChildrenDetail: [
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Abuja",
                state: "FCT", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            },
            {
                tempValue: "20",
                city: "Awka",
                state: "Anambra", 
                percentage: "30", 
                speed: "22"
            }
        ]
    }

    render () {
        return (
            <Aux>
                <section className={classes.body}>
                    <div className={classes.input_Section}>
                        <form>
                            <div>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="text" name="search" placeholder="Click on any of the box or Search for any Info!!" />
                            <i class="fa-solid fa-circle-info"></i>
                            </div>
                        </form>
                    </div>
        
                    <section className={classes.flexer}>
                    {this.state.listChildrenDetail.map((child, i) => {
                        return (
                            <Link key={i} to={`/detailed/${i}`} className={classes.link}>
                                <Listschildren 
                                    tempValue={child.tempValue}
                                    city={child.city}
                                    state={child.state}
                                    percentage={child.percentage}
                                    speed={child.speed} />
                            </Link>
                        );
    })}
                </section>
        
                </section>
        
            </Aux>
        );
    }
}

export default OtherList;