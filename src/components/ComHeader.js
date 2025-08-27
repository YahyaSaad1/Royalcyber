export default function ComHeader(props){
    return(
        <div className="flex flex-col text-center items-center">
            <h2 className={`${props.classNameTitle} font-bold text-2xl`}>{props.title}</h2>
            <p className={`${props.classNameDesc} font-medium text-md mt-1`}>{props.desc}</p>
        </div>
    )
}