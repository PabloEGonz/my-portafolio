import airQuality from '../../public/airQuality.png';
import calculator from '../../public/calculator.png';
import xmas from '../../public/xmas.png';
import rentCar from '../../public/rentCar.png';
import chineseZodiac from '../../public/chineseZodiac.png';
import budget from '../../public/budget.png';

const projects = [
  {
    name: 'Rent a Car Website',
    description:
      'This is a user-friendly web application for easy car rental, offering car listings, reservations, and management features.',
    paragraph:
      'This full-stack web application streamlines the process, allowing users to browse a curated list of available cars, access detailed car information, make reservations, add or remove car listings, and effortlessly manage reservations.',
    image: rentCar,
    techs: ['Ruby on Rails', 'React', 'Bootstrap', 'JSX'],
    live: 'https://rent-a-car-front-end.onrender.com/',
    repo: 'https://github.com/PabloEGonz/full-stack-capstone-front-end',
  },
  {
    name: 'Bugget App',
    description:
      'This is a mobile web application where you can manage your budget.',
    paragraph:
      "This user-friendly mobile web application takes the hassle out of budget management. By categorizing transactions, it provides a comprehensive view of your spending habits, empowering you to make more informed financial decisions. Whether you're tracking monthly expenses, managing personal spending, or planning for savings.",
    image: budget,
    techs: ['Ruby on Rails', 'ERB', 'CSS3', 'Bootstrap'],
    live: 'https://budget-app-13xl.onrender.com/',
    repo: 'https://github.com/PabloEGonz/bugget-app',
  },
  {
    name: 'Air Quality Web App',
    description:
      'This web app allows you to easily monitor the air quality of different cities.',
    paragraph:
      'This web app provides users with an easy way to monitor air quality in different cities. Users can view air quality information for each city, add new cities, remove cities, and learn about the parameters used to determine air quality levels.',
    image: airQuality,
    techs: ['React', 'JSX', 'Bootstrap', 'CSS3'],
    live: 'https://air-quality-app-r9g3.onrender.com/',
    repo: 'https://github.com/PabloEGonz/air-quality-app',
  },
  {
    name: 'Chinese Zodiac Animal',
    description: 'Web app to discover what zodiac animal you are.',
    paragraph:
      'This is a webpage that tells you what Chinese zodiac sign you are, you have to enter your date of birth and it will show your zodiac animal.',
    image: chineseZodiac,
    techs: ['Vite', 'TypeScript', 'Bootstrap', 'SCCS'],
    live: 'https://knowyourchinesezodiacanimal.netlify.app/',
    repo: 'https://github.com/PabloEGonz/chineseZodiac',
  },
  {
    name: 'Calculator Web App',
    description:
      'This is a calculator web application that uses an API to display quotes.',
    paragraph:
      'Math Magicians is a web app designed using React, the calculator offers a clean and intuitive interface. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing users to perform calculations with ease. Additionally, the calculator incorporates responsive design principles, ensuring a seamless experience across various.',
    image: calculator,
    techs: ['React', 'JSX', 'Bootstrap', 'CSS3'],
    live: 'https://pabloegonz.github.io/math-magicians/',
    repo: 'https://github.com/PabloEGonz/math-magicians',
  },
  {
    name: 'December Countdown',
    description:
      'A December and Christmas countdown with anomations of snow falling.',
    paragraph:
      'A handy tool to keep track of the days leading up to December. Get excited as you watch the countdown timer ticking closer to the holiday season.',
    image: xmas,
    techs: ['HTML', 'CSS3', 'JavaScript'],
    live: 'https://decembercountdown.netlify.app/',
    repo: 'https://github.com/PabloEGonz/decemberCountdown',
  },
];

export default projects;
