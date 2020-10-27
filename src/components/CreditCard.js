import React from 'react' 
import { connect } from 'react-redux'
import CreditCardStyle from '../style/CreditCard.css'

class CreditCard extends React.Component {
    render() {
        return(
            <div className='credit-card-holder'>
                {/* {this.props.} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {paymentOptions: state.PaymentReducer}
}

export default connect(mapStateToProps) (CreditCard)