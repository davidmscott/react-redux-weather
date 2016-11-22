import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from '../components/google-map.js';

class WeatherList extends Component {
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPA)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(data => data.main.temp);
		const pressures = cityData.list.map(data => data.main.pressure);
		const humidities = cityData.list.map(data => data.main.humidity);
		const {lat, lon} = cityData.city.coord;
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="blue" units="K" /></td>
				<td><Chart data={pressures} color="blue" units="hPa" /></td>
				<td><Chart data={humidities} color="blue" units="%" /></td>
			</tr>
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);