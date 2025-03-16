export default {
	login: {
		title: 'Dating Party',
		type: 'Registration',
		languageDialog: {
			title: 'Please select the language you are proficient in.'
		},
		buttons: ['Language', 'Login', 'Register'],
		inputs: ['Please enter your number.', 'Please enter your password.', 'Please enter the invitation code.'],
		gender: ['Male', 'Female'],
		message: ['Username or password cannot be empty.', 'Please enter the invitation code.',
			'The invitation code is incorrect.', 'Login successful.', 'Registration successful.',
			'You haven not registered yet', 'The password is incorrect.', 'Login failed.',
			'This account has already been registered.',
			'The username or password cannot be less than 6 characters.'
		]
	},
	mine: {
		vipStatus: ['In production...', 'Not activated', 'Activating', 'Activated', 'Pending generation'],
		account: 'Account points',
		buttons: ['Click to Apply', 'Withdraw Cash', 'Recharge', 'Change Password', 'Safety in Making Friends', 'Terms of Use', 'Privacy Policy', 'Log Out'],
		dialog: {
			input: 'Enter your name.',
			buttons: ['Cancel', 'Confirm']
		},
		message:['Please enter the password', 'Please enter the new password', 'The password cannot be less than six digits.', 'The two new password entries do not match.', 'The modification was successful.', 'The password is incorrect.'],
		model: {
			titles: ['Points', 'Remaining points', 'Withdrawal records', 'Old Password', 'New Password', 'Confirm Password'],
			buttons: ['Cancel', 'Confirm'],
			message: ['Please enter points.', {
					title: 'System prompt',
					content: 'You have already submitted an application.',
					okText: 'I see.'
				}, 'Submission successful.', 'Please upload your avatar.', 'Please enter your name.',
				'Only JPG/PNG format images can be uploaded!', 'The image size cannot exceed 2MB!',
				'Avatar upload failed. Please try again later!'
			]
		},
		txts: ['Data error']
	},
	gift: {
		title: 'Lottery voting',
		buttons: ['Submit'],
		txts: ['Voting results', 'Current selection', 'Points per order'],
		gift: ['Rose', 'Lily', 'Fireworks', 'Balloon'],
		message: ['Please select 2 gifts.', 'Please fill in the points.'],
		dialog: {
			buttons: ['Clear the order', 'Confirm submission']
		},
		model: {
			title: 'System error',
			content: 'Data error',
			okText: 'I see.'
		}
	},
	main: {
		dating: {
			txts: ['Withdrawal successful.', 'Top-up successful.']
		},
		square: {
			buttons: ['Like', 'Comment', 'Share']
		},
	},
	PL: {
		height: 'Height',
		weight: 'Weight',
		xw: 'Chest Circumference',
		job: 'Occupation',
		city: 'City',
		button:'I want to make an appointment',
		tabs:["Men's Section','Women's Section"],
		party:['Pool Party', 'Yacht Party', 'Villa Party', 'Private Party']
	},


	tabbar: {
		buttons: ['Homepage', 'Private appointment', 'Voting', 'My page']
	},
	message: {
		title: "The membership has not been activated. ",
		msg: 'Please contact the customer service for activation.'
	}
}