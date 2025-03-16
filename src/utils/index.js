export default {
	getDate: (type) => {
		const date = new Date();
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');
		if (type == 'vote') {
			return `${year}${month}${day}`;
		} else {
			return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
		}
	},
	// 计算倒计时的函数
	calculateCountdown: () => {
		// 定义时分秒的响应式变量
		let hours = ''
		let minutes = ''
		let seconds = ''
		//获取当前时间
		const now = new Date();
		// 获取次日日期
		const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
		// 计算时间差（毫秒）
		const timeDifference = tomorrow.getTime() - now.getTime();

		if (timeDifference > 0) {
			// 计算剩余的小时、分钟和秒
			const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
			const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
			const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

			// 更新时分秒的显示
			hours = String(remainingHours).padStart(2, '0');
			minutes = String(remainingMinutes).padStart(2, '0');
			seconds = String(remainingSeconds).padStart(2, '0');
			return hours + ':' + minutes + ':' + seconds
		} else {
			// 倒计时结束
			hours = '00';
			minutes = '00';
			seconds = '00';
			return hours + ':' + minutes + ':' + seconds
		}
	}
}
