import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//importing all pages
import Home from './pages/Home'
import Education from './pages/Education'
import Project from './pages/Project'
import Extras from './pages/Extras'

// importing components
import Footer from './components/Footer/Footer';

//importing all css
import './App.css';

//importing AOS library for animation (first install it by $ npm i aos)
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// aos library initialising here
AOS.init({
  duration: 1000 // here 1000 is millisecond for animation, more value more duration of animation
});

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/extras" element={<Extras />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
