import React from 'react' 
import PaymentSlider from './PaymentSlider'
import '../style/PaymentOptions.css'

class PricingOptions extends React.Component {
    render() {
        return(
            <div className='pricing-holder'>
                <h1 className='price-setup-text'>Set up your pricing</h1>
                <p className='price-setup-description'>Please set up your hourly or fixed rate so that the client is aware of your pricing</p>
                <div className='btn-holder'>
                    <button className='hourly-btn'>Hourly</button><button className='fixed-btn'>Fixed</button>
                </div>
                <div className='slider'>
                    <PaymentSlider />
                </div>
            </div>
        )
    }
}

export default PricingOptions