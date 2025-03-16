import $http from '../http.js';
export default {
	get_square: function(data) {
		return $http.get('api/get/get_square',data)
	},
	get_dating: function(data) {
		return $http.get('api/get/get_dating',data)
	},
	likeSquare: function(data) {
		return $http.get('api/get/likeSquare',data)
	},
}