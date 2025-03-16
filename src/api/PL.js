import $http from '../http.js';
export default {
	set_user: function(data) {
		return $http.get('api/get/set_user',data)
	},
	get_PL: function(data) {
		return $http.get('api/get/convension',data)
	},
}