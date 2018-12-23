import React from 'react';
import zipcodeConversions from './zipcodeConversions';
export default class landingPage extends React.Component {
    state = {
        zipcode: '',
        error: '',
    }
    handleChange = (event) => {
        this.setState({
            zipcode: event.target.value,
            error: '',
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { zipcode } = this.state;

        //pass 2 checks to continue, else zipcode error
        if (/^(\d{5})$/.test(zipcode)) {
            if (this.checkSubmit(zipcode)) {
                this.props.history.push(`/${this.state.zipcode}`)
            }
        }

        this.setState({
            error: 'Please enter a valid zipcode u dumbass.'
        })
        document.getElementById("zipcode").focus();
    }
    checkSubmit(zipcode) {
        //check that zipcode is in zipcodeConversions file;
        for (let key in zipcodeConversions) {
            if (zipcode === key) {
                return true;
            }
        }
        return false;
    }
    render() {
        const { error } = this.state;
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
                        <p className="red-text text-accent-4">{error}</p>
                        <button className="btn waves-effect waves-light">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}
