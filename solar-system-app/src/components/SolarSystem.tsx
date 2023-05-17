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
            {/* <h2>Solar System</h2> */}
            <div id='planets'>
                {dataElements}
            </div>
            <button id='rotate-btn' onClick={changeRotation}>{rotation ? "Stop" : "Start"}</button>
        </section>
    )
}
export default SolarSystem