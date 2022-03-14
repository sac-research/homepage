import { useRouter } from "next/router";

export default function NavButton({ navText, navTarget }) {
    const router = useRouter();
    const handleNav = (e) => {
        e.preventDefault();
        router.push(navTarget);
    };

    return (
        <button
            onClick={handleNav}
            className={
                "hover:bg-teal-800 text-white p-2 transition-all" +
                " " +
                (router.asPath === navTarget && router.asPath !== "/"
                    ? "bg-teal-800"
                    : "")
            }
        >
            {navText}
        </button>
    );
}
