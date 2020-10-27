import React from 'react'
import CreditCard from './CreditCard'

class PaymentOptions extends React.Component {
    render() {
        return(
            <div>
                <h1>Upgrade Your Plan</h1>
                <p>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>
                <div>Business Plan Section</div>
                <h2>Payment Details</h2>
                <CreditCard />
                <a href='localhost:3000'>Add Payment Info</a>
                <input/>
                <button>Proceed To Payment</button>
            </div>
        )
    }
}

export default PaymentOptions