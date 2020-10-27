import React from 'react' 
// import {connect} from 'react-redux'
import CreditCardStyle from '../style/CreditCard.css'

class CreditCard extends React.Component {
    render() {
        return(
            <div className='credit-card-holder'>
                <div className='photo-background'>
                    <img src={this.props.photo} className='payment-type-photo'/>
                </div>
                <div className='info-holder'>
                    <h1 className='payment-type'>{this.props.type}</h1>
                    <input className='cvc-input' placeholder='CVC'/>
                    <p className='cc-number'>{this.props.cardNumber}</p>
                </div>
            </div>
        )
    }
}

export default  (CreditCard)