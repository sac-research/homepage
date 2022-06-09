import NavBtn from "./NavBtn";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/solid";

export const ThemeSwitcher = () => {
    return (
        <div className="flex h-12 text-slate justify-center dark:transparent dark:border-gray-500 border rounded-3xl">
            <button
                type="button"
                aria-label="Use Dark Mode"
                onClick={() => {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("theme", "dark");
                }}
                className="rounded-l-3xl flex items-center dark:bg-primary justify-center align-center transition dark:text-blue-500 hover:bg-purple-500 hover:dark:bg-transparent px-4"
            >
                Dark
            </button>

            <button
                type="button"
                aria-label="Use Light Mode"
                onClick={() => {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("theme", "light");
                }}
                className="rounded-r-3xl flex items-center bg-primary dark:bg-transparentjustify-center align-center transition dark:text-white text-purple-600 hover:dark:bg-blue-500 px-4"
            >
                Light
            </button>
        </div>
    );
};

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

    return (
        <div className={"flex justify-between align-middle-center items-center"}>
            <div>
                <h1 className="font-bold hover:text-purple-500 text-4xl transition-all ease-in-out">
                    <button
                        className="font-bold"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/");
                        }}
                    >
                        ~/SAC <span className="md:inline hidden">Research Group</span>
                    </button>
                </h1>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
                <NavBtn navTarget="/members" navText="Members"></NavBtn>
                <NavBtn navTarget="/publications" navText="Publications"></NavBtn>
                <NavBtn navTarget="/projects" navText="Projects"></NavBtn>
                <NavBtn navTarget="/events" navText="Events"></NavBtn>
                <ThemeSwitcher></ThemeSwitcher>
            </div>
            <div className="flex md:hidden -mr-8">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md items-center text-sm dark:bg-black bg-opacity-20 px-12 py-2 font-medium dark:text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <MenuIcon
                                className="h-5 w-5 text-violet-200 hover:text-violet-100"
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
