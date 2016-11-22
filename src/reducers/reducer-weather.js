import {FETCH_WEATHER} from '../actions/index.js';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			return [action.payload.data, ...state]; // doesn't mutate our state, returning new version of state
		// default:
		// 	// code...
		// 	break;
	};
	return state;
}