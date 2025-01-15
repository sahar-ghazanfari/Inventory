"use client";
import { useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return <button>{isDarkMode ? <FaRegMoon /> : <FaRegSun />}</button>;
}

export default DarkMode;
