import React, {useState} from 'react';
import data from '../data';
import Planet from '../components/Planet';

const SolarSystem = () => {
  const dataElements = data.map(item => <Planet key={item.name} id-div={item.id_div} id-img={item.id_img} {...item}/>)
    
    return (
        <section className='solar-system'>
            <h2>Solar System</h2>
            <div id='planets'>
                {dataElements}
            </div>
        </section>
    )
}
export default SolarSystem