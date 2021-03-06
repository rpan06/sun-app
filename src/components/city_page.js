import React from 'react';
import axios from 'axios';
import apiKeys from './api_keys';
import zipcodeConversions from './zipcodeConversions';

export default class cityPage extends React.Component {
    state = {
        UVData: '',
    }
    componentDidMount() {
        const { zipcode } = this.props.match.params;
        this.getLatAndLong(zipcode);
        this.getUVData();
    }
    getLatAndLong(zipcode) {
        const latLon = zipcodeConversions[zipcode]
        console.log('latLon', latLon)
        //api call? database call?
        //get info
    }
    async getUVData() {
        const appid = apiKeys.openWeather;
        const lat = 33.6846;
        const lon = 117.8265;
        const URL = `http://api.openweathermap.org/data/2.5/uvi?appid=${appid}&lat=${lat}&lon=${lon}`;
        const resp = await axios.get(URL);
        // console.log('UV Resp', resp)
        this.setState({
            UVData: resp.data.value,
        })
    }
    render() {
        const { UVData } = this.state;
        console.log('City Page Props', this.props)
        return (
            <div className="container">
                <h1>City Page</h1>
                <h1>{UVData}</h1>
            </div>
        )
    }
}
