import $http from '../http.js';
export default {
	get_gift: function(data) {
		return $http.get('api/get/get_gift',data)
	},
}