import { useEffect, useState } from "react";
import { IoToggle } from "react-icons/io5";
import { LiaToggleOffSolid } from "react-icons/lia";


const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <button
            className="text-4xl text-black dark:text-white"
            onClick={toggleTheme}
        >
            {theme === "light" ? <LiaToggleOffSolid /> : <IoToggle />}
        </button>
    );
};

export default ThemeToggle;
