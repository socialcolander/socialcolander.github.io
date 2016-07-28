{
	basedir: "./src",
	global: {
		lang: "ru",
		alternate_lang: "en",

		home_path: "//socialcolander.net",
		lang_path: "//socialcolander.net/ru",
		alternate_lang_path: "//socialcolander.net",

		name: "Социальный дуршлаг",
		description: "Сервис, который отфильтрует вашу социальную ленту от воды. Получайте только лучшие сообщения из Твитера на почту в удобное время.",
		twitter_sign_in: "Войти через Твитер",
		home: {
			intro: "Недавно я заметил, что слишком часто захожу в Твитер. Со времением число людей, за которыми я следил увеличивалось и чтение всех новостей занимало слишком много времени. Чтобы оптимизировать этот процесс, остаться в курсе событий и не пропустить самое интересное, было решено фильтровать содержимое лент. Но не самому же это делать, пусть за меня страдают машины. Так и появился «Социальный дуршлаг».",
			features: {
				title: "Польза",
				list: [{
						title: "Лучшая лента новостей",
						description: "Вы читаете только то, что интересно и актуально для вас, а не для СМИ."
					}, {
						title: "Экономия времени",
						description: "Читайте письма с выборкой лучших твитов, а не всю ленту."
					}, {
						title: "Не упустите крутые твиты",
						description: "Листая ленту можно случайно пропустить интересный твит. С нашими письмами такого не произойдет."
					}, {
						title: "Можете повлиять на сервис",
						description: "Сервис только начинает развиваться и расти, если у вас есть идеи или предложения — мы с радостью выслушаем вас."
				}]
			},
			reviews: {
				title: 'Отзывы',
				text: 'Будет здорово, если вы поделитесь своим мнением или идей о сервисе с нами. Это можно сделать написав нам на общую почту <a href="mailto:info@socialcolander.net">info@socialcolander.net</a> или в Твиттер <a href="//twitter.com/social_colander"> @socialcolander</a>.',
				author: 'Юрий Матюхин',
				author_text: 'Тут будут отзывы о социальном дуршлаге, но пока их нет. Может быть вы оставите первый отзыв?',
				author_who: 'автор идеи',
			},
			tags: '#твитер #фильтрация #лучшееизтвитера'
		},
		settings: {
			title: 'Шаг 2: Укажите почту и время',
			description: 'Социальный дуршлаг — Регистрация — Шаг 2',
			success: 'Вы <b>успешно</b> вошли через твиттер.',
			ready: 'Чтобы начать получать письма — укажите свой email и выберите удобное время для получения.',
			submit: 'Отправить письмо с подтверждением',
			placeholder_email: 'Электронная почта',
			times: [
				{ value: "08", text: 'С утра пораньше (08:00)' },
				{ value: "10", text: 'Утром (10:00)' },
				{ value: "14", text: 'В обед (14:00)' },
				{ value: "18", text: 'Под вечер (18:00)' },
				{ value: "20", text: 'Вечером (20:00)' },
				{ value: "22", text: 'Ближе к ночи (22:00)' },
				{ value: "24", text: 'Ночью (24:00)' }
			]
		},
		messages: {
			confirm: {
				title: 'Шаг 3: Подтвердите электронную почту',
				description: '',
				message: 'Мы отправили вам письмо для подтверждения подписки. <br>Откройте его и нажмите на кнопку «подтвердить», если хотите получать письма с лучшими твитами из вашей ленты. <br>Спасибо ♥️',
			},
			success: {
				title: 'Электронная почта подтверждена',
				description: '',
				message: 'Все хорошо. <br>Мы подготовим письмо с лучшими твитами в указанное вами время.',
			},
			unsubscribe: {
				title: 'Вы успешно отписались',
				description: '',
				message: 'Спасибо что пользовались дуршлагом, если вам что-то не понравилось — напишите нам <a href="mailto:help@socialcollander.net?subject=Отписываюсь потому что…">help@socialcollander.net</a><br>Мы внимательно читаем все письма и слушаем ваши советы.',
			}
		}
	}
}
