import React from 'react' 
import PaymentSlider from './PaymentSlider'

class PricingOptions extends React.Component {
    render() {
        return(
            <div className='pricing-holder'>
                <h1>Set up your pricing</h1>
                <p>Please set up your hourly or fixed rate so that the client is aware of your pricing</p>
                <button>Hourly</button><button>Fixed</button>
                <div className='slider'>
                    <PaymentSlider />
                </div>
            </div>
        )
    }
}

export default PricingOptions