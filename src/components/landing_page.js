import React from 'react';
import zipcodeConversions from './zipcodeConversions';
export default class landingPage extends React.Component {
    state = {
        zipcode: '',
    }
    handleChange = (event) => {
        this.setState({
            zipcode: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const { zipcode } = this.state;
        if (!/^(\d{5})$/.test(zipcode) && this.checkSubmit()) {
            console.log('FAILS CHECK')
            return;
        }

        //doublecheck that zipcode is okay
        //5 numbers  /d{5}
        //check in list of JS
        //or else ERROR
        this.props.history.push(`/${this.state.zipcode}`)
    }
    checkSubmit() {
        const { zipcode } = this.state;
        //check that zipcode is in system;
        for (let key in zipcodeConversions) {
            // console.log(zipcode, key)
            if (zipcode === key) {
                return true;
            }
        }
        return false;
    }
    render() {
        // console.log('Landing Page Props', this.props)
        return (
            <div className="center container">
                <div className="row">
                    <h1>Sunny D3</h1>
                </div>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s12 m6 offset-m3">
                                {/* <label className="active" htmlFor="zipcode">KILL ME</label> */}
                                <input
                                    placeholder="Enter zipcode here"
                                    id="zipcode"
                                    type="text"
                                    className="validate"
                                    value={this.state.zipcode}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light">KILL ME</button>
                    </form>
                </div>
            </div>
        )
    }
}
