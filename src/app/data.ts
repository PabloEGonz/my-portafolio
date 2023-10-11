import airQuality from '../../public/airQuality.png';
import calculator from '../../public/calculator.png';
import xmas from '../../public/xmas.png';

const projects = [
  {
    name: 'Rent a Car Website',
    description:
      'This is a user-friendly web application for easy car rental, offering car listings, reservations, and management features.',
    paragraph:
      'This full-stack web application streamlines the process, allowing users to browse a curated list of available cars, access detailed car information, make reservations, add or remove car listings, and effortlessly manage reservations.',
    image: airQuality,
    techs: ['Ruby on Rails', 'React','Bootstrap', 'Jsx'],
    live: 'https://rent-a-car-front-end.onrender.com/',
    repo: 'https://github.com/PabloEGonz/full-stack-capstone-front-end',
  },
  {
    name: 'Bugget App',
    description:
      'This is a mobile web application where you can manage your budget',
    paragraph:
      "This user-friendly mobile web application takes the hassle out of budget management. By categorizing transactions, it provides a comprehensive view of your spending habits, empowering you to make more informed financial decisions. Whether you're tracking monthly expenses, managing personal spending, or planning for savings, this app puts the power of financial control at your fingertips.",
    image: airQuality,
    techs: ['HTML', 'Css', 'Bootstrap'],
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
    techs: ['React', 'Jsx', 'Bootstrap', 'HTML', 'CSS'],
    live: 'https://air-quality-app-r9g3.onrender.com/',
    repo: 'https://github.com/PabloEGonz/air-quality-app',
  },
  {
    name: 'Chinese Zodiac Animal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: airQuality,
    techs: ['Vite', 'TypeScript', 'Bootstrap', 'SCCS', 'HTML'],
    live: 'https://knowyourchinesezodiacanimal.netlify.app/',
    repo: 'https://github.com/PabloEGonz/chineseZodiac',
  },
  {
    name: 'Calculator Web App',
    description:
      'This is a calculator web application that uses an API to display quotes.',
    paragraph:
      "Math Magicians is a web app designed using React, a popular JavaScript library for building user interfaces, the calculator offers a clean and intuitive interface. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing users to perform calculations with ease. The React framework's component-based architecture ensures that the calculator is highly modular, making it easy to extend or customize its functionality. Additionally, the calculator incorporates responsive design principles, ensuring a seamless experience across various.",
    image: calculator,
    techs: ['React', 'Jsx', 'Bootstrap', 'CSS', 'HTML'],
    live: 'https://pabloegonz.github.io/math-magicians/',
    repo: 'https://github.com/PabloEGonz/math-magicians',
  },
  {
    name: 'December Countdown',
    description:
      'A December and Christmas countdown with anomations of snow falling',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: xmas,
    techs: ['HTML', 'Css', 'JavaScript'],
    live: 'https://decembercountdown.netlify.app/',
    repo: 'https://github.com/PabloEGonz/decemberCountdown',
  },
];

export default projects;
