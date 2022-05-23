import { useRouter } from "next/router";

export default function NavBtn({ navText, navTarget }) {
    const router = useRouter();
    const handleNav = (e) => {
        e.preventDefault();
        router.push(navTarget);
    };

    return (
        <button
            onClick={handleNav}
            className={
                "rounded-full p-4 transition-all font-normal hover:underline hover:decoration-purple-400 decoration-2 underline-offset-2" +
                " " +
                (router.asPath === navTarget && router.asPath !== "/"
                    ? "underline decoration-purple-500 decoration-2 underline-offset-2"
                    : "")
            }
        >
            {navText}
        </button>
    );
}
