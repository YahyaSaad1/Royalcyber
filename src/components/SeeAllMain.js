import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function SeeAllMain(props){
    return(
        <Link to={props.link} className="flex justify-center gap-3 mt-8">
            <button className='border border-orange-600 group hover:bg-orange-600 focus:bg-orange-600 rounded-full text-center px-7 py-4 transition-all duration-200'>
                <span className='flex justify-center items-center gap-2 text-center text-orange-600 group-hover:text-white group-focus:text-white font-semibold text-base tracking-[1px] leading-[20.8px]'>
                    {props.title}
                    <FontAwesomeIcon className='text-orange-600 group-hover:text-white group-focus:text-white w-[17.5px] h-5 text-xl leading-[20px]' icon={faArrowRight} />
                </span>
            </button>
        </Link>
    )
}