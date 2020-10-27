import React from 'react'
import CreditCard from './CreditCard'
import MasterCard from '../imgs/mastercard.png'
import V from '../imgs/v.png'
import '../style/PaymentOptions.css'
import arrow from '../imgs/arrow.png'
import BusinessPlan from '../components/BusinessPlan'

class PaymentOptions extends React.Component {
    constructor() {
        super()
        this.state = {
            paymentTypes: [
                {id: 1, photo: MasterCard, cardNumber: '2344 xxxx xxxx 8880', type: 'Credit Card'},
                {id: 2, photo: V, cardNumber: '8890 xxxx xxxx 1234', type: 'Credit Card'}
            ]
        }
    }

    render() {
        return(
            <div className='payment-holder'>
                <h1 className='upgrade-head'>Upgrade Your Plan</h1>
                <p className='detail-text'>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>
                <BusinessPlan />
                <h2 className='payment-details-head'>Payment Details</h2>
                {this.state.paymentTypes.map((paymentType) => (
                    <CreditCard id={paymentType.id} photo={paymentType.photo} cardNumber={paymentType.cardNumber} type={paymentType.type}/>
                ))}
                <button className='add-payment-btn'>ADD PAYMENT METHOD</button>
                <div className='input-div'>
                    <input className='email-input' placeholder='Email address'/>
                </div>
                <button className='proceed-btn'>Proceed to payment<img src={arrow} className='arrow'/></button>
            </div>
        )
    }
}

export default PaymentOptions