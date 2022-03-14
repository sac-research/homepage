import Nav from "../components/Nav";

export default function Header({}) {
    return (
        <div>
            <div className="flex items-center">
                <img
                    className="m-4"
                    src="/logo_alt.jpg"
                    width="100px"
                    height="100px"
                ></img>
                <div>
                    <h1 className="text-4xl font-semibold">
                        SAC Research Group
                    </h1>
                    <h2 className="text-xl">
                        Software System Architecture in Cloud Computing
                    </h2>
                </div>
            </div>
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 w-full mt-2">
                <Nav></Nav>
            </div>
        </div>
    );
}
