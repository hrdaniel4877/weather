import {FETCH_WEATHER} from '../actions/index';

export default function (state=[], action) {
	console.log('Action AFTER redux-promise Middleware processing is a Data Object:\n', action);
	switch (action.type) {
		case FETCH_WEATHER:
			return [action.payload.data, ...state];
	};	
	return state;
};
