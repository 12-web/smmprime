import { SOCIAL_IMAGES_URL } from './constants.v5.js';

export const socials = {
  telegram: {
    name: 'Телеграм',
    img: `${SOCIAL_IMAGES_URL}/telegram-icon.svg`,
    services: {
      autoviews: {
        cost: 1,
        amount: 1000,
      },
      reactions: {
        cost: 4,
        amount: 1000,
      },
      reposts: {
        cost: 34,
        amount: 1000,
      },
      comments: {
        cost: 3,
        amount: 1,
      },
      views: {
        cost: 1,
        amount: 1000,
      },
      followers: {
        cost: 40,
        amount: 1000,
      },
      autolikes: {
        cost: 4,
        amount: 1000,
      },
      polls: {
        cost: 32,
        amount: 1000,
      },
    },
  },
  vk: {
    name: 'Вконтакте',
    img: `${SOCIAL_IMAGES_URL}/vk-icon.svg`,
    services: {
      likes: {
        cost: 45,
        amount: 1000,
      },
      friends: {
        cost: 90,
        amount: 1000,
      },
      listenings: {
        cost: 13,
        amount: 10,
      },
      reposts: {
        cost: 165,
        amount: 1000,
      },
      views: {
        cost: 3.2,
        amount: 1000,
      },
      followers: {
        cost: 90,
        amount: 1000,
      },
      autoviews: {
        cost: 2.5,
        amount: 1000,
      },
      comments: {
        cost: 3,
        amount: 1,
      },
      polls: {
        cost: 650,
        amount: 1000,
      },
    },
  },
  instagram: {
    name: 'Инстаграмм',
    img: `${SOCIAL_IMAGES_URL}/instagram-icon.svg`,
    services: {
      followers: {
        cost: 12,
        amount: 1000,
      },
      views: {
        cost: 1.5,
        amount: 1000,
      },
      comments: {
        cost: 3.5,
        amount: 10,
      },
      stories: {
        cost: 15,
        amount: 1000,
      },
      reposts: {
        cost: 13,
        amount: 1000,
      },
      likes: {
        cost: 3,
        amount: 1000,
      },
      autolikes: {
        cost: 3,
        amount: 1000,
      },
      autoreels: {
        cost: 1.5,
        amount: 1000,
      },
      coverages: {
        cost: 5,
        amount: 1000,
      },
      conservations: {
        cost: 6,
        amount: 1000,
      },
      polls: {
        cost: 155,
        amount: 1000,
      },
    },
  },
  tiktok: {
    name: 'ТикТок',
    img: `${SOCIAL_IMAGES_URL}/tiktok-icon.svg`,
    shortList: [
      {
        type: 'Просмотры views',
        id: 456,
        name: 'Тик Ток просмотры видео #3',
        cost: '0.40',
        guarantee: '+',
        timetostart: '1 ч',
        speed: 'до 500000 в сутки',
        description: [
          '🔹 Просмотры видео в Тикток',
          '✅ Безопасная накрутка',
          '⌛️ Запуск услуги: 0-24 часа',
          '🚀 Скорость: до 500000 в сутки',
        ],
        information: [
          '🔹Возможна перекрутка (придет больше просмотров. чем было заказано)',
        ],
        example:
          'Указывать ссылку на видео в Тикток. Пример: https://vm.tiktok.com/g2dYsdf',
      },
      {
        type: 'Просмотры views',
        id: 479,
        name: 'Tiktok Автопросмотры на новые посты',
        cost: '0.90',
        guarantee: '+',
        timetostart: '1 ч',
        speed: 'до 500000 в сутки',
        description: [
          '🔹 Автопросмотры видео в Тикток',
          '✅ Безопасная накрутка',
          '⌛️ Запуск услуги: 0-24 часа',
          '🚀 Скорость: до 100000-300000 в сутки',
        ],
        information: [
          '🔹 Накрутка на старые посты опциональна - если они не нужны, то просто не заполняйте поле "На сколько старых постов накрутить"',
          '🔹 Если вы хотите, чтобы на каждый пост всегда шло одинаковое число реакций (например, 1000), нужно в полях Мин. и Макс. прописать 1000, если нужно случайно число из числового диапазона - вы можете задать его с помощью этих полей',
          '🔹 Итоговую сумму всей подписки рассчитать заранее невозможно, поле "цена" останется пустым. В момент выхода поста, в истории автоматически появится заказ на новую публикацию, а средства спишутся с баланса на сайте.',
          '🔹 Итоговую сумму всей подписки рассчитать заранее невозможно, поле "цена" останется пустым. В момент выхода поста, в истории автоматически появится заказ на новую публикацию, а средства спишутся с баланса на сайте.',
        ],
        example:
          'Указывать ссылку на профиль Тикток/Имя пользователя. Пример: https://www.tiktok.com/@dmitriev.syoma.1965 - это ссылка на аккаунт, в поле Username писать dmitriev.syoma.1965 (без @ и прочих символов)',
      },
      {
        type: 'Лайки likes',
        id: 697,
        name: 'TikTok Лайки + Гарантия♻️ #3',
        cost: '66.00',
        guarantee: '+',
        timetostart: '24 ч',
        speed: 'до 1000 в сутки',
        description: [
          '🔹Лайки в Тикток с гарантией',
          '🛡Гарантия',
          '✅Безопасная накрутка',
          '⌛️Запуск услуги: 0-24 часа',
          '🚀Скорость: до 10000 в сутки',
          '♻️Бесплатное Восстановление: в течение 30 дней',
        ],
        information: [],
        example:
          'Указывать ссылку на видео в Тикток. Пример: https://vm.tiktok.com/g2dYsdf',
      },
      {
        type: 'Подписчики followers',
        id: 435,
        name: 'Тикток подписчики + гарантия #4♻️',
        cost: '240.00',
        guarantee: '+',
        timetostart: '24 ч',
        speed: 'до 1000 в сутки',
        description: [
          '🔹Подписчики в Тикток с гарантией',
          '🛡Гарантия',
          '✅Безопасная накрутка',
          '⌛️Запуск услуги: 0-24 часа',
          '🚀Скорость: до 1000 в сутки',
          '♻️Бесплатное Восстановление: в течение 30 дней',
        ],
        information: [],
        example:
          'Указывать ссылку на видео в Тикток. Пример: https://www.tiktok.com/@tiktok',
      },
      {
        type: 'Репосты reposts',
        id: 547,
        name: 'Tiktok Репосты',
        cost: '21.00',
        guarantee: '+',
        timetostart: '24 ч',
        speed: 'до 5000 в сутки',
        description: [
          '🔹 Репосты видео в Тикток',
          '🛡 Гарантия',
          '✅ Безопасная накрутка',
          '⌛️ Запуск услуги: 0-1 час',
          '🚀 Скорость: до 5000-10000 в сутки',
          '❗ Возможна перекрутка',
        ],
        information: [],
        example:
          'Указывать ссылку на видео в Тикток. Пример: https://vm.tiktok.com/g2dYsdf',
      },
      {
        type: 'Комментарии comments',
        id: 424,
        name: 'Комментарии Tik Tok от живых людей (Положительные) - на Русском',
        cost: '3500.00',
        guarantee: '+',
        timetostart: '24 ч',
        speed: 'до 50 в сутки',
        description: [
          '🔹Положительные Комментарии Tik Tok от живых людей на русском языке.',
          '⌛️Запуск услуги: до 24 часов',
          '🚀Скорость: до 10-50 в сутки',
        ],
        information: [
          '🔹Комментарии на Русском языке',
          '🔹Статус заказа может не обновляться, так как услуга выполняется вручную',
        ],
        example:
          'Указывать ссылку на видео в Тикток. Пример: https://vm.tiktok.com/g2dYsdf',
      },
      {
        type: 'Сохранения conservations',
        id: 846,
        name: 'TikTok Сохранения',
        cost: '34.00',
        guarantee: '+',
        timetostart: '24 ч',
        speed: 'до 5000 в сутки',
        description: [],
        information: [],
        example:
          'Указывать ссылку на пост Телеграм. Пример: https://t.me/channelname/1',
      },
    ],
    services: {
      followers: {
        cost: 260,
        amount: 1000,
        full: [
          {
            id: 435,
            name: 'Тикток подписчики + гарантия #4♻️',
            cost: '240.00',
            guarantee: '+',
            timetostart: '24 ч',
            speed: 'до 1000 в сутки',
            description: [
              '🔹Подписчики в Тикток с гарантией',
              '🛡Гарантия',
              '✅Безопасная накрутка',
              '⌛️Запуск услуги: 0-24 часа',
              '🚀Скорость: до 1000 в сутки',
              '♻️Бесплатное Восстановление: в течение 30 дней',
            ],
            information: [],
            example:
              'Указывать ссылку на видео в Тикток. Пример: https://www.tiktok.com/@tiktok',
          },
        ],
      },
      reposts: {
        cost: 21,
        amount: 1000,
      },
      views: {
        cost: 1,
        amount: 1000,
        full: [
          {
            id: 456,
            name: 'Тик Ток просмотры видео #3',
            cost: '0.40',
            guarantee: '+',
            timetostart: '1 ч',
            speed: 'до 500000 в сутки',
            description: [
              '🔹 Просмотры видео в Тикток',
              '✅ Безопасная накрутка',
              '⌛️ Запуск услуги: 0-24 часа',
              '🚀 Скорость: до 500000 в сутки',
            ],
            information: [
              '🔹Возможна перекрутка (придет больше просмотров. чем было заказано)',
            ],
            example:
              'Указывать ссылку на видео в Тикток. Пример: https://vm.tiktok.com/g2dYsdf',
          },
          {
            id: 479,
            name: 'Tiktok Автопросмотры на новые посты',
            cost: '0.90',
            guarantee: '+',
            timetostart: '1 ч',
            speed: 'до 500000 в сутки',
            description: [
              '🔹 Автопросмотры видео в Тикток',
              '✅ Безопасная накрутка',
              '⌛️ Запуск услуги: 0-24 часа',
              '🚀 Скорость: до 100000-300000 в сутки',
            ],
            information: [
              '🔹 Накрутка на старые посты опциональна - если они не нужны, то просто не заполняйте поле "На сколько старых постов накрутить"',
              '🔹 Если вы хотите, чтобы на каждый пост всегда шло одинаковое число реакций (например, 1000), нужно в полях Мин. и Макс. прописать 1000, если нужно случайно число из числового диапазона - вы можете задать его с помощью этих полей',
              '🔹 Итоговую сумму всей подписки рассчитать заранее невозможно, поле "цена" останется пустым. В момент выхода поста, в истории автоматически появится заказ на новую публикацию, а средства спишутся с баланса на сайте.',
              '🔹 Итоговую сумму всей подписки рассчитать заранее невозможно, поле "цена" останется пустым. В момент выхода поста, в истории автоматически появится заказ на новую публикацию, а средства спишутся с баланса на сайте.',
            ],
            example:
              'Указывать ссылку на профиль Тикток/Имя пользователя. Пример: https://www.tiktok.com/@dmitriev.syoma.1965 - это ссылка на аккаунт, в поле Username писать dmitriev.syoma.1965 (без @ и прочих символов)',
          },
        ],
      },
      likes: {
        cost: 59,
        amount: 1000,
        full: [
          {
            id: 697,
            name: 'TikTok Лайки + Гарантия♻️ #3',
            cost: '66.00',
            guarantee: '+',
            timetostart: '24 ч',
            speed: 'до 1000 в сутки',
            description: [
              '🔹Лайки в Тикток с гарантией',
              '🛡Гарантия',
              '✅Безопасная накрутка',
              '⌛️Запуск услуги: 0-24 часа',
              '🚀Скорость: до 10000 в сутки',
              '♻️Бесплатное Восстановление: в течение 30 дней',
            ],
            information: [],
            example:
              'Указывать ссылку на видео в Тикток. Пример: https://vm.tiktok.com/g2dYsdf',
          },
        ],
      },
      conservations: {
        cost: 31,
        amount: 1000,
      },
      comments: {
        cost: 3500,
        amount: 1000,
        full: [
          {
            id: 424,
            name: 'Комментарии Tik Tok от живых людей (Положительные) - на Русском',
            cost: '3500.00',
            guarantee: '+',
            timetostart: '24 ч',
            speed: 'до 50 в сутки',
            description: [
              '🔹Положительные Комментарии Tik Tok от живых людей на русском языке.',
              '⌛️Запуск услуги: до 24 часов',
              '🚀Скорость: до 10-50 в сутки',
            ],
            information: [
              '🔹Комментарии на Русском языке',
              '🔹Статус заказа может не обновляться, так как услуга выполняется вручную',
            ],
            example:
              'Указывать ссылку на видео в Тикток. Пример: https://vm.tiktok.com/g2dYsdf',
          },
        ],
      },
    },
  },
  youtube: {
    name: 'Ютуб',
    img: `${SOCIAL_IMAGES_URL}/youtube-icon.svg`,
    services: {
      views: {
        cost: 90,
        amount: 1000,
      },
      followers: {
        cost: 890,
        amount: 1000,
      },
      comments: {
        cost: 780,
        amount: 1000,
      },
      likes: {
        cost: 240,
        amount: 1000,
      },
    },
  },
  twitter: {
    name: 'Твиттер',
    img: `${SOCIAL_IMAGES_URL}/twitter-icon.svg`,
    services: {
      likes: {
        cost: 280,
        amount: 1000,
      },
      retweets: {
        cost: 250,
        amount: 1000,
      },
      followers: {
        cost: 430,
        amount: 1000,
      },
    },
  },
  spotify: {
    name: 'Спотифай',
    img: `${SOCIAL_IMAGES_URL}/spotify-icon.svg`,
    services: {
      listenings: {
        cost: 40,
        amount: 1000,
      },
    },
  },
  ok: {
    // пустой
    name: 'Одноклассники',
    img: `${SOCIAL_IMAGES_URL}/ok-icon.svg`,
    services: {},
  },
  facebook: {
    name: 'Фейсбук',
    img: `${SOCIAL_IMAGES_URL}/facebook-icon.svg`,
    services: {
      followers: {
        cost: 58,
        amount: 1000,
      },
      comments: {
        cost: 3.5,
        amount: 1,
      },
      likes: {
        cost: 55,
        amount: 1000,
      },
    },
  },
  internet: {
    name: 'Интернет',
    img: `${SOCIAL_IMAGES_URL}/internet-icon.svg`,
    services: {
      visitors: {
        cost: 12,
        amount: 1000,
      },
    },
  },
  soundcloud: {
    name: 'Саундклауд',
    img: `${SOCIAL_IMAGES_URL}/soundcloud-icon.svg`,
    services: {
      plays: {
        cost: 6,
        amount: 1000,
      },
      followers: {
        cost: 200,
        amount: 1000,
      },
      comments: {
        cost: 1.2,
        amount: 1,
      },
      likes: {
        cost: 155,
        amount: 1000,
      },
    },
  },
};
