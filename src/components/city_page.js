import React from 'react';
import axios from 'axios';
import apiKeys from './api_keys';
import zipcodeConversions from './zipcodeConversions';
import uvScale from '../assets/images/uviscale.gif'

export default class cityPage extends React.Component {
    state = {
        UVData: '',
    }
    componentDidMount() {
        const { zipcode } = this.props.match.params;
        const latLon = this.getLatAndLong(zipcode);
        this.getUVData(latLon[0], latLon[1]);
    }
    getLatAndLong(zipcode) {
        const latLon = zipcodeConversions[zipcode]
        return latLon;
    }
    async getUVData(lat, lon) {
        const appid = apiKeys.openWeather;
        // const lat = 33.6846;
        // const lon = 117.8265;
        const URL = `http://api.openweathermap.org/data/2.5/uvi?appid=${appid}&lat=${lat}&lon=${lon}`;
        const resp = await axios.get(URL);
        console.log('UV Resp', resp)
        this.setState({
            UVData: resp.data.value,
        })
    }
    render() {
        const { UVData } = this.state;
        console.log('City Page Props', this.props)
        return (
            <div className="center container">
                <h1>City Page</h1>
                <h4>UV Index: {UVData}</h4>
                <img src={uvScale} alt="" />
                <div>
                    <p><b>0-2: Low</b></p>
                    <p>A UV Index reading two or lower means there is a minimal risk of sunburn for the average person. At this level it is suggested to wear sunglasses, use broad spectrum sunscreen and watch out for bright surfaces like sand, water and snow which reflect UV rays, increasing your exposure. The time to burn can vary by skin type, but at a low UV level it is approximately 60 minutes.</p>

                    <p><b>3-5: Moderate</b></p>
                    <p>A UV Index reading between 3 and 5 means there is a moderate risk of sunburn for the average person. At this level it is suggested to seek shade between 10AM and 4PM when the sun’s rays are its strongest. Wearing protective clothing, including a hat and sunglasses, is a great way to limit exposure. Sunscreen should be applied every two hours, even on cloudy days, and reapplied after swimming or sweating. The time to burn can vary by skin type, but at a moderate UV level it is approximately 30 to 45 minutes.</p>

                    <p><b>6-7: High</b></p>
                    <p>A UV Index reading 6 or 7 puts you at a high risk of harm from unprotected sun exposure. Following the steps from the moderate level is suggested. The time to burn can vary by skin type, but at a high UV level it is approximately 15 to 25 minutes.</p>

                    <p><b>8-10: Very High</b></p>
                    <p>A UV Index reading 8 to 10 puts you at a very high risk of harm from unprotected sun exposure. Take extra precautions for both your skin and eyes because damage occurs quickly, typically within 15 minutes. Try to minimize your sun exposure during peak sun times, but if not possible then diligently apply and re-apply sunscreen and SPF lip balm.</p>

                    <p><b>11 or more: Extreme</b></p>
                    <p>A UV Index reading 11 or higher puts you in a very dangerous spot for sunburn with damage occurring in less than 10 minutes if unprotected. At this level it is best to avoid all sun exposure between 10AM and 4PM.</p>

                    <p>Find more information <a href="https://forefrontdermatology.com/uv-index-sun-safety-scale/">here.</a></p>
                </div>
            </div>
        )
    }
}
