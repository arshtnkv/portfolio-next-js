const data = {
  name: 'Anton Reshetnikov',
  image: '/avatar.jpg',
  username: 'arshtnkv',
  keywords: 'Frontend, Fullstack, JavaScript, Node.js, Express.js, Фронтенд',
  profession: 'FullStack developer',
  intro:
    'Специализируюсь на разработке Frontend приложений и активно развиваюсь в Fullstack разработке с использованием Node.js и Express.js.',
  about:
    'Постоянно совершенствуюсь, изучая современные технологии через официальную документацию, профессиональные сообщества и участие в проектах. Открыт к долгосрочному сотрудничеству, ориентирован на результат, умею работать в команде.',
  website: 'https://arshtnkv.ru',
  projects: [
    {
      name: 'Poster - Социальная сеть',
      image: '/projects/poster.png',
      about:
        'В приложении доступны следующие функции: Регистрация и аутентификация пользователей; Создание постов; Взаимодействие с контентом; Подписки; Профили; Лента новостей;',
      tech: [
        'React.js',
        'Redux Toolkit',
        'NextUi.js',
        'JWT',
        'Typescript',
        'TailwindCSS',
        'Express.js',
        'MongoDB',
        'Docker',
      ],
      links: {
        Live: 'https://poster-react-eta.vercel.app/',
        GitHub: 'https://github.com/arshtnkv/poster-react',
      },
      role: 'Fullstack',
    },
    {
      name: 'Patientor',
      image: '/projects/patientor.png',
      about:
        'Простое приложение ведения медицинских карт для врачей, занимающихся диагностикой и обработкой основной медицинской информацией своих пациентов. Основной упор на оттачивание навыков по TypeScript и MaterialUI.',
      tech: [
        'React.js',
        'Typescript',
        'MaterialUI',
        'Express.js',
        'ESLint',
        'Prettier',
      ],
      links: {
        Live: 'https://patientor-react.vercel.app/',
        GitHub: 'https://github.com/arshtnkv/patientor-react/',
      },
      role: 'Fullstack',
    },
    {
      name: 'Site portfolio',
      image: '/projects/portfolio.png',
      about:
        'Простое приложение ведения медицинских карт для врачей, занимающихся диагностикой и обработкой основной медицинской информацией своих пациентов. Основной упор на оттачивание навыков по TypeScript и MaterialUI.',
      tech: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'AOS',
        'ESLint',
        'Prettier',
      ],
      links: {
        Live: 'https://patientor-react.vercel.app/',
        GitHub: 'https://github.com/arshtnkv/patientor-react/',
      },
      role: 'Frontend',
    },
    {
      name: 'Acme - Административная панель',
      image: '/projects/acme.png',
      about:
        'Учебный проект от Vercel, разработанный для практики создания серверных рендеринговых приложений (SSR). В процессе работы были отточены навыки работы с современными технологиями, такими как Next.js и TailwindCSS, а также реализация аутентификации через NextAuth.js.',
      tech: ['Next.js', 'NextAuth.js', 'Typescript', 'TailwindCSS', 'ESLint'],
      links: {
        Live: 'https://nextjs-dashboard-arshtnkvs-projects.vercel.app/',
        GitHub: 'https://github.com/arshtnkv/nextjs-dashboard',
      },
      role: 'Fullstack',
    },
    {
      name: 'Game store',
      image: '/projects/game-store.png',
      about: 'Система фильтрации и поиска игр на React',
      tech: ['React.js', 'Sass', 'Docker'],
      links: {
        Live: 'https://game-store-beta-nine.vercel.app/',
        GitHub: 'https://github.com/arshtnkv/game-store',
      },
      role: 'Frontend',
    },
    {
      name: 'Клуб четырёх коней',
      image: '/projects/club.png',
      about:
        'В рамках этого проекта я отточил навыки адаптивной вёрстки. Основной функционал включает: Динамический адаптив (позволяет перемещать необходимые блоки на заданных разрешениях в другие блоки и обратно); Якорные ссылки; Бегущая строка; Карусель в блоке "Этапы" на мобильной версии; Карусель с участниками турнира;',
      tech: ['Pug', 'Sass', 'ECMAScript 6', 'Gulp', 'Webpack'],
      links: {
        GitHub: 'https://github.com/arshtnkv/four-horse-club',
        Live: 'https://four-horse-club-eight.vercel.app/',
      },
      role: 'Frontend',
    },
    {
      name: 'Pubg masters way',
      image: '/projects/pubg.png',
      about:
        'Многостраничный сайт для турнира по Pubg mobile. Вёрстка данного проекта выполнена с учетом последующей интеграции шаблона в wordpress.',
      tech: ['Pug', 'Sass', 'ECMAScript 6', 'Gulp', 'Webpack', 'Wordpress'],
      links: {
        GitHub: 'https://github.com/arshtnkv/pubg-masters-way',
        Live: 'https://pubg-masters-way-arshtnkv.vercel.app/',
      },
      role: 'Fullstack',
    },
    {
      name: 'Jewellery: accelerator #3 [HTML Academy]',
      image: '/projects/jewellery.png',
      about:
        'Учебный проект, в рамках которого я отточил практические навыки, полученные во время учебы. Также данный проект является третьим шагом в грейдировании перед трудоустройством в аутсорс-компанию ООО "Ракета" (Лига А).',
      tech: ['Pug', 'Sass', 'ECMAScript 6', 'Gulp', 'Webpack', 'Wordpress'],
      links: {
        GitHub: 'https://github.com/arshtnkv/accelerator-level-3-jewellery',
        Live: 'https://accelerator-level-3-jewellery.vercel.app/',
      },
      role: 'Fullstack',
    },
    {
      name: 'Smart device: accelerator #2 [HTML Academy]',
      image: '/projects/smart-device.png',
      about:
        'Учебный проект, в рамках которого я отточил практические навыки, полученные во время учебы. Также данный проект является вторым шагом в грейдировании перед трудоустройством в аутсорс-компанию ООО "Ракета" (Лига А).',
      tech: ['Pug', 'Sass', 'ECMAScript 6', 'Gulp', 'Webpack', 'Wordpress'],
      links: {
        GitHub: 'https://github.com/arshtnkv/accelerator-level-2-smart-device',
        Live: 'https://smart-device-dusky.vercel.app/',
      },
      role: 'Fullstack',
    },
    {
      name: 'HTML и CSS. Адаптивная вёрстка и автоматизация',
      image: '/projects/pink.png',
      about: 'Учебный проект «Пинк»',
      tech: ['HTML', 'Less', 'ECMAScript 6', 'Gulp', 'Webpack', 'Wordpress'],
      links: {
        GitHub: 'https://github.com/arshtnkv/htmlacademy-level-2-pink-20',
        Live: 'https://pink-20-arshtnkv.vercel.app/index.html',
      },
      role: 'Fullstack',
    },
  ],
  links: [
    {
      name: 'GitHub',
      icon: 'github.svg',
      link: 'https://github.com/arshtnkv',
    },
    {
      name: 'Telegram',
      icon: 'telegram.svg',
      link: 'https://t.me/arshtnkv/',
    },
    {
      name: 'Mail me',
      icon: 'mail.svg',
      link: 'mailto:arshtnkv@gmail.com',
    },
  ],
};

export default data;
