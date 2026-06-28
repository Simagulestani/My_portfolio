import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGitAlt, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase, SiTypescript } from "react-icons/si";

const skills = [
  {
    id: 1,
    icon: FaHtml5,
    name: "HTML5",
    level: "Advanced",
    details: "Semantic markup, accessibility-first structure, and modern HTML standards."
  },
  {
    id: 2,
    icon: FaCss3Alt,
    name: "CSS3",
    level: "Advanced",
    details: "Responsive layouts, Flexbox/Grid, animations, and custom properties."
  },
  {
    id: 3,
    icon: SiJavascript,
    name: "JavaScript",
    level: "Advanced",
    details: "ES6+, async/await, DOM manipulation, and API integration."
  },
  {
    id: 4,
    icon: FaReact,
    name: "React",
    level: "Advanced",
    details: "Hooks, Context API, React Router, reusable components, and state management."
  },
  {
    id: 5,
    icon: SiTypescript,
    name: "TypeScript",
    level: "Intermediate",
    details: "Type safety, interfaces, generics, and improving code maintainability."
  },
  {
    id: 6,
    icon: FaNodeJs,
    name: "Node.js",
    level: "Intermediate",
    details: "Server-side JavaScript, REST APIs, and backend fundamentals."
  },
  {
    id: 7,
    icon: FaGitAlt,
    name: "Git & GitHub",
    level: "Advanced",
    details: "Version control, collaborative workflows, and open-source contributions."
  },
  {
    id: 8,
    icon: FaJava,
    name: "Java",
    level: "Intermediate",
    details: "Object-oriented programming, data structures, and GUI applications."
  },
  {
    id: 9,
    icon: SiFirebase,
    name: "Firebase",
    level: "Beginner",
    details: "Authentication, Firestore database, and cloud deployment basics."
  }
];

export default skills;
