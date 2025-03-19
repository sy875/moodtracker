
const Navbar = () => {
    return (
        <nav className='w-full bg-sky-200 h-20 p-2 flex justify-between items-center'>
            <img
                className='rounded-full w-16 md:w-20 p-2 cursor-pointer'
                src="/navlogo.png"
                alt="navlogo"
            />
            <ul className='flex gap-6 px-4 mr-4 items-center '>
                <li className='hover:text-white font-semibold cursor-pointer'> Home</li>
                <li className='hover:text-white font-semibold cursor-pointer'> About </li>
            </ul>
        </nav>
    )
}

export default Navbar
