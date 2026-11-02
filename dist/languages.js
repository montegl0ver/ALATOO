const translations = {
  ru: {
    title: 'ALA TOO — Кыргызстан ближе, чем кажется',
    languageLabel: 'Язык',
    description: 'Откройте Кыргызстан: путешествия к Иссык-Кулю, Сон-Кулю и вершинам Тянь-Шаня.',
    home: 'ALA TOO — главная',
    menu: 'Открыть меню',
    nav: ['Наши маршруты', 'О Кыргызстане', 'Полезно знать', 'Спланировать поездку ↗'],
    hero: ['Там, где начинается свобода', 'Кыргызстан.<br>Ближе к горам.<br><em>Ближе к себе.</em>', 'Тропы Тянь-Шаня, тишина высокогорных озёр и тепло кочевого гостеприимства. Найдите своё путешествие.', 'Открыть маршруты', 'Центральная Азия · Кыргызстан', 'Впечатления, которые останутся с вами', 'Листайте, чтобы почувствовать ↓'],
    strip: ['Горы и неторопливые дороги', 'Знакомство с культурой', 'Маршруты в своём ритме', 'От озёр до перевалов'],
    toursIntro: ['Выберите своё приключение', 'У каждого пути —<br>своя история', 'Первые шаги в горах или неделя вдали от суеты — начните с того, что вам близко.'],
    filters: ['Все маршруты', 'Озёра и отдых', 'Походы в горы', 'Культура кочевников'],
    routes: {
      lake: { badge: 'Вода, горы и ничего лишнего', duration: '◷ 5 дней', pace: '○ Спокойный ритм', title: 'Вокруг Иссык-Куля', description: 'Берега большого озера, ущелья и прогулки по окрестностям Каракола.', season: 'Июнь — сентябрь', aria: 'Подробнее о маршруте вокруг Иссык-Куля', detail: 'Путешествие для знакомства с озером и природой его окрестностей.', days: ['Выезд из Бишкека и дорога к озеру.', 'Прогулки по северному берегу.', 'Переезд в Каракол и знакомство с городом.', 'Южный берег: пейзажи и остановки по пути.', 'Возвращение в Бишкек.'] },
      mountain: { badge: 'Для тех, кого зовут вершины', duration: '◷ 3 дня', pace: '△ Активный маршрут', title: 'Тропами Ала-Арчи', description: 'Хвойный воздух, горные реки и пешие маршруты среди вершин.', season: 'Июнь — сентябрь', aria: 'Подробнее о маршруте по Ала-Арче', detail: 'Несколько дней с базой в Бишкеке и выездами в горы. Конкретные тропы выбираются по подготовке группы.', days: ['Приезд, подготовка и знакомство с маршрутом.', 'Выезд в Ала-Арчу и прогулка по долине.', 'Дополнительный пеший маршрут по силам группы и возвращение.'] },
      culture: { badge: 'Почувствовать другой ритм', duration: '◷ 4 дня', pace: '○ Вдали от города', title: 'Под небом Сон-Куля', description: 'Высокогорное озеро, ночёвки в юрте и знакомство с жизнью на жайлоо.', season: 'Июль — август', aria: 'Подробнее о маршруте на Сон-Куль', detail: 'Неспешный маршрут к высокогорному озеру с ночёвкой в юрточном лагере.', days: ['Дорога из Бишкека в Кочкор.', 'Переезд к Сон-Кулю при подходящих дорожных условиях.', 'День у озера и знакомство с бытом на жайлоо.', 'Возвращение в Бишкек.'] },
    },
    routeNote: 'Примеры маршрутов для вдохновения. Программа и сроки зависят от погоды и подготовки. Фотографии передают атмосферу путешествий и не являются снимками указанных мест.',
    story: ['Горный пейзаж', 'Больше природы. Больше настоящего.', 'Страна, которую чувствуешь', 'Здесь роскошь —<br>это пространство', 'Проснуться от света за полотном юрты. Разделить горячий чай после дороги. Остановиться у озера просто потому, что не хочется ехать дальше.', 'Кыргызстан приглашает замедлиться: пройти по горной тропе, познакомиться с традициями и увидеть, сколько разного может вместить одно путешествие.', 'Озёра, ущелья и открытые горизонты', 'Юрты, местная кухня и живые традиции', 'Время для открытий и для себя'],
    planning: {
      intro: ['Первый шаг к путешествию', 'Каким будет<br>ваш Кыргызстан?', 'Выберите настроение поездки — и получите короткую памятку, с которой удобно начать планирование.', 'Оставьте контакт, и организатор ответит вам в Telegram. Это не подтверждение бронирования.'],
      name: 'Как к вам обращаться', contact: 'Telegram или телефон', interest: 'Что вас вдохновляет?', month: 'Когда хотите поехать?', consent: 'Согласен(на) на передачу контакта организатору для ответа на заявку.',
      namePlaceholder: 'Ваше имя', contactPlaceholder: '@username или +996...',
      interests: ['Озёра и спокойный отдых', 'Горы и пешие маршруты', 'Юрты и культура кочевников'],
      months: ['Пока выбираю', 'Июнь', 'Июль', 'Август', 'Сентябрь'],
      submit: 'Отправить заявку', sending: 'Отправляем заявку...', success: 'Заявка отправлена организатору. Памятку можно скачать ниже.', error: 'Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз.', download: 'Скачать памятку ↓', memoNote: 'Перед поездкой согласуйте с организатором даты, погоду, нагрузку, проживание и транспорт. Это пример программы, а не подтверждение бронирования.',
    },
    faq: ['Перед дорогой', 'Хорошо знать заранее', ['Как выбрать подходящий маршрут?', 'Ориентируйтесь на свою подготовку и привычный темп. Для первого знакомства подойдёт поездка вокруг Иссык-Куля с короткими прогулками. Горные походы требуют отдельного обсуждения нагрузки, высоты и снаряжения с гидом.'], ['Что взять с собой в горы?', 'Удобную обувь с цепкой подошвой, тёплый слой, защиту от дождя, головной убор, солнцезащитные очки и личные необходимые вещи. Уточните окончательный список у организатора: он зависит от сезона, высоты и ночёвок.'], ['Можно ли изменить программу под себя?', 'Эти маршруты — отправная точка для планирования. Перед бронированием с выбранным организатором согласуйте темп, транспорт, проживание, питание и запасные варианты на случай погоды.']],
    footer: ['Вдохновение для путешествий по Кыргызстану.<br>Демонстрационная концепция туристического сайта.', 'Наверх ↑'],
    dialog: ['Закрыть', 'Пример программы. Доступность дорог, нагрузку и условия необходимо согласовать с организатором перед поездкой.', 'Выбрать этот маршрут'],
  },
  en: {
    title: 'ALA TOO — Kyrgyzstan is closer than you think',
    languageLabel: 'Language',
    description: 'Discover Kyrgyzstan: travel to Issyk-Kul, Song-Kul and the peaks of the Tian Shan.',
    home: 'ALA TOO — home',
    menu: 'Open menu',
    nav: ['Our routes', 'About Kyrgyzstan', 'Travel tips', 'Plan your trip ↗'],
    hero: ['Where freedom begins', 'Kyrgyzstan.<br>Closer to the mountains.<br><em>Closer to yourself.</em>', 'Tian Shan trails, quiet alpine lakes and the warmth of nomadic hospitality. Find a journey of your own.', 'Explore routes', 'Central Asia · Kyrgyzstan', 'Memories that stay with you', 'Scroll to explore ↓'],
    strip: ['Mountains and unhurried roads', 'A glimpse of local culture', 'Journeys at your own pace', 'From lakes to mountain passes'],
    toursIntro: ['Choose your adventure', 'Every path has<br>a story', 'From your first mountain walk to a week away from the crowds, start with what feels right.'],
    filters: ['All routes', 'Lakes & relaxation', 'Mountain hikes', 'Nomadic culture'],
    routes: {
      lake: { badge: 'Water, mountains and room to breathe', duration: '◷ 5 days', pace: '○ Easy pace', title: 'Around Issyk-Kul', description: 'The lakeshore, mountain gorges and walks around Karakol.', season: 'June — September', aria: 'More about the Issyk-Kul route', detail: 'A trip to discover the lake and the landscapes around it.', days: ['Depart Bishkek and travel to the lake.', 'Explore the northern shore.', 'Travel to Karakol and discover the town.', 'Take in the southern shore and stop along the way.', 'Return to Bishkek.'] },
      mountain: { badge: 'For those drawn to the peaks', duration: '◷ 3 days', pace: '△ Active route', title: 'Trails of Ala-Archa', description: 'Pine-scented air, mountain streams and hiking beneath the peaks.', season: 'June — September', aria: 'More about the Ala-Archa route', detail: 'Several days based in Bishkek with trips into the mountains. Trails are chosen to suit the group.', days: ['Arrive, prepare and review the route.', 'Visit Ala-Archa and walk through the valley.', 'Take an additional hike suited to the group, then return.'] },
      culture: { badge: 'Find a different rhythm', duration: '◷ 4 days', pace: '○ Far from the city', title: 'Under the skies of Song-Kul', description: 'An alpine lake, a night in a yurt and a glimpse of life on the jailoo.', season: 'July — August', aria: 'More about the Song-Kul route', detail: 'An unhurried trip to a high-altitude lake, with a night at a yurt camp.', days: ['Travel from Bishkek to Kochkor.', 'Continue to Song-Kul when road conditions allow.', 'Spend a day by the lake and discover life on the jailoo.', 'Return to Bishkek.'] },
    },
    routeNote: 'These sample routes are for inspiration. Itinerary and timing depend on weather and fitness. Photos set the mood and may not show the exact locations.',
    story: ['Mountain landscape', 'More nature. More real.', 'A country you can feel', 'Here, luxury is<br>having space', 'Wake to light through a yurt wall. Share hot tea after the road. Stop by a lake simply because you do not want to leave yet.', 'Kyrgyzstan invites you to slow down: walk a mountain trail, meet local traditions and discover how much one journey can hold.', 'Lakes, gorges and open horizons', 'Yurts, local food and living traditions', 'Time to explore and time for yourself'],
    planning: {
      intro: ['The first step of your journey', 'What will<br>your Kyrgyzstan be?', 'Choose the kind of trip you want and get a short guide to help you start planning.', 'Leave your contact and the organizer will reply on Telegram. This is not a booking confirmation.'],
      name: 'What should we call you?', contact: 'Telegram or phone', interest: 'What are you drawn to?', month: 'When would you like to go?', consent: 'I agree to share my contact details with the organizer so they can reply to my request.',
      namePlaceholder: 'Your name', contactPlaceholder: '@username or phone number',
      interests: ['Lakes and a relaxed stay', 'Mountains and hiking', 'Yurts and nomadic culture'],
      months: ['Still deciding', 'June', 'July', 'August', 'September'],
      submit: 'Send request', sending: 'Sending your request...', success: 'Your request has been sent to the organizer. Your trip guide is ready to download below.', error: 'Could not send your request. Check your connection and try again.', download: 'Download trip guide ↓', memoNote: 'Before travelling, confirm dates, weather, difficulty, lodging and transport with the organizer. This is a sample itinerary, not a booking confirmation.',
    },
    faq: ['Before you go', 'Good to know', ['How do I choose the right route?', 'Consider your fitness and preferred pace. A trip around Issyk-Kul with short walks is a gentle introduction. Discuss exertion, altitude and equipment with a guide before a mountain trek.'], ['What should I bring to the mountains?', 'Bring sturdy shoes, warm layers, rain protection, a hat, sunglasses and personal essentials. Confirm the final packing list with the organizer; it depends on season, altitude and overnight stays.'], ['Can I tailor the itinerary?', 'These routes are a starting point. Before booking, agree on pace, transport, lodging, meals and weather alternatives with your chosen organizer.']],
    footer: ['Travel inspiration for Kyrgyzstan.<br>A tourism website concept.', 'Back to top ↑'],
    dialog: ['Close', 'Sample itinerary. Confirm road access, difficulty and conditions with the organizer before travelling.', 'Choose this route'],
  },
  ky: {
    title: 'ALA TOO — Кыргызстан сиз ойлогондон да жакын',
    languageLabel: 'Тил',
    description: 'Кыргызстанды ачыңыз: Ысык-Көлгө, Соң-Көлгө жана Тянь-Шандын чокуларына саякаттаңыз.',
    home: 'ALA TOO — башкы бет',
    menu: 'Менюну ачуу',
    nav: ['Маршруттар', 'Кыргызстан жөнүндө', 'Пайдалуу маалымат', 'Саякатты пландоо ↗'],
    hero: ['Эркиндик башталган жер', 'Кыргызстан.<br>Тоолорго жакын.<br><em>Өзүңүзгө жакын.</em>', 'Тянь-Шандын жолдору, бийик тоолуу көлдөрдүн тынчтыгы жана көчмөн меймандостугу. Өзүңүзгө ылайык саякатты табыңыз.', 'Маршруттарды көрүү', 'Борбордук Азия · Кыргызстан', 'Эсте кала турган көз ирмемдер', 'Улантуу үчүн ылдый жылдырыңыз ↓'],
    strip: ['Тоолор жана жай жолдор', 'Маданият менен таанышуу', 'Өз ыргагыңыздагы маршруттар', 'Көлдөрдөн ашууларга чейин'],
    toursIntro: ['Өзүңүзгө ылайык саякатты тандаңыз', 'Ар бир жолдун<br>өз баяны бар', 'Тоодогу алгачкы сейилден тартып, бир жумалык сапарга чейин — өзүңүзгө жакынынан баштаңыз.'],
    filters: ['Бардык маршруттар', 'Көлдөр жана эс алуу', 'Тоого жөө жүрүштөр', 'Көчмөндөр маданияты'],
    routes: {
      lake: { badge: 'Суу, тоолор жана бейпилдик', duration: '◷ 5 күн', pace: '○ Жай темп', title: 'Ысык-Көл айланасы', description: 'Көл жээги, капчыгайлар жана Караколдун айланасындагы сейилдер.', season: 'Июнь — сентябрь', aria: 'Ысык-Көл маршруту тууралуу кененирээк', detail: 'Көл жана анын айланасындагы жаратылыш менен таанышуу сапары.', days: ['Бишкектен көлгө жол тартуу.', 'Түндүк жээкти кыдыруу.', 'Караколго барып, шаар менен таанышуу.', 'Түштүк жээктеги кооз жерлерге токтоо.', 'Бишкекке кайтуу.'] },
      mountain: { badge: 'Чокуларга умтулгандар үчүн', duration: '◷ 3 күн', pace: '△ Активдүү маршрут', title: 'Ала-Арча жолдору', description: 'Ийне жалбырактуу токойдун абасы, тоо суулары жана чокулар арасындагы жөө жолдор.', season: 'Июнь — сентябрь', aria: 'Ала-Арча маршруту тууралуу кененирээк', detail: 'Бишкекте жайгашып, тоого бир нече жолу чыгуу. Жолдор топтун даярдыгына жараша тандалат.', days: ['Келүү, даярдык жана маршрут менен таанышуу.', 'Ала-Арчага барып, өрөөндө сейилдөө.', 'Топтун мүмкүнчүлүгүнө жараша жөө жүрүш жана кайтуу.'] },
      culture: { badge: 'Башка ыргакты сезиңиз', duration: '◷ 4 күн', pace: '○ Шаардан алыс', title: 'Соң-Көл асманында', description: 'Бийик тоолуу көл, боз үйдөгү түнөк жана жайлоодогу жашоо менен таанышуу.', season: 'Июль — август', aria: 'Соң-Көл маршруту тууралуу кененирээк', detail: 'Бийик тоолуу көлгө шашпай саякат жана боз үй лагеринде түнөө.', days: ['Бишкектен Кочкорго жол тартуу.', 'Жол шарттары ылайыктуу болсо, Соң-Көлгө чыгуу.', 'Көл жээгинде эс алып, жайлоо турмушу менен таанышуу.', 'Бишкекке кайтуу.'] },
    },
    routeNote: 'Бул маршруттар саякатка шыктануу үчүн сунушталды. Программа жана мөөнөт аба ырайына жана даярдыкка жараша өзгөрөт. Сүрөттөр көрсөтүлгөн жерлерден тартылбашы мүмкүн.',
    story: ['Тоолуу көрүнүш', 'Көбүрөөк жаратылыш. Көбүрөөк чыныгы сезим.', 'Жүрөккө жакын өлкө', 'Бул жерде байлык —<br>кең мейкиндик', 'Боз үйдүн түндүгүнөн түшкөн жарыкка ойгонуу. Жолдон кийин ысык чай ичүү. Көл жээгинде дагы калгыңыз келген үчүн токтоо.', 'Кыргызстан шашпай эс алууга чакырат: тоо жолу менен басып, салттар менен таанышып, бир саякатка канча таасир батарына күбө болуңуз.', 'Көлдөр, капчыгайлар жана кең мейкиндик', 'Боз үйлөр, жергиликтүү тамак жана салттар', 'Жаңы нерселерди көрүүгө жана өзүңүзгө убакыт'],
    planning: {
      intro: ['Саякатка алгачкы кадам', 'Сиздин Кыргызстаныңыз<br>кандай болот?', 'Сапардын маанайын тандап, пландоону баштоого жардам берген кыскача эскертме алыңыз.', 'Байланыш маалыматыңызды калтырыңыз, уюштуруучу Telegram аркылуу жооп берет. Бул брондоо ырастоосу эмес.'],
      name: 'Сизге кантип кайрылалы?', contact: 'Telegram же телефон', interest: 'Сизди эмне кызыктырат?', month: 'Качан барууну каалайсыз?', consent: 'Өтүнүчүмө жооп берүү үчүн байланыш маалыматымды уюштуруучуга берүүгө макулмун.',
      namePlaceholder: 'Атыңыз', contactPlaceholder: '@username же телефон номери',
      interests: ['Көлдөр жана тынч эс алуу', 'Тоолор жана жөө жүрүштөр', 'Боз үйлөр жана көчмөндөр маданияты'],
      months: ['Азырынча тандай элекмин', 'Июнь', 'Июль', 'Август', 'Сентябрь'],
      submit: 'Өтүнүч жөнөтүү', sending: 'Өтүнүч жөнөтүлүүдө...', success: 'Өтүнүч уюштуруучуга жөнөтүлдү. Саякат эскертмесин төмөндөн жүктөп алсаңыз болот.', error: 'Өтүнүч жөнөтүлгөн жок. Интернет байланышын текшерип, кайра аракет кылыңыз.', download: 'Эскертмени жүктөө ↓', memoNote: 'Сапар алдында күндөрдү, аба ырайын, жүктөмдү, түнөөнү жана транспортту уюштуруучу менен тактаңыз. Бул үлгү программа, брондоо ырастоосу эмес.',
    },
    faq: ['Жолго чыгарда', 'Алдын ала билип алыңыз', ['Өзүмө ылайыктуу маршрутту кантип тандайм?', 'Даярдыгыңызды жана өзүңүзгө ыңгайлуу темпти эске алыңыз. Алгачкы сапар үчүн Ысык-Көлдү кыска сейилдер менен айланып чыгуу ылайыктуу. Тоого жөө жүрүүдөн мурда жүктөмдү, бийиктикти жана жабдууларды гид менен тактаңыз.'], ['Тоого эмне ала баруу керек?', 'Тайгаланбаган бут кийим, жылуу кийим, жамгырдан коргонуу, баш кийим, күндөн коргоочу көз айнек жана керектүү жеке буюмдарды алыңыз. Акыркы тизмени уюштуруучу менен тактаңыз: ал мезгилге, бийиктикке жана түнөөгө жараша болот.'], ['Программаны өзгөртүүгө болобу?', 'Бул маршруттар пландоого баштапкы үлгү болот. Брондоодон мурда темпти, транспортту, түнөөнү, тамакты жана аба ырайы начарлаганда эмне кылууну уюштуруучу менен макулдашыңыз.']],
    footer: ['Кыргызстанга саякаттоо үчүн шыктануу.<br>Туристтик сайттын демо-концепциясы.', 'Жогору ↑'],
    dialog: ['Жабуу', 'Бул үлгү программа. Сапар алдында жол шарттарын, жүктөмдү жана башка жагдайларды уюштуруучу менен тактаңыз.', 'Бул маршрутту тандоо'],
  },
};

const routeDetails = {
  ru: {
    labels: { stops: 'Остановки и путь', activity: 'Активность', lodging: 'Ночёвки' },
    routes: {
      lake: { stops: 'Бишкек → северный берег → Каракол → южный берег → Бишкек', activity: 'Спокойные прогулки и переезды с остановками.', lodging: 'В демонстрационной программе не указано; уточните у организатора.' },
      mountain: { stops: 'Бишкек → ущелье Ала-Арча → Бишкек', activity: 'Пешие прогулки; сложность троп подбирается по подготовке группы.', lodging: 'Базирование в Бишкеке; размещение необходимо согласовать.' },
      culture: { stops: 'Бишкек → Кочкор → Сон-Куль → Бишкек', activity: 'Переезды по горным дорогам и прогулки у озера; маршрут зависит от условий.', lodging: 'Ночёвка в юрточном лагере.' },
    },
  },
  en: {
    labels: { stops: 'Route & stops', activity: 'Activity', lodging: 'Overnight stay' },
    routes: {
      lake: { stops: 'Bishkek → north shore → Karakol → south shore → Bishkek', activity: 'Easy walks and scenic drives with stops.', lodging: 'Not specified in this sample itinerary; confirm with the organizer.' },
      mountain: { stops: 'Bishkek → Ala-Archa gorge → Bishkek', activity: 'Hiking; trail difficulty is chosen to match the group.', lodging: 'Based in Bishkek; accommodation needs to be confirmed.' },
      culture: { stops: 'Bishkek → Kochkor → Song-Kul → Bishkek', activity: 'Mountain-road transfers and walks by the lake; route depends on conditions.', lodging: 'Overnight at a yurt camp.' },
    },
  },
  ky: {
    labels: { stops: 'Жол жана аялдамалар', activity: 'Иш-аракеттер', lodging: 'Түнөө' },
    routes: {
      lake: { stops: 'Бишкек → түндүк жээк → Каракол → түштүк жээк → Бишкек', activity: 'Жай сейилдөө жана кооз жерлерге токтоп жол жүрүү.', lodging: 'Үлгү программада көрсөтүлгөн эмес; уюштуруучу менен тактаңыз.' },
      mountain: { stops: 'Бишкек → Ала-Арча капчыгайы → Бишкек', activity: 'Жөө жүрүштөр; жолдордун татаалдыгы топтун даярдыгына жараша тандалат.', lodging: 'Бишкекте жайгашуу; түнөө шарттарын тактоо керек.' },
      culture: { stops: 'Бишкек → Кочкор → Соң-Көл → Бишкек', activity: 'Тоолуу жолдордо жүрүү жана көл жээгинде сейилдөө; маршрут шартка жараша өзгөрөт.', lodging: 'Боз үй лагеринде түнөө.' },
    },
  },
};

const languageSelect = document.getElementById('language');
const languageStyle = document.createElement('style');
languageStyle.textContent = `.language{width:auto;border:1px solid #a6b1a8;border-radius:20px;background:transparent;color:var(--ink);padding:9px 10px;font-size:12px;font-weight:700;cursor:pointer}
#tourDialog .route-facts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 20px;margin:20px 0}
#tourDialog .route-facts>div{border-top:1px solid #e6e8df;padding:12px 0}
#tourDialog .route-facts dt{color:#697b72;font-size:10px;font-weight:700;text-transform:uppercase}
#tourDialog .route-facts dd{font-size:12px;line-height:1.6;margin:6px 0 0;overflow-wrap:anywhere}
header nav a,.hero-bottom a,footer .outline{transition:color .2s ease}
header nav a:hover,header nav a:focus-visible,.hero-bottom a:hover,.hero-bottom a:focus-visible,footer .outline:hover,footer .outline:focus-visible{color:var(--orange)}
.card h3{transform-origin:left center;transition:color .2s ease,transform .2s ease}
.card:hover h3,.card:focus-within h3{color:var(--orange);transform:translateX(4px)}
.faq summary{transition:color .2s ease}
.faq summary:hover,.faq summary:focus-visible{color:var(--orange)}
.hero h1 em{transition:color .2s ease}
.hero h1 em:hover{color:#fff}
@media(max-width:980px){header nav{display:none;position:absolute;top:75px;left:0;right:0;padding:25px;background:var(--paper);z-index:5;flex-direction:column}header nav.open{display:flex}header>.outline{display:none}.menu{display:block!important;background:transparent;border:0;font-size:24px;color:var(--ink)}}
@media(max-width:600px){#tourDialog .route-facts{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){header nav a,.hero-bottom a,footer .outline,.card h3,.faq summary,.hero h1 em{transition:none}.card:hover h3,.card:focus-within h3{transform:none}}`;
document.head.append(languageStyle);

function setLeadingText(element, value) {
  const textNode = [...element.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.nodeValue = `${value} `;
}

function setTrailingText(element, value) {
  const textNodes = [...element.childNodes].filter(node => node.nodeType === Node.TEXT_NODE);
  if (textNodes.length) textNodes[textNodes.length - 1].nodeValue = ` ${value}`;
}

function applyLanguage(language) {
  const copy = translations[language] || translations.ru;
  const routeIds = ['lake', 'mountain', 'culture'];
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('.logo').setAttribute('aria-label', copy.home);
  document.querySelector('.menu').setAttribute('aria-label', copy.menu);
  languageSelect.setAttribute('aria-label', copy.languageLabel);
  document.querySelectorAll('nav a').forEach((el, index) => { el.textContent = copy.nav[index]; });
  setLeadingText(document.querySelector('header>.outline'), copy.nav[3]);

  const hero = copy.hero;
  document.querySelector('.hero .eyebrow').textContent = hero[0];
  document.querySelector('.hero h1').innerHTML = hero[1];
  document.querySelector('.hero p').textContent = hero[2];
  setLeadingText(document.querySelector('.hero .btn'), hero[3]);
  document.querySelectorAll('.hero-bottom span').forEach((el, index) => setTrailingText(el, hero[4 + index]));
  document.querySelector('.hero-bottom a').textContent = hero[6];
  document.querySelectorAll('.strip span').forEach((el, index) => setTrailingText(el, copy.strip[index]));

  document.querySelector('#tours .section-head .eyebrow').textContent = copy.toursIntro[0];
  document.querySelector('#tours h2').innerHTML = copy.toursIntro[1];
  document.querySelector('#tours .sub').textContent = copy.toursIntro[2];
  document.querySelectorAll('.filter').forEach((el, index) => { el.textContent = copy.filters[index]; });
  document.querySelectorAll('.filter').forEach((el, index) => { el.textContent = copy.filters[index]; });
    document.querySelector('.filters').setAttribute('aria-label', copy.filters[0]);
  document.querySelectorAll('.card').forEach((card, index) => {
    const route = copy.routes[routeIds[index]];
    card.querySelector('.badge').textContent = route.badge;
    card.querySelector('.meta').children[0].textContent = route.duration;
    card.querySelector('.meta').children[1].textContent = route.pace;
    card.querySelector('h3').textContent = route.title;
    card.querySelector('.card-body>p').textContent = route.description;
    card.querySelector('.card-foot>span').textContent = route.season;
    card.querySelector('[data-tour]').setAttribute('aria-label', route.aria);
  });
  document.querySelector('.note').textContent = copy.routeNote;

  const story = copy.story;
  document.querySelector('.story-image').setAttribute('aria-label', story[0]);
  document.querySelector('.story-image span').textContent = story[1];
  document.querySelector('.story-copy .eyebrow').textContent = story[2];
  document.querySelector('.story-copy h2').innerHTML = story[3];
  document.querySelectorAll('.story-copy>p').forEach((el, index) => { el.textContent = story[4 + index]; });
  document.querySelectorAll('.fact').forEach((el, index) => setTrailingText(el, story[6 + index]));

  const planning = copy.planning;
  document.querySelector('.planning .eyebrow').textContent = planning.intro[0];
  document.querySelector('.planning h2').innerHTML = planning.intro[1];
  document.querySelector('.planning>div>p').textContent = planning.intro[2];
  document.querySelector('.planning>div>p+ p').textContent = planning.intro[3];
  document.querySelector('label[for="name"]').textContent = planning.name;
  document.querySelector('label[for="contact"]').textContent = planning.contact;
  document.querySelector('label[for="interest"]').textContent = planning.interest;
  document.querySelector('label[for="month"]').textContent = planning.month;
  document.querySelector('#name').placeholder = planning.namePlaceholder;
  document.querySelector('#contact').placeholder = planning.contactPlaceholder;
  document.querySelectorAll('#interest option').forEach((el, index) => { el.textContent = planning.interests[index]; });
  document.querySelectorAll('#month option').forEach((el, index) => { el.textContent = planning.months[index]; });
  setTrailingText(document.querySelector('label[for="consent"]'), planning.consent);
  setLeadingText(document.querySelector('#planner .btn'), planning.submit);
  document.querySelector('#download').textContent = planning.download;

  document.querySelector('.faq .eyebrow').textContent = copy.faq[0];
  document.querySelector('.faq h2').textContent = copy.faq[1];
  document.querySelectorAll('.faq details').forEach((el, index) => {
    el.querySelector('summary').textContent = copy.faq[index + 2][0];
    el.querySelector('p').textContent = copy.faq[index + 2][1];
  });
  document.querySelector('footer p').innerHTML = copy.footer[0];
  document.querySelector('footer .outline').textContent = copy.footer[1];
  document.querySelector('.close').setAttribute('aria-label', copy.dialog[0]);
  document.querySelector('#tourDialog>p[style]').textContent = copy.dialog[1];
  setLeadingText(document.getElementById('chooseTour'), copy.dialog[2]);
  languageSelect.value = language;
  try { localStorage.setItem('ala-too-language', language); } catch {}
}

document.querySelectorAll('[data-tour]').forEach(button => {
  button.onclick = () => {
    selected = button.dataset.tour;
    const language = languageSelect.value;
    const route = translations[language].routes[button.dataset.tour];
    const details = routeDetails[language];
    const routeDetail = details.routes[button.dataset.tour];
    document.getElementById('dialogTitle').textContent = route.title;
    document.getElementById('dialogText').textContent = route.detail;
    document.getElementById('stopsLabel').textContent = details.labels.stops;
    document.getElementById('routeStops').textContent = routeDetail.stops;
    document.getElementById('activityLabel').textContent = details.labels.activity;
    document.getElementById('routeActivity').textContent = routeDetail.activity;
    document.getElementById('lodgingLabel').textContent = details.labels.lodging;
    document.getElementById('routeLodging').textContent = routeDetail.lodging;
    document.getElementById('dialogDays').replaceChildren(...route.days.map(day => {
      const item = document.createElement('li');
      item.textContent = day;
      return item;
    }));
    document.getElementById('tourDialog').showModal();
  };
});

document.getElementById('planner').onsubmit = async event => {
  event.preventDefault();
  const language = languageSelect.value;
  const copy = translations[language];
  const planning = copy.planning;
  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  if (!name || !contact) return;

  const planner = document.getElementById('planner');
  const submit = planner.querySelector('[type="submit"]');
  const result = document.getElementById('result');
  const download = document.getElementById('download');
  const interest = document.getElementById('interest').value;
  const monthIndex = document.getElementById('month').selectedIndex;
  const apiMonth = translations.ru.planning.months[monthIndex];
  const route = copy.routes[interest];
  submit.disabled = true;
  download.classList.add('hidden');
  result.textContent = planning.sending;

  try {
    const response = await fetch('/api/telegram-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        contact,
        interest,
        month: apiMonth,
        consent: document.getElementById('consent').checked,
        website: document.getElementById('website').value,
      }),
    });
    if (!response.ok) throw new Error(planning.error);

    const memo = `${name}, ${route.title}\n${planning.month}: ${planning.months[monthIndex]}\n\n${route.days.map((day, index) => `${index + 1}. ${day}`).join('\n')}\n\n${planning.memoNote}`;
    result.textContent = `${name}, ${planning.success}`;
    download.classList.remove('hidden');
    download.onclick = () => {
      const url = URL.createObjectURL(new Blob([memo], { type: 'text/plain;charset=utf-8' }));
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'ALA TOO — trip.txt';
      anchor.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    };
  } catch {
    result.textContent = planning.error;
  } finally {
    submit.disabled = false;
  }
};

languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value));
let initialLanguage = 'ru';
try {
  const savedLanguage = localStorage.getItem('ala-too-language');
  if (savedLanguage && translations[savedLanguage]) initialLanguage = savedLanguage;
} catch {}
applyLanguage(initialLanguage);