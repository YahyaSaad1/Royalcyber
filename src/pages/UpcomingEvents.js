import { Link } from "react-router";
import blog_1 from '../images/blog-1.jpg';
import blog_2 from '../images/blog-2.jpg';
import blog_3 from '../images/blog-3.jpg';
import banner from '../images/upcoming-events-banner.jpg';
import ReadMore from "../components/ReadMore";
import { useState } from "react";
import BannerText from "../components/BannerText";

export default function UpcomingEvents(){
    const [activeIndex, setActiveIndex] = useState('All');
    const buttons = ['All', 'Conference', 'Webinar', 'In-Person Event'];
console.log(activeIndex)
    const items = [
        {title: 'vvvvvvvvvv', type:'Conference', image:blog_1, link:'bloformation', date:'Ju5', description:"Mainfrst"},
        {title: 'vvvvvvvvvv', type:'Webinar', image:blog_2, link:'bloide', date:'Jul5', description:"Cyber"},
        {title: 'vvvvvvvvvv', type:'In-Person Event', image:blog_3, link:'bloation', date:'Ju25', description:"ServiceNow AI Agents: How to Become an AI-powered Enterprise"},
        {title: 'vvvvvvvvvv', type:'Conference', image:blog_3, link:'bloation', date:'Ju25', description:"Share Cleveland 2025"},
        {title: 'vvvvvvvvvv', type:'Webinar', image:blog_3, link:'bloation', date:'Ju25', description:"See Agentic AI Drive Results: Live Demos Across Key Industri..."},
        {title: 'vvvvvvvvvv', type:'In-Person Event', image:blog_3, link:'bloation', date:'Ju25', description:"Build Real-Time AI Agents with Databricks"},
        {title: 'vvvvvvvvvv', type:'Conference', image:blog_3, link:'bloation', date:'Ju25', description:"Unlocking AI at Scale on GCP: Multi-Agent Systems with MCP &..."},
        {title: 'vvvvvvvvvv', type:'Webinar', image:blog_3, link:'bloation', date:'Ju25', description:"Modernize Your IT Operations with IBM Cloud Pak for AIOps"},
        {title: 'vvvvvvvvvv', type:'In-Person Event', image:blog_3, link:'bloation', date:'Ju25', description:"SAP Digital Learning Workshops by Experts"},
        {title: 'vvvvvvvvvv', type:'Conference', image:blog_3, link:'bloation', date:'Ju25', description:"Fabric Analyst in a Day"},
        {title: 'vvvvvvvvvv', type:'Conference', image:blog_3, link:'bloation', date:'Ju25', description:"Fabric Analyst in a Day"},
        {title: 'vvvvvvvvvv', type:'Conference', image:blog_3, link:'bloation', date:'Ju25', description:"Fabric Analyst in a Day"},
        {title: 'vvvvvvvvvv', type:'Conference', image:blog_3, link:'bloation', date:'Ju25', description:"Fabric Analyst in a Day"},
        {title: 'vvvvvvvvvv', type:'Conference', image:blog_3, link:'bloation', date:'Ju25', description:"Fabric Analyst in a Day"},
    ]

    return(
        <div>
            <BannerText banner={banner} title='Upcoming Events' desc='Get the latest event information about industry related events participated and organized by Royal Cyber. Navigating through the list of upcoming events below.' className='text-center' />
            <div className="py-16 px-8 xl:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
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


                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">
                    {items
                    .filter((item) => activeIndex === "All" || item.type === activeIndex)
                    .map((item, index)=>{
                        return(
                            <div key={index} className="flex flex-col gap-y-5 shadow-main overflow-hidden">
                                <Link to={item.link} className="h-[190px] rounded-xl flex justify-center items-center bg-neutral-100">
                                    <img className="w-[100%] h-[100%]" src={item.image} alt={item.image} />
                                </Link>

                                <div className="flex flex-col justify-between px-5 h-full">
                                    <div>
                                        <h2 className="font-bold text-2xl">{item.title}</h2>
                                    </div>

                                    <div className="flex flex-col gap-y-3 pb-5">
                                        <div>
                                            <span className="font-semibold">{item.date}</span>
                                        </div>

                                        <div>
                                            <span className="text-xl leading-[27px]">{item.description}</span>
                                        </div>

                                        <ReadMore title='Register Now' link={item.link}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}