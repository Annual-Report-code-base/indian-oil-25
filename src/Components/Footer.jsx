const Footer = () => {
    return (
        <footer className="text-white bg-[#09538f]">
            <div className=" marginal">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

                    {/* Company Logo */}
                    <div className="flex items-center">
                        <a href="https://granulesindia.com/" target="_blank" className="text-xl bg-white p-2 rounded-lg font-bold w-32">
                            <img src="/Granules_logo.png" alt="Logo" />
                        </a>
                    </div>

                    {/* Copyright Statement */}
                    <div className="text-md text-stone-200">
                        © {new Date().getFullYear()}  Granules India Limited.All Rights Reserved.
                    </div>

                    <div className="flex items-center space-x-2 text-md text-black">
                       
                        <a
                            href="https://kalolwala.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 hover:text-neutral-700 transition-colors duration-200"
                        >
                            <img
                                src="/ka-logo.png"
                                alt="K&A Developer Logo"
                                className="w-20 object-contain"
                            />
                           
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;