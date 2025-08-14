import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";

const KnowMore = ({ to, theme, themeText }) => {
    // default styles if no theme is passed
    const bgClass = theme ? `bg-${theme}` : "bg-transparent";
    const textClass = themeText ? `text-${themeText}` : "text-white";

    return (
        <Link
            to={to}
            className="border border-white w-fit hover:-translate-y-1 transition-all duration-300 custom-learn-more-btn items-center flex gap-1 pl-1 rounded-xl"
        >
            <div className={`${bgClass} items-center flex py-2 px-4 gap-1 rounded-xl`}>
                <span className={`${textClass} button-text font-semibold`}>Read More</span>
                <div className="circle"></div>
                <div className={`arrow text-xl ${textClass}`}><MdArrowOutward /></div>
            </div>
        </Link>
    );
};

export default KnowMore;
