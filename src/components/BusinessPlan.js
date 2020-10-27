import React from 'react'
import Boat from '../imgs/boat.png'
import '../style/BusinessPlan.css'

class BusinessPlan extends React.Component {
    render() {
        return(
            <div className='plan-holder'>
                <img src={Boat} className='boat'/>
                <h2 className='plan-type'>Small Business</h2>
                <button className='change-btn'>CHANGE PLAN</button>  
                <h1 className='price'>$8,530</h1>             
            </div>
        )
    }
}

export default BusinessPlan