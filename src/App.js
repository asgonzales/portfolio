// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Home from './pages/Home/Home.jsx';
import Skills from './pages/Skills/Skills.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import Footer from './components/Footer/Footer.jsx';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
