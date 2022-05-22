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
				" rounded-full p-4 transition-all font-normal hover:border-black border border-transparent" +
				" " +
				(router.asPath === navTarget && router.asPath !== "/" ? "border-black" : "")
			}
		>
			{navText}
		</button>
	);
}
