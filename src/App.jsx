import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
       

          <Route />

         <Route  path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
