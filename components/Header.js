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
                "w-full px-12 py-2 sticky top-0 bg-white dark:bg-slate-900 dark:text-white" +
                " " +
                (clientWindowHeight > 20 ? "shadow-lg" : "")
            }
        >
            <Nav className=""></Nav>
        </div>
    );
}
