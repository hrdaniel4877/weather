export default function (state=null, action) {
	console.log('Action AFTER redux-promise Middleware processing is a Data Object:\n', action);
	return state;
};
