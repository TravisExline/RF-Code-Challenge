import React from 'react'
import Profile from '../components/Profile'
import PaymentOptions from '../components/PaymentOptions'
import PricingOptions from '../components/PricingOptions'

class Landing extends React.Component {
    render() {
        return(
            <div className='landing-page'>
                <Profile />
                <PaymentOptions />
                <PricingOptions />
            </div>
        )
    }
}

export default Landing