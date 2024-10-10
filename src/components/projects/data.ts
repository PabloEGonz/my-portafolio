const projects = [
  {
    name: 'Mental Health Website',
    description:
      'I created a website for professional who offer axiety coaching services. It includes a homepage, testimonials, services, blog, and contact pages, all designed with responsiveness for optimal viewing on any device.',
    image: '/anxietyWebsite.png',
    techs: [
      'Framer',
      'React',
      'CSS',
      'CMS',
    ],
    live: 'https://anxietycoach.ing',
    cards: {
      a: {
        title: 'Components Design & Animation',
        text: "I created custom components using Framer, ensuring an engaging user experience. I also implemented animations to enhance the site's visual appeal and user interaction.",
      },
      b: {
        title: 'Responsive Design',
        text: 'I developed the website ensuring responsiveness across all devices. This included optimizing the layout for mobile, tablet, and desktop, ensuring a nice user experience regardless of the device.',
      },
    },
  },
  {
    name: 'Chartering Company Website',
    description:
      'I developed a custom child theme for a cargo transportation company to display water level data based on specific locations. It integrates with an API to fetch real-time data, which is then stored in a database for historical access.',
    image: '/waterLevel.png',
    techs: [
      'WordPress',
      'Elementor',
      'CSS',
      'PHP',
      'SQL',
      'Crone Jobs',
      'REST API Integration',
    ],
    live: 'https://armarisbevrachtingen.com/',
    cards: {
      a: {
        title: 'API Integration & Data Storage',
        text: "I creted a script to fetch the locations from the database then, a helper class is used to fetch data using the UUID for each location, it pulls the lastest data and check if it is already in the database, if it's not it's stored",
      },
      b: {
        title: 'Crone Job & Data Updates',
        text: 'I set up a cron job to fetch data once a day, this cron job runs the script that fetches the data from the API and stores it in the database for historical access, allowing users to view water levels for specific locations over time.',
      },
    },
  },
  {
    name: 'Event Planning Website',
    description:
      'I built a static website for a company offering private event assistance. It includes a homepage, about, services, and contact pages, all designed with responsiveness for optimal viewing on any device.',
    image: '/events.jpg',
    techs: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Redux',
      'Framer Motion',
      'Flowbite',
      'Daisy UI',
    ],
    live: 'https://partyeventsbyaio.com/',
    cards: {
      a: {
        title: 'Google Tag Manager Integration',
        text: 'I set up Google Tag Manager to integrate with Google Ads. I successfully created campaigns that track phone conversions and manage search ads.',
      },
      b: {
        title: 'Dynamic and Responsive Experience',
        text: 'Built with Next.js, it benefits from server-side rendering for faster load times and improved SEO, while the static build ensures smooth navigation across all devices.',
      },
    },
  },
  {
    name: 'Furniture Website',
    description:
      " I created a modern static website for a wood furniture company. It features a homepage, about page, and product pages, showcasing the company's offerings with a sleek, contemporary design.",
    image: '/furniture.png',
    techs: ['React', 'Vite', 'TypeScript', 'Tailwind', 'CSS', 'React Router'],
    live: 'https://galeriacincoestrellas.com/',
    cards: {
      a: {
        title: 'Cutting-Edge Technologies',
        text: 'Built with React powered by Vite, and TypeScript for efficient development. I employed Tailwind and CSS to achieve a minimalist design and ensure a smooth user experience.',
      },
      b: {
        title: 'Optimized Performance ',
        text: 'I developed focusing on maintaining high performance despite a large volume of images. By using best practices, I optimized the site for fast load times and smooth user experience, ensuring that the extensive imagery did not compromise performance',
      },
    },
  },
  {
    name: 'Bakery E-commerce Website',
    description:
      'A full-stack e-commerce website for a French bakery, offering a wide range of baked goods. It features product browsing, a shopping cart, checkout process, and a user panel for viewing orders and customer details.',
    image: '/bakery.jpg',
    techs: [
      'Ruby on Rails',
      'PostgreSQL',
      'Ruby',
      'Tailwind',
      'CSS',
      'JavaScript',
      'Devise',
    ],
    repo: 'https://github.com/PabloEGonz/boulangerie-e-commerce',
    cards: {
      a: {
        title: 'Backend & Database',
        text: 'I used Ruby on Rails and PostgreSQL for the backend for this e-commerce. I integrated Devise for a secure user authentication.',
      },
      b: {
        title: 'Frontend & Ruby',
        text: 'Using Tailwind for modern, responsive styling. I also used Ruby for implementing the logic, ensuring a seamless and engaging user experience.',
      },
    },
  },
  {
    name: 'Tasks Tracker App',
    description:
      'A task management web app where users can be either bosses or employees. Bosses assign tasks to employees, which appear on their dashboards. Employees can track and complete tasks, with progress automatically updated to reflect completion.',
    image: '/employees-tasks.png',
    techs: [
      'Heroku',
      'Micro Services',
      'Ruby on Rails',
      'MVC',
      'PostgreSQL',
      'Ruby',
      'Tailwind',
      'Devise',
    ],
    demo: 'https://youtube.com/shorts/3W_7w6Ud-pM',
    cards: {
      a: {
        title: 'PostgreSQL on Heroku',
        text: 'Deployed the database on Heroku. Configured the app for seamless database management, ensuring scalability and performance in a cloud environment.',
      },
      b: {
        title: 'Automated Task Renewal',
        text: 'Tasks automatically regenerate based on their set frequency (daily, weekly, etc.), eliminating the need for manual recreation. Once an employee completes a task, a new instance is created, ensuring ongoing task management with minimal effort.',
      },
    },
  },
  {
    name: 'Budget App',
    description:
      'A web application for easy budget management. It categorizes transactions, helping you track spending habits and make informed financial decisions.',
    image: '/budget.png',
    techs: [
      'Ruby on Rails',
      'PostgreSQL',
      'RSpec',
      'Capybara',
      'Selenium',
      'Ruby',
      'CSS3',
      'Bootstrap',
    ],
    demo: 'https://youtube.com/shorts/XtVQWQnDUzU',
    repo: 'https://github.com/PabloEGonz/bugget-app',
    cards: {
      a: {
        title: 'Backend Development with TDD',
        text: 'I employed Test-Driven Development with Capybara, Selenium, and RSpec to ensure a reliable functionality.',
      },
      b: {
        title: 'Mobile-First Design and User Experience',
        text: 'I employed a mobile-first design strategy with CSS3 and Bootstrap. This approach ensures a responsive and user-friendly experience across various devices, optimizing the application for usability and accessibility',
      },
    },
  },
  {
    name: 'Air Quality Web App',
    description:
      'This web app allows you to monitor air quality across various cities. You can view air quality data, add or remove cities, and learn about the parameters used to assess air quality.',
    image: '/airQuality.png',
    techs: [
      'React',
      'Redux',
      'React Router',
      'Axios',
      'Bootstrap',
      'CSS3',
      'Jest',
    ],
    live: 'https://cities-air-quality-pg.netlify.app/',
    repo: 'https://github.com/PabloEGonz/air-quality-app',
    cards: {
      a: {
        title: "API's & State Management",
        text: 'I integrated two APIs: one for fetching city data and another for retrieving air quality data, handled through Axios, the state is managed with Redux Toolkit.',
      },
      b: {
        title: 'Frontend Testing',
        text: 'I ensured code reliability by writing tests using Jest. This included snapshot testing for UI consistency, mocking API calls to simulate real-world scenarios, and DOM testing to validate user interactions.',
      },
    },
  },
  // {
  //   name: 'Chinese Zodiac Animal',
  //   description:
  //     'This is a webpage that tells you what Chinese zodiac sign you are, you have to enter your date of birth and it will show your zodiac animal.',
  //   image: '/chineseZodiac.png',
  //   techs: ['Vite', 'TypeScript', 'Bootstrap', 'SCCS', 'Redux', 'React Router'],
  //   live: 'https://knowyourchinesezodiacanimal.netlify.app/',
  //   repo: 'https://github.com/PabloEGonz/chineseZodiac',
  //   cards: {
  //     a: {
  //       title: 'Code Logic and Third-Party Integration',
  //       text: 'I developed the core logic using TypeScript, I also integrated third-party libraries to streamline development and enhance functionality.',
  //     },
  //     b: {
  //       title: 'State Management',
  //       text: 'I used Redux to manage state and ensure seamless data flow throughout the application. This allowed for efficient data management and a smooth user experience.',
  //     },
  //   },
  // },
  // {
  //   name: 'December Countdown',
  //   description:
  //     'A handy tool to keep track of the days leading up to December. Get excited as you watch the countdown timer ticking closer to the holiday season.',
  //   image: '/xmas.png',
  //   techs: ['Webpack', 'HTML', 'CSS3', 'JavaScript'],
  //   live: 'https://decembercountdown.netlify.app/',
  //   repo: 'https://github.com/PabloEGonz/decemberCountdown',
  //   cards: {
  //     a: {
  //       title: 'Events Website',
  //       text: 'As a freelance web developer, I was hired to create this static website for a company providing assistance for private events.',
  //     },
  //     b: {
  //       title: 'Tech Stack',
  //       text: 'React, Next.js, TypeScript, Tailwind, Redux',
  //     },
  //   },
  // },
];

export default projects;
