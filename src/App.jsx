import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;