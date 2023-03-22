import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Home />
        <About />
      </section>
        <Projects />
      <Contact />
    </div>
  );
}

export default App;