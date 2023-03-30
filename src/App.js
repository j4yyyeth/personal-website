import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Blank from './components/Blank';
import Blank2 from './components/Blank2';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Blank />
      <section>
        <Home />
        <About />
      </section>
      <Blank2 />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;