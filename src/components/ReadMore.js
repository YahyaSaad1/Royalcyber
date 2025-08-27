import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function ReadMore(props) {
    return(
        <Link to={props.link} className={`${props.class} inline-flex items-center gap-1 text-blue-800 font-bold hover:text-orange-600 text-lg leading-[16px] transition-all duration-200`}>
            {props.title}
            <FontAwesomeIcon icon={faAnglesRight} />
        </Link>
    )
}