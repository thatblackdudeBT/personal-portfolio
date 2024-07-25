import "./App.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
