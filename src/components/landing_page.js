import React from 'react';

export default class landingPage extends React.Component {
    render() {
        return (
            <div className="center container">
                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s12">
                            <label className="active" htmlFor="first_name">KILL ME</label>
                            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                        </div>
                        <button className="btn waves-effect waves-light">KILL ME</button>
                    </form>
                </div>
            </div>
        )
    }
}
