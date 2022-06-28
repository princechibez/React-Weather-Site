import React from "react";
import { useParams } from "react-router-dom";

 const Detailed = (props) => {
     let listChildrenDetail = [
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
         let params = useParams();

        const style = {
            textAlign: "center",
            color: "white"
        }

        let choosed = listChildrenDetail.find((item, i) => Number(params.id) === i);

        return (
            <div style={style}>
                <h1>Hurray!! <br /> You made a CLICK on box {choosed.state}</h1>
            </div>
        )
 }
    

export default Detailed;