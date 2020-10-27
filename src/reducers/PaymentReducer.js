import MasterCard from '../imgs/mastercard.png'
import V from '../imgs/v.png'

const initState = {
    paymentTypes: [
        {id: 1, photo: MasterCard, cardNumber: '2344 xxxx xxxx 8880', type: 'Credit Card'},
        {id: 2, photo: V, cardNumber: '8890 xxxx xxxx 1234', type: 'Credit Card'}
    ]
}

const PaymentReducer = (state = initState, action) => {
    return state
}

export default PaymentReducer