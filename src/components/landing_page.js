import React from 'react';

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
        const {zipcode} = this.state;
        //doublecheck that zipcode is okay
        //5 numbers  /d{5}
        //check in list of JS
        //or else ERROR
        this.props.history.push(`/${this.state.zipcode}`)
    }
    render() {
        console.log('Landing Page Props', this.props)
        return (
            <div className="center container">
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="input-field col s12">
                            <label className="active" htmlFor="zipcode">KILL ME</label>
                            <input
                                placeholder="Placeholder"
                                id="zipcode"
                                type="text"
                                className="validate"
                                value={this.state.zipcode}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button className="btn waves-effect waves-light">KILL ME</button>
                    </form>
                </div>
            </div>
        )
    }
}
