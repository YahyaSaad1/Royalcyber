import { useState } from "react";
import CaseStudy from "./CaseStudy";
import Blog from "./Blog";
import Video from "./Video";
import Testimonial from "./Testimonial";

export default function Main(){
    const [activeIndex, setActiveIndex] = useState('Case Study');
    const buttons = ['Case Study', 'Testimonial', 'Blogs', 'Video'];

    return(
        <section className="bg-[#F8F8F8] py-10">
            <div className="py-16 px-8 xl:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center px-8 xl:px-0">
                    {buttons.map((button)=>{
                        return(
                            <button key={button}
                            onClick={() => setActiveIndex(button)}
                            className={`border border-neutral-400 group hover:bg-orange-600 focus:bg-orange-600 rounded-full text-center px-5 py-3 transition-all duration-200
                            ${activeIndex === button? 'bg-orange-600': 'hover:bg-orange-600 focus:bg-orange-600 '}
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


                {activeIndex === 'Case Study'? <CaseStudy/>
                : activeIndex === 'Blogs'? <Blog/>
                : activeIndex === 'Video'? <Video/>
                : activeIndex === 'Testimonial'? <Testimonial/>
                : null
                }
            </div>
        </section>
    )
}