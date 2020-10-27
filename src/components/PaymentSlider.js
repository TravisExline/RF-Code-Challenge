import React from 'react'
import Slider from 'react-rangeslider'

class PaymentSlider extends React.Component {
    constructor () {
        super()
        this.state = {
            value: 0
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
                <div className='slider-amount'>{this.state.value}</div>
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
            </div>
        )
    }
}

export default PaymentSlider