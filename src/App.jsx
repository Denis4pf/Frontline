import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';
import Login from './components/Login';
import Signup from './components/Signup';
import Project from './components/Project';
import AdminPage from './components/AdminPage';
import AnalyticCharts from './components/AnalyticCharts'
// import { Signup, Login } from './components/Auth';
// import AdminPanel from './AdminPanel';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
       

          <Route />
          <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AdminPage />} />
      {/* <PrivateRoute path="/admin" component={AdminPanel} isLoggedIn={isLoggedIn} /> */}
          <Route path="/home" element={<Home />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          {/* <Route path='/charts' element={<AnalyticCharts />} /> */}
          <Route path='/projects' element={<Project />} />

        

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
