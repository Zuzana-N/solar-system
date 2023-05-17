import React from "react";

const Planet = (props: any) => {
    return (
        <div id={props.id_div} className={props.class_div}>
            <img src={props.img} alt={props.name} width={props.width}  height={props.height} className="planet-img" id={props.id_img}/>
        </div>
    )
}

export default Planet