import React, {useState} from 'react';
import data from '../data';
import Planet from '../components/Planet';

const SolarSystem = () => {
    const [rotation, setRotation] = useState(true)
    const dataElements = data.map(item => <Planet key={item.name} class_div = {rotation ? "planet-div rotation" : "planet-div"} id-div={item.id_div} id-img={item.id_img} {...item}/>)
    
    const changeRotation = () => {
        setRotation(prev => !prev)
    }
    return (
        <section className='solar-system'>
            <h2>First, check out the planets and learn about our solar system!</h2>
            <p><span>Click the sun to stop the rotation and return the planets into default position. Click again to restart the rotation.</span></p>
            <div id='planets'>
            <div id="sun-div" >
                <img src="./images/sun_img.jpg" alt="Sun" id="sun-img" width="100rem" height="100rem" onClick={changeRotation}/>
            </div>
            {dataElements}
            <div className="background"></div>
            </div>
            {/* <button id='rotate-btn' onClick={changeRotation}>{rotation ? "STOP (return to default position)" : "Start the rotation"}</button> */}
        </section>
    )
}
export default SolarSystem