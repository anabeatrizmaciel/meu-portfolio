import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
};

export default App;
