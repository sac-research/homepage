import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className=" pb-24">
            {/* <div className="w-full flex justify-center items-center py-4 bg-purple-700 text-white">
                <h1>Currently being prototyped and redesigned.</h1>
            </div> */}
            <Header></Header>
            <div className="flex border-solid border-1 border-sky-500 flex-col w-full mx-auto">
                {children}
            </div>
        </div>
    );
}
