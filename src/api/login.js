import $http from '../http.js';
export default {
	login: function(data) {
		return $http.get('/api/get/login',data)
	},
	register: function(data) {
		return $http.get('/api/get/register',data)
	}
}