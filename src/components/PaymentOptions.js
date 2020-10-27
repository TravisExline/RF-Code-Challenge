import React from 'react'
import CreditCard from './CreditCard'
import MasterCard from '../imgs/mastercard.png'
import V from '../imgs/v.png'
import '../style/PaymentOptions.css'

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
                <h1>Upgrade Your Plan</h1>
                <p>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>
                <div>Business Plan Section</div>
                <h2>Payment Details</h2>
                {this.state.paymentTypes.map((paymentType) => (
                    <CreditCard id={paymentType.id} photo={paymentType.photo} cardNumber={paymentType.cardNumber} type={paymentType.type}/>
                ))}
                <a href='localhost:3000'>Add Payment Info</a>
                <input/>
                <button>Proceed To Payment</button>
            </div>
        )
    }
}

export default PaymentOptions