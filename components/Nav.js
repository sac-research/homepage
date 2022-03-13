import NavButton from "./NavButton";

export default function Nav() {
    return (
        <div className="flex justify-between">
            <NavButton navTarget="/" navText="Home"></NavButton>
            <NavButton navTarget="/members" navText="Members"></NavButton>
            <NavButton navTarget="/publications" navText="Publications"></NavButton>
            <NavButton navTarget="/events" navText="Events"></NavButton>
        </div>
    )
}