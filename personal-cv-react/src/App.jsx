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

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  const education = [
    {
      year: "2028",
      program: "BS Information Technology",
      institution: "USTP - CDO Campus"
    },
    {
      year: "2024",
      program: "Senior Highschool",
      institution: "Liceo De Cagayan"
    },
    {
      year: "2022",
      program: "Junior Highschool",
      institution: "Cagayan De Oro National Highschool"
    }
  ];

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
      <Skills skills={skills} />
      <Education education={education}/>
      <Contact />

    </div>
  );
}

export default App;