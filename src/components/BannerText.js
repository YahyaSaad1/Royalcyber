export default function BannerText({banner, title, desc, className}){

    return(
        <div className="relative w-full h-[500px] pt-[88px]">
            <img className="absolute inset-0 w-full h-full object-cover z-0" src={banner} alt="banner" />
            <div className={`relative z-10 flex flex-col justify-center ${className} text-white h-full px-8 md:px-20 lg:px-20 xl:px-16`}>
                <h2 className="text-7xl font-bold mb-2">{title}</h2>
                <p className="text-xl mt-3">{desc}</p>
            </div>
        </div>
    )
}