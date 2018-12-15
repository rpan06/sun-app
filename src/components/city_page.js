import React from 'react';
import axios from 'axios';
import apiKeys from './api_keys'

export default class cityPage extends React.Component {
    state = {
        UVData: '',
    }
    componentDidMount() {
        this.getUVData();
    }
    async getUVData() {
        const appid = apiKeys.openWeather;
        const lat = 33.6846;
        const lon = 117.8265;
        const URL = `http://api.openweathermap.org/data/2.5/uvi?appid=${appid}&lat=${lat}&lon=${lon}`;
        const resp = await axios.get(URL);
        this.setState({
            UVData: resp,
        })
    }
    render() {
        const { UVData } = this.state;
        console.log('UVData', UVData)
        return (
            <div className="container">
                <h1>KILL ME</h1>
                <p>{UVData}</p>
            </div>
        )
    }
}
