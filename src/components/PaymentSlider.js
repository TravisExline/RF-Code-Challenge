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
            <div className='slider'>
                <label>
                    <input
                        id="typeinp"
                        type='range'
                        min='20'
                        max='300'
                        value={this.state.value}
                        onChange={this.handleChange}
                        step='1' />
                    {this.state.value}
                </label>
            </div>
        )
    }
}

export default PaymentSlider