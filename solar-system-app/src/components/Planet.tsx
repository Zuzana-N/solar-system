import React from "react";

const Planet = (props: any) => {
    return(
        <div className="planet-div rotation" id={props.id_div}>
            <img src={props.img} alt={props.name} width={props.width}  height={props.height} className="planet-img rotation" id={props.id_img}/>
        </div>

    )
}

export default Planet