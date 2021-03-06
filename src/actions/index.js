import axios from 'axios';

const API_KEY = '89f458205411e434f6dcfea3cd968c6c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
	const url = `${ROOT_URL}&q=${city},ca`;
	const request = axios.get(url);
	console.log('Action BEFORE redux-promise Middleware is a Promise (the weather API call returns a Promise): ', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
};
