import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Experience />
      <AboutMe />
    </div>
  );
}

export default App;
