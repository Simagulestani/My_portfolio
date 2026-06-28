import freelanceImg from "../assets/freelance.png";
import schoolImg from "../assets/school.png";
import movieImg from "../assets/movie.png";

const projects = [
  {
    id: 1,
    title: "Freelance Invoice App",
    description: "A web-based application that helps freelancers manage clients and invoices efficiently.",
    details: "The application allows users to: Add and manage clients, create invoices, track paid and unpaid invoices, calculate total revenue, store data using localStorage, fetch random clients and motivational quotes from APIs.",
    problem: "Freelancers struggle to track invoices, manage clients, and calculate revenue manually, leading to disorganized finances and missed payments.",
    solution: "Built a full-featured invoice management app with client CRUD operations, invoice tracking, revenue calculation, and localStorage persistence — integrated with external APIs for enhanced functionality.",
    outcome: "Streamlined freelance financial management with an intuitive interface. The app provides real-time revenue insights and automated quote generation, reducing administrative overhead.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Random User API", "ZenQuotes API"],
    image: freelanceImg,
    status: "Completed",
    featured: true,
    progress: 100,
    link: "https://github.com/Simagulestani",
    github: "https://github.com/Simagulestani"
  },
  {
    id: 2,
    title: "School Student Portal",
    description: "Responsive School Student Portal website developed using HTML, CSS, and JavaScript.",
    details: "This project provides students with an easy way to navigate academic information through a clean and user-friendly interface.",
    problem: "Students lacked a centralized, responsive portal to access academic information, announcements, and resources efficiently across devices.",
    solution: "Designed and developed a fully responsive student portal with intuitive navigation, academic resource organization, and cross-device compatibility using vanilla HTML, CSS, and JavaScript.",
    outcome: "Improved student access to academic resources with a mobile-friendly interface that works seamlessly across desktop, tablet, and mobile devices.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: schoolImg,
    status: "Completed",
    featured: false,
    progress: 100,
    link: "https://github.com/Simagulestani",
    github: "https://github.com/Simagulestani"
  },
  {
    id: 3,
    title: "Movie Theater",
    description: "A simple movie theater webpage created using HTML and CSS.",
    details: "Includes responsive layout, movie poster display, modern user interface, custom CSS styling.",
    problem: "Small movie theaters need an online presence to showcase showtimes, movie posters, and attract customers without complex backend infrastructure.",
    solution: "Created a visually appealing, responsive movie theater landing page featuring movie poster displays, showtime layout, and modern CSS styling.",
    outcome: "Delivered a clean, professional web presence for a movie theater concept, demonstrating strong front-end design skills and responsive layout techniques.",
    technologies: ["HTML5", "CSS3"],
    image: movieImg,
    status: "Completed",
    featured: false,
    progress: 100,
    link: "https://github.com/Simagulestani",
    github: "https://github.com/Simagulestani"
  }
];

export default projects;
