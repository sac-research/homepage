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
  return <Nav className=""></Nav>;
}
