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
        "rounded-full p-4 transition-all font-normal hover:underline hover:decoration-emerald-400 decoration-4 underline-offset-4" +
        " " +
        (router.asPath === navTarget && router.asPath !== "/"
          ? "underline decoration-emerald-500 decoration-4 underline-offset-4"
          : "")
      }
    >
      {navText}
    </button>
  );
}
