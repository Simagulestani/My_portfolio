import freelanceImg from "../assets/freelance.png";
import schoolImg from "../assets/school.png";
import movieImg from "../assets/movie.png";

const projects = [
  {
    id: 1,
    title: "Freelance Invoice App",
    description:
      "A web-based application developed using HTML, CSS, and JavaScript. It helps freelancers manage clients and invoices efficiently.",
    details:
      "The application allows users to: Add and manage clients, create invoices, track paid and unpaid invoices, calculate total revenue, store data using localStorage, fetch random clients and motivational quotes from APIs.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6 Modules)", "Random User API", "ZenQuotes API"],
    image: freelanceImg,
    status: "Completed",
    featured: true,
    progress: 100,
    link: "#",
    github: "https://github.com/Simagulestani"
  },
  {
    id: 2,
    title: "School Student Portal",
    description:
      "Responsive School Student Portal website developed using HTML, CSS, and JavaScript.",
    details:
      "This project provides students with an easy way to navigate academic information through a clean and user-friendly interface.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: schoolImg,
    status: "Completed",
    featured: false,
    progress: 100,
    link: "#",
    github: "https://github.com/Simagulestani"
  },
  {
    id: 3,
    title: "Movie Theater",
    description:
      "A simple movie theater webpage created using HTML and CSS.",
    details:
      "Includes responsive layout, movie poster display, modern user interface, custom CSS styling.",
    technologies: ["HTML5", "CSS3"],
    image: movieImg,
    status: "Completed",
    featured: false,
    progress: 100,
    link: "#",
    github: "https://github.com/Simagulestani"
  }
];

export default projects;
