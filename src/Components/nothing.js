import React from "react";

const nothingPage = (props) => {
    const style = {
        textAlign: "center",
        fontSize: "60px",
        color: "white"
    }

    const iconStyle = {
        margin: "20px"
    }

    return (
        <div style={style}>
            <h1>
                <i style={iconStyle} class="fa-solid fa-face-grin-squint-tears"></i>
                <i style={iconStyle} class="fa-solid fa-face-grin-squint-tears"></i>
                <i style={iconStyle} class="fa-solid fa-face-grin-squint-tears"></i>
                <i style={iconStyle} class="fa-solid fa-face-grin-squint-tears"></i>
                <i style={iconStyle} class="fa-solid fa-face-grin-squint-tears"></i> <br />
                There is NOTHING here!!!
            </h1>
        </div>
    )
}

export default nothingPage;