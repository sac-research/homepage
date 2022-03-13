import {useRouter} from 'next/router'

export default function NavButton({ navText, navTarget }) {
    const router = useRouter()
    const handleNav = (e) => {
        e.preventDefault()
        router.push(navTarget)
    }

    return <button onClick={handleNav} className="hover:bg-teal-500 text-white font-bold rounded p-2">{navText}</button>
}