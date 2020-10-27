import React from 'react' 
// import {connect} from 'react-redux'
import CreditCardStyle from '../style/CreditCard.css'

class CreditCard extends React.Component {
    render() {
        return(
            <div className='credit-card-holder'>
                <img src={this.props.photo} />
                <h1>{this.props.type}</h1>
                <p>{this.props.cardNumber}</p>
            </div>
        )
    }
}

export default  (CreditCard)