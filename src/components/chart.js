import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
	return (
		<div>
			<Sparklines data={props.data} svgWidth={180} svgHeight={120}>
				<SparklinesLine color={props.color}/>
				<SparklinesReferenceLine type="avg"/>
			</Sparklines>
			<div>avg: {average(props.data)} {props.units}</div>
		</div>
	);
}

function average(data) {
	console.log(data);
	return _.round(_.mean(data));
}