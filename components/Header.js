import Nav from "../components/Nav";
import { useCallback, useEffect, useState } from "react";

export default function Header({}) {
    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    return (
        <div
            className={
                "w-4/5 px-12 py-2 sticky bg-white dark:bg-slate-900 dark:text-white rounded-lg transition-all ease-in-out" +
                " " +
                (clientWindowHeight > 20 ? "shadow-lg dark:shadow-2xl top-4" : "top-0")
            }
        >
            <Nav className=""></Nav>
        </div>
    );
}
