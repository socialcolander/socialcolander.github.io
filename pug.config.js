{
	basedir: "./src",
	global: {
		lang: "ru",
		home_path: "//socialcolander.net",

		name: "Социальный дуршлаг",
		description: "Сервис, который отфильтрует вашу социальную ленту от воды. Получайте только лучшие сообщения из Твитера на почту в удобное время.",
		twitter_sign_in: "Войти через Твитер",
		home: {
			tags: 'твитер, фильтрация, лучшие твиты для твитера, фильтр для твиттера'
		},
		settings: {
			step_title: 'Шаг 2',
			title: 'Укажите почту и время',
			description: 'Социальный дуршлаг — Регистрация — Шаг 2',
			success: 'Вы <b>успешно</b> вошли через твиттер.',
			ready: 'Чтобы начать получать письма — укажите свой email и выберите удобное время для получения.',
			submit: 'Отправить письмо с подтверждением',
			placeholder_email: 'Электронная почта',
			messages: {
				success: 'Мы сохранили ваши настройки, теперь вы будете получать письма на указанный адрес в выбранное время.',
				redirect: 'Вы должны войти, чтобы получить доступ к настройкам',
			},
			times: [
				{ value: "08", text: 'С утра пораньше (08:00)' },
				{ value: "10", text: 'Утром (10:00)' },
				{ value: "14", text: 'В обед (14:00)' },
				{ value: "18", text: 'Под вечер (18:00)' },
				{ value: "20", text: 'Вечером (20:00)' },
				{ value: "22", text: 'Ближе к ночи (22:00)' },
				{ value: "24", text: 'Ночью (24:00)' }
			],
			time_zones: [
				{value:'-12.0', title: '(GMT -12:00) Эниветок, Кваджалейн'},
				{value:'-11.0', title: '(GMT -11:00) Остров Мидуэй, Самоа'},
				{value:'-10.0', title: '(GMT -10:00) Гавайи'},
				{value:'-9.0', title: '(GMT -9:00) Аляска'},
				{value:'-8.0', title: '(GMT -8:00) Тихоокеанское время (США и Канада) </'},
				{value:'-7.0', title: '(GMT -7:00) Горное время (США и Канада) </'},
				{value:'-6.0', title: '(GMT -6:00) Центральное время (США и Канада), Мехико'},
				{value:'-5.0', title: '(GMT -5:00) Восточное время (США и Канада), Богота, Лима'},
				{value:'-4.0', title: '(GMT -4:00) Атлантическое время (Канада), Каракас, Ла-Пас'},
				{value:'-3.5', title: '(GMT -3:30) Ньюфаундленд'},
				{value:'-3.0', title: '(GMT -3:00) Бразилия, Буэнос-Айрес, Джорджтаун'},
				{value:'-2.0', title: '(GMT -2:00) Срединно-Атлантического'},
				{value:'-1.0', title: '(GMT -1:00 час) Азорские острова, острова Зеленого Мыса'},
				{value:'0.0', title: '(GMT) Время Западной Европе, Лондон, Лиссабон, Касабланка'},
				{value:'1.0', title: '(GMT +1:00 час) Брюссель, Копенгаген, Мадрид, Париж'},
				{value:'2.0', title: '(GMT +2:00) Киев, Калининград, Южная Африка'},
				{value:'3.0', title: '(GMT +3:00) Москва, Санкт-Петербург, Багдад, Эр-Рияд, '},
				{value:'3.5', title: '(GMT +3:30) Тегеран'},
				{value:'4.0', title: '(GMT +4:00) Абу-Даби, Мускат, Баку, Тбилиси'},
				{value:'4.5', title: '(GMT +4:30) Кабул'},
				{value:'5.0', title: '(GMT +5:00) Екатеринбург, Исламабад, Карачи, Ташкент'},
				{value:'5.5', title: '(GMT +5:30) Бомбей, Калькутта, Мадрас, Нью-Дели'},
				{value:'5.75', title: '(GMT +5:45) Катманду'},
				{value:'6.0', title: '(GMT +6:00) Алматы, Дакке, Коломбо'},
				{value:'7.0', title: '(GMT +7:00) Бангкок, Ханой, Джакарта'},
				{value:'8.0', title: '(GMT +8:00) Пекин, Перт, Сингапур, Гонконг'},
				{value:'9.0', title: '(GMT +9:00) Токио, Сеул, Осака, Саппоро, Якутск'},
				{value:'9.5', title: '(GMT +9:30) Аделаида, Дарвин'},
				{value:'10.0', title: '(GMT +10:00) Восточная Австралия, Гуам, Владивосток'},
				{value:'11.0', title: '(GMT +11:00) Магадан, Соломоновы острова, Новая Каледония'},
				{value:'12.0', title: '(GMT +12:00) Окленд, Веллингтон, Фиджи, Камчатка'}
			]
		},
		messages: {
			confirm: {
				step_title: 'Шаг 3',
				title: 'Подтвердите электронную почту',
				description: '',
				message: 'Мы отправили вам письмо для подтверждения подписки. <br>Откройте его и нажмите на кнопку «<b>Подтвердить почту</b>», если хотите получать письма с лучшими твитами из вашей ленты. <br>Спасибо ♥️',
			},
			success: {
				title: 'Электронная почта подтверждена',
				description: '',
				message: 'Все хорошо. <br>Мы подготовим письмо с лучшими твитами в указанное вами время.',
			}
		},
		activate: {
			title: 'Подтверждаем пользователя…',
			success: 'Вы подтвердили вашу почту.',
			error: 'Что-то пошло не так и ваша почта не подтвердилась. Попробуйте перезагрузить страницу. Если это не поможет, напишите нам на <a href="mailto:info@socialcolander.net"> info@socialcolander.net</a>',
			messages: {
				redirect: '',
			},
		}
	}
}
