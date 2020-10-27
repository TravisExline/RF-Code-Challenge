import React from 'react'
import '../style/PaymentSlider.css'

class PaymentSlider extends React.Component {
    constructor () {
        super()
        this.state = {
            value: 180
        }
        this.handleChange = this.handleChange.bind(this)
    } 

      handleChange(event){
        this.setState({
          value: event.target.value
        })
      };

    render() {
        return(
            <div className='slider-holder'>
                <div className='slider-value'><p id='dollars'>$</p>{this.state.value}</div>
                <label className='slider'>
                    <input
                        id="typeinp"
                        type='range'
                        min='20'
                        max='300'
                        value={this.state.value}
                        onChange={this.handleChange}
                        step='1' />
                </label>
                <div>
                    <p className='min'>$20</p>
                    <p className='max'>$300</p>
                </div>
            </div>
        )
    }
}

export default PaymentSlider