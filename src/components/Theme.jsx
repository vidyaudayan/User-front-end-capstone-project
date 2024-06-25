
import React, { useEffect, useState } from 'react';
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
<IoMoon />

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
   {theme === 'light' ? <FaSun size={24} /> : <IoMoon size={24} />}
    </button>
  );
};

export default Theme;
