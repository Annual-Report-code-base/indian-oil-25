const Footer = () => {
    return (
        <footer className="text-white bg-[#02174f] flex ">
            <div className="md:w-[10%] flex py-4 bg-white border-t border-b border-[#02174f] justify-center">
                {/* Company Logo */}
                <div className="flex h-full items-center">
                    <a href="https://iocl.com/" target="_blank" className="text-xl p-2 rounded-lg font-bold w-20">
                        <img src="/Indian-oil-logo.webp" alt="Logo" />
                    </a>
                </div>
            </div>
            <div className="md:w-[90%] flex justify-center">
                <div className="flex marginal  flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0">
                    {/* Copyright Statement */}
                    <div className="text-md text-stone-200">
                        © {new Date().getFullYear()}  Indian Oil Corporation Ltd. | All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;