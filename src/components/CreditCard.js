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
                    <div className='test-holder'>
                        <h1 className='payment-type'>{this.props.type}</h1>
                        <p className='cc-number'>{this.props.cardNumber}</p>
                    </div>
                    <input className='cvc-input' placeholder='CVC'/>
                </div>
            </div>
        )
    }
}

export default  (CreditCard)