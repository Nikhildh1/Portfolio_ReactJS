import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ConnectWithMe from './components/Connect/ConnectWithMe';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience/>} />
      </Routes>
    </Router>
  );
}

export default App;