import ReadMore from "./ReadMore";
import icon_1 from '../images/event-1.png';
import icon_2 from '../images/event-2.svg';
import icon_3 from '../images/event-3.png';
import { useState } from "react";
import SeeAllMain from "./SeeAllMain";
import { Link } from "react-router";

export default function Events(){
    const [activeIndex, setActiveIndex] = useState('Conferences');
    const buttons = ['Conferences', 'In-Person Events', 'Webinars'];

    const items = [
        {title:'Share Cleveland 2025', image:icon_1, date:'August 17th–21th, 2025', time:'5:00 PM', place:'Cleveland', link:'share-conference-2025-mainframe-modernization', description:"Automate mainframe information systems to accelerate service delivery and problem resolution. Modernize Your Mainframe Application with Rational Tools. Our team of experts are here to help your organization & are always available 24/7 to meet your business objectives."},
        {title:'Opticon Conference 2025', image:icon_2, date:'September 10th, 2025', time:'12:00 PM', place:'New York', link:'opticon-2025-royal-cyber', description:"At Royal Cyber, we keep our clients ahead of the competition with personalized support and innovative tools. With over 20+ years of digital commerce experience and the trust of several Fortune 500 companies, we turn our experience into new opportunities and exciting products for our clients."},
        {title:'EDUCAUSE Annual Conference', image:icon_3, date:'October 27th - 30th, 2025', time:'12:00 PM', place:'Nashville', link:'events.educause.edu/annual-conference/2025',description:"Digital transformation is the trending goal to achieve your desired ROI, & Robotic Process Automation can accomplish this journey. We help organizations integrate technologies like Machine Learning (ML) & Artificial Intelligence (AI) with RPA development to revamp & digitalize the entire business ecosystem."},
    ]

    return(
        <section className="py-10">
            <div className="2xl:mx-[160.5px] xl:mx-[35px] p-[10px] flex flex-col gap-5 justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-4xl leading-[32px]">Upcoming Events</h1>
                </div>

                <div className="flex justify-center gap-5">
                    {buttons.map((button)=>{
                        return(
                            <button key={button}
                            onClick={() => setActiveIndex(button)}
                            className={`border border-neutral-400 group hover:bg-orange-600 focus:bg-orange-600 rounded-full text-center px-5 py-3 transition-all duration-200
                                        ${activeIndex === button? 'bg-orange-600': 'hover:bg-orange-600 focus:bg-orange-600'}
                            `}>
                                <span
                                className={`font-semibold text-base tracking-[1px] leading-[20.8px] whitespace-nowrap 
                                            ${activeIndex === button ? 'text-white' : 'text-neutral-500 group-hover:text-white group-focus:text-white'}`}>
                                    {button}
                                </span>
                            </button>
                        )
                    })}
                </div>

                <div className="grid grid-col-1 lg:grid-cols-3 gap-5 mt-8">
                    {items.map((item, index)=>{
                        return(
                            <div className="bg-red-100 bg-white rounded-xl p-7 flex flex-col gap-5 text-black">
                                <div className="flex flex-col gap-3">
                                    <Link className="h-[50px] flex items-center" to={item.link}>
                                        <img className="w-1/2" src={item.image} alt={item.image} />
                                    </Link>
                                    <h2 className="font-bold text-lg leading-[28.8px]">{item.title}</h2>
                                </div>
                                <p className="line-clamp-3">{item.description}</p>
                                <ReadMore title='Register Now' link={item.link}/>
                            </div>
                        )
                    })}
                </div>
                <SeeAllMain title='See All Events' link='company/news-events/upcoming-events'/>
            </div>
        </section>
    )
}