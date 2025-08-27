import { Link } from "react-router";
import logo_4 from '../images/Logo-4.svg';
import SeeAllMain from "./SeeAllMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import ReadMore from "./ReadMore";

export default function Video(){
    const items = [
        {type:'Video', image:logo_4, link:'INqq9blN9Bs', description:"New container service for multi-cloud deployments of Mule runtimes makes it simple for organizations to build application networks on their preference of data center or cloud."},
        {type:'Video', image:logo_4, link:'JKclBm_1ERo', description:"APIs are integral to modern digital ecosystems, driving communication between diverse systems and applications. As their importance grows, so do the risks they face. This webcast offered actionable insights into the evolving world of API security, highlighting best practices and techniques to protect against emerging threats."},
        {type:'Video', image:logo_4, link:'2kgi6PAdXF4', description:"Explore how the SAP AI Toolkit is revolutionizing CRM by delivering intelligent actions, personalized recommendations, and smarter tools for sales, service, and commerce. In this webcast, experts from Royal Cyber and SAP discuss the role of AI in modern CRM systems, showcase real-world success stories, and highlight emerging trends in customer experience technology."},
        {type:'Video', image:logo_4, link:'lXTwEOGY2rM', description:"APIs are integral to modern digital ecosystems, driving communication between diverse systems and applications. As their importance grows, so do the risks they face. This webcast offered actionable insights into the evolving world of API security, highlighting best practices and techniques to protect against emerging threats."},
    ]

    return(
        <section>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mx-5">
                {items.map((item, index)=>{
                    return(
                        <div key={index} className="flex flex-col gap-y-5 shadow-main p-[15px]">
                            <div className="h-[440px] xl:h-[240px] rounded-xl flex justify-center items-center bg-neutral-100 overflow-hidden">
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src={`https://www.youtube.com/embed/${item.link}`}
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="flex flex-col gap-y-5 justify-between h-full">
                                <div>
                                    <span className="text-xl leading-[27px] line-clamp-3">{item.description}</span>
                                </div>

                                <ReadMore title='Read More' link={item.link}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <SeeAllMain title='See All' link='videos' />
        </section>
    )
}