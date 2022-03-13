import Nav from '../components/Nav'


export default function Header({ }) {
    return (
        <div>
        <div className="flex items-center">
            <img className="m-4" src="/logo_alt.jpg" width="100px" height="100px"></img>
            <div>
                <h1 className='text-4xl font-light'>SAC Research Group</h1>
                <h2 className="text-xl font-bold">Software System Architecture in Cloud Computing</h2>
            </div>
            </div>
            <div className="bg-teal-700 w-full p-2 mt-2 rounded">
                <Nav></Nav>
            </div>
        </div>
    )
}