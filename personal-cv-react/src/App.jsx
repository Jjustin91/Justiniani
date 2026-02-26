import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div>
      <button 
        className='btn' 
        id="themeToggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;