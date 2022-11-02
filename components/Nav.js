import NavBtn from "./NavBtn";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Image from "next/image";

import logo from '../public/sac-logo.png'

function MenuItem({ path, pageName }) {
    const router = useRouter();
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    className={`${
                        active
                            ? "bg-sky-500 text-white dark:text-gray-900"
                            : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/" + path);
                    }}
                >
                    {pageName}
                </button>
            )}
        </Menu.Item>
    );
}

export default function Nav() {
    const router = useRouter();

    const [themeBtnTxt, setThemeBtnTxt] = useState('light');

    return (
        <div className={"flex justify-between align-middle-center items-center"}>
            <div>
                <h1 className="font-bold hover:text-emerald-500 text-2xl transition-all ease-in-out">
                    <button
                        className="font-bold flex space-x-4 justify-center items-center"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/");
                        }}
                    >
                        <Image src={logo} height={50} width={70}></Image>
                        <span className="md:inline hidden">SAC Research Group</span>
                    </button>
                </h1>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
                <NavBtn navTarget="/members" navText="Members"></NavBtn>
                <NavBtn navTarget="/publications" navText="Publications"></NavBtn>
                <NavBtn navTarget="/projects" navText="Projects"></NavBtn>
                <NavBtn navTarget="/events" navText="Events"></NavBtn>
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
                    onClick={() => {
                        if (localStorage.getItem("theme") === "dark") {
                            document.documentElement.classList.remove("dark");
                            localStorage.setItem("theme", "light");
                            setThemeBtnTxt("light");
                        } else {
                            document.documentElement.classList.add("dark");
                            localStorage.setItem("theme", "dark");
                            setThemeBtnTxt("dark");
                        }
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-gray-900 dark:text-gray-100"
                    >
                        {themeBtnTxt === "dark" ? (
                            <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"
                            />
                        ) : (
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        )}
                    </svg>
                </button>
            </div>
            <div className="flex md:hidden -mr-8">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md items-center text-sm dark:bg-black bg-opacity-20 px-12 py-2 font-medium dark:text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <MenuIcon
                                className="h-5 w-5 text-neutral-500 hover:text-neutral-700"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y dark:bg-slate-900 dark:text-white divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <MenuItem path="members" pageName="Members" />
                                <MenuItem path="publications" pageName="Publications" />
                                <MenuItem path="projects" pageName="Projects" />
                                <MenuItem path="events" pageName="Events" />
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
}
