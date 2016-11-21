import React, {Component} from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a 5-day forecast for your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">Submit</button>
				</span>
			</form>
		)
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

		// code for fetching weather data
		// clear contents of search input
	}
}