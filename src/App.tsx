import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
 import AboutPage from './pages/About';
 import Skillspage from './pages/Skillspage';
 import Contactpage from './pages/Contactpage';
 import Projectspage from './pages/Projectspage';
// import Navbar from './components/Navbar';
import React from 'react';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/skills' element={<Skillspage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/projects' element={<Projectspage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
