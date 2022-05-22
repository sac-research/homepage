import NavBtn from "./NavBtn";
import { useRouter } from "next/router";

export default function Nav() {
	const router = useRouter();
	return (
		<div className="flex justify-between align-middle-center">
			<div>
				<h1 className="font-bold text-4xl">
					<button
						className="font-bold"
						onClick={(e) => {
							e.preventDefault();
							router.push("/");
						}}
					>
						SAC Research Group
					</button>
				</h1>
			</div>
			<div className="flex space-x-4">
				<NavBtn navTarget="/members" navText="Members"></NavBtn>
				<NavBtn navTarget="/publications" navText="Publications"></NavBtn>
				<NavBtn navTarget="/events" navText="Events"></NavBtn>
			</div>
		</div>
	);
}
