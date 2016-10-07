{
	"basedir": "./src",
	"global": {
		"lang": "en",
		"alternate_lang": "ru",

		"home_path": "https://socialcolander.net/",
		"lang_path": "https://socialcolander.net/",
		"alternate_lang_path": "https://socialcolander.net/ru/",

		name: "Social Colander",
		description: "A service that will filter your social feed from the water. Get only the best posts from Twitter in the mail at a convenient time.",
		twitter_sign_in: "Sign in with Twitter",
		home: {
			intro: "Recently, I noticed that too often I go to the twitter over time, the number of people, for which I should be increased and the reading of the news took too much time To optimize this process, stay up to date..and do not miss the fun, it was decided to filter the contents of the tapes.But it is not very well do that, let me suffer machines.and there was “Social colander”.",
			features: {
				title: "Benefits",
				list: [{
					title: "The best news feed",
					description: "You read only what is interesting and important for you, not for the media."
				}, {
					title: "Save time",
					description: "Read the letter with a sampling of the best tweets, rather than the entire tape."
				}, {
					title: "Do not miss the steep tweets",
					description: "Leafing through the tape may accidentally skip an interesting tweet with our letters this will not happen.."
				}, {
					title: "You can influence the service",
					description: "Service is just beginning to develop and grow, if you have ideas or suggestions - we will be happy to hear from you."
				}]
			},
			reviews: {
				title: 'Reviews',
				text: 'It would be great if you could share your thoughts and ideas about the service contact. This can be done by writing to us at the general mail <a href="mailto:info@socialcolander.net"> info@socialcolander.net </a> or Twitter <a href="//twitter.com/social_colander"> @socialcolander </a>. ',
				author: 'Yury Matuhin',
				author_text: 'There will be reviews of the social colander, but so far they are not. Maybe you leave the first review?',
				author_who: 'the author of the idea'
			},
			tags: '#twitter #filtration'
		},
		settings: {
			title: 'Step 2: Enter the e-mail and time',
			description: 'Social colander — Registration — Step 2',
			success: 'You <b>successfully</b> entered via twitter.',
			ready: 'To start receiving letters - enter your email address and choose a convenient time to receive.',
			submit: 'Send confirmation',
			placeholder_email: 'E-mail',
			messages: {
				redirect: 'You must log in to access the settings',
			},
			times: [
				{value: "08", text: 'From early in the morning (8:00)'},
				{value: "10", text: 'In the morning (10:00)'},
				{value: "14", text: 'In the afternoon (14:00)'},
				{value: "18", text: 'In the evening (18:00)'},
				{value: "20", text: 'In the evening (20:00)'},
				{value: "22", text: 'Towards the Night (22:00)'},
				{value: "24", text: 'During the night (24:00)'}
			],
			time_zones: [
				{value: '-12.0', title: '(GMT -12:00) Eniwetok, Kwajalein' },
				{value: '-11.0', title: '(GMT -11:00) Midway Island, Samoa' },
				{value: '-10.0', title: '(GMT -10:00) Hawaii' },
				{value: '-9.0', title: '(GMT -9:00) Alaska' },
				{value: '-8.0', title: '(GMT -8:00) Pacific Time (US &amp; Canada)' },
				{value: '-7.0', title: '(GMT -7:00) Mountain Time (US &amp; Canada)' },
				{value: '-6.0', title: '(GMT -6:00) Central Time (US &amp; Canada), Mexico City' },
				{value: '-5.0', title: '(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima' },
				{value: '-4.0', title: '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz' },
				{value: '-3.5', title: '(GMT -3:30) Newfoundland' },
				{value: '-3.0', title: '(GMT -3:00) Brazil, Buenos Aires, Georgetown' },
				{value: '-2.0', title: '(GMT -2:00) Mid-Atlantic' },
				{value: '-1.0', title: '(GMT -1:00 hour) Azores, Cape Verde Islands' },
				{value: '0.0', title: '(GMT) Western Europe Time, London, Lisbon, Casablanca' },
				{value: '1.0', title: '(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris' },
				{value: '2.0', title: '(GMT +2:00) Kaliningrad, South Africa' },
				{value: '3.0', title: '(GMT +3:00) Moscow, St. Petersburg, Baghdad, Riyadh' },
				{value: '3.5', title: '(GMT +3:30) Tehran' },
				{value: '4.0', title: '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi' },
				{value: '4.5', title: '(GMT +4:30) Kabul' },
				{value: '5.0', title: '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent' },
				{value: '5.5', title: '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi' },
				{value: '5.75', title: '(GMT +5:45) Kathmandu' },
				{value: '6.0', title: '(GMT +6:00) Almaty, Dhaka, Colombo' },
				{value: '7.0', title: '(GMT +7:00) Bangkok, Hanoi, Jakarta' },
				{value: '8.0', title: '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong' },
				{value: '9.0', title: '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk' },
				{value: '9.5', title: '(GMT +9:30) Adelaide, Darwin' },
				{value: '10.0', title: '(GMT +10:00) Eastern Australia, Guam, Vladivostok' },
				{value: '11.0', title: '(GMT +11:00) Magadan, Solomon Islands, New Caledonia' },
				{value: '12.0', title: '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka' }
			]
		},
		messages: {
			confirm: {
				title: 'Step 3: Confirm email',
				description: '',
				message: 'We have sent you an email to confirm your subscription. <br> Open it and click on the “Confirm” button, you will receive a letter with the best tweets from your tape. <br> Thanks ♥',
			},
			success: {
				title: 'Email is confirmed',
				description: '',
				message: 'All is well. <br> We will prepare a letter with the best tweets at the time you specify. '
			},
			unsubscribe: {
				title: 'You have successfully unsubscribed',
				description: '',
				message: 'Thank you enjoyed colander, if you do not like something - please contact us <a href="mailto:help@socialcollander.net?subject=Otpisyvayus because chto..."> help@socialcollander.net </a><br> We have carefully read all the letters and listen to your advice.'
			}
		},
		activate: {
			title: 'We confirm the user…',
			success: 'you have confirmed your email.',
			error: 'Something went wrong, and your mail has not been confirmed. Try reloading the page. If this does not help, please contact us at <a href="mailto:info@socialcolander.net"> info@socialcolander.net </a>',
			messages: {
				redirect: '',
			},
		}
	}
}
