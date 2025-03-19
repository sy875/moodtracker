
const Hero = () => {
    return (
        <div>
            <h2 className='text-2xl text-center pt-10 pb-4 text-blue-400 font-bold'>Welcome User</h2>
            <h3 className='text-center font-semibold '>
                {
                    `${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`
                }
            </h3>
        </div>
    )
}

export default Hero
