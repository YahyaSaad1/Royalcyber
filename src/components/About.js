import CountUp from "react-countup";
import SeeAllMain from "./SeeAllMain";

export default function About(){
    return(
        <section className="py-10">
            <div className="2xl:mx-[160.5px] xl:mx-[35px] p-[10px] flex flex-col gap-5 justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-4xl leading-[32px]">About Us</h1>
                    <p className="text-2xl leading-[43.2px] mt-3">The Benefits of Choosing Our Expertise</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3 px-5">
                        <div className="p-3 m-3 border-b-2 border-neutral-500">
                            <span className="font-semibold text-6xl">
                                <CountUp end={20} duration={2} />
                            </span>
                            <span className="font-semibold text-6xl ml-1">+</span>
                            <p className="font-medium text-lg">Years of Experience</p>
                        </div>
                        <div className="p-3 m-3 border-b-2 border-neutral-500">
                            <span className="font-semibold text-6xl">
                                <CountUp end={500} duration={1} />
                            </span>
                            <span className="font-semibold text-6xl ml-1">+</span>
                            <p className="font-medium text-lg">Certified Resources</p>
                        </div>
                        <div className="p-3 m-3 border-b-2 border-neutral-500">
                            <span className="font-semibold text-6xl">
                                <CountUp end={2000} duration={1} />
                            </span>
                            <span className="font-semibold text-6xl ml-1">+</span>
                            <p className="font-medium text-lg">Employees Worldwide</p>
                        </div>
                        <div className="p-3 m-3 border-b-2 border-neutral-500">
                            <span className="font-semibold text-6xl">
                                <CountUp end={600} duration={1} />
                            </span>
                            <span className="font-semibold text-6xl ml-1">+</span>
                            <p className="font-medium text-lg">Clients Around the World</p>
                        </div>
                    </div>

                    <div className="h-[350px] m-3 mx-5 border-2 border-neutral-200 rounded-xl flex justify-center items-center bg-neutral-100 overflow-hidden">
                        <iframe
                            className="w-full h-full rounded-xl"
                            src={`https://www.youtube.com/embed/PIeok_gV-_Y`}
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <SeeAllMain title='Read More About Us' link='company/about-us' />
            </div>
        </section>
    )
}