import React from 'react'
import Boat from '../imgs/boat.png'
import '../style/BusinessPlan.css'

class BusinessPlan extends React.Component {
    render() {
        return(
            <div className='plan-holder'>
                <img src={Boat} className='boat'/>
                <h2 className='plan-type'>Small Business</h2> 
                <div className='price-holder'>
                <h1 className='price'>
                    <h1 className='money'>$</h1>
                    8,530</h1>
                </div>
                <div className='change-btn-holder'>
                    <button className='change-btn'>CHANGE PLAN</button>
                </div> 
            </div>
        )
    }
}

export default BusinessPlan