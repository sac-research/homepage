import React from "react";
import Header from "../Header";

export default function Layout({ children }) {
    return (
        <div data-theme="sacTheme" className="min-h-screen flex flex-col justify-between">
            <div className="w-screen h-full max-w-screen md:px-[10%] py-[5%] p-2 overflow-hidden">
                <Header></Header>
                {children}
            </div>
            <div className="footer items-center p-4 bg-neutral text-neutral-content justify-center">
                <div>Copyright &copy; 2022 - All right reserved</div>
            </div>
        </div>
    );
}
