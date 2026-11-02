const interests = {
  lake: 'Озёра и спокойный отдых',
  mountain: 'Горы и пешие маршруты',
  culture: 'Юрты и культура кочевников',
};

const months = new Set(['Пока выбираю', 'Июнь', 'Июль', 'Август', 'Сентябрь']);

function clean(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, maxLength);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Метод не поддерживается.' });
  }

  const contentLength = Number(req.headers['content-length']);
  if (Number.isFinite(contentLength) && contentLength > 4096) {
    return res.status(413).json({ error: 'Слишком большой запрос.' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const name = clean(body.name, 80);
  const contact = clean(body.contact, 100);
  const consent = body.consent === true;
  const interest = interests[body.interest];
  const month = clean(body.month, 24);

  if (!name || !contact || !consent || !interest || !months.has(month)) {
    return res.status(400).json({ error: 'Проверьте заполнение формы.' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(500).json({ error: 'Отправка заявок временно недоступна.' });
  }

  const text = [
    'Новая заявка с сайта ALA TOO',
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    `Интерес: ${interest}`,
    `Период: ${month}`,
  ].join('\n');

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!telegramResponse.ok) {
      return res.status(502).json({ error: 'Не удалось отправить заявку. Попробуйте позже.' });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Нет связи с Telegram. Попробуйте позже.' });
  }
};