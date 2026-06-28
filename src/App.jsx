import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Publications from "./components/Publications";


function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <UserProvider>
          <ScrollProgress />
          <Navbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailsPage />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Contact />
          <Footer />
        </UserProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
