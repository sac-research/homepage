import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="relative pb-24 overflow-hidden">
            <Header></Header>
            <div className="flex border-solid border-1 border-sky-500 flex-col mx-4 w-full mx-auto">
                {children}
            </div>
        </div>
    );
}
