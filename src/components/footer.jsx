

const Footer = () => {
    return (
        <div className=" bg-secondary dark:bg-gray-300 mt-32 md:mt-36 lg:mt-40">
            <div className="px-7 flex items-center justify-between py-8 md:px-10 lg:max-w-screen-xl lg:mx-auto lg:px-7">
                <h1 className="text-3xl font-medium text-primary">TT</h1>
                <p className="text-[.75rem] font-[300] w-[25em] lg:w-[30em] lg:text-[.8rem]">
                    Designed and developed by yours truly. built with react and tailwind CSS, 
                    depolyed with (vercel). All text is set in 
                    <span className="text-primary"> Poppins</span> typeface
                </p>
            </div>
        </div>
    )
}

export default Footer