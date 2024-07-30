import React from 'react'
import Freaturebox from './FeatureBox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Freaturebox image={fimage1} title="WeightLifting" />
            <Freaturebox image={fimage2} title="Specific Muscle" />
            <Freaturebox image={fimage3} title="Flex Your Muscle" />
            <Freaturebox image={fimage4} title="Cardio Exercise" />




        </div>

    </div>
  )
}

export default Feature