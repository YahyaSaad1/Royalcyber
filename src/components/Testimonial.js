import { Link } from "react-router";
import person_1 from '../images/person_1.jpg';
import person_2 from '../images/person_2.jpg';
import Logo_1 from '../images/Aramark-Logo-01.svg';
import Logo_2 from '../images/OMEGA-Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import SeeAllMain from "./SeeAllMain";

export default function Testimonial(){
    const items = [
        {type:'Testimonial', name:'Craig McCroskey', PersonImage:person_1, jobTitle:'Sr. Director IT', logoImage:Logo_1, link:'resources/case-studies', description:"Congratulations and a big thank you to everyone that worked on the Portal 8.5 Version upgrade and successfully implemented. The team did a great job working through all the tasks that came up and hats off to everyone that worked on this project."},
        {type:'Testimonial', name:'Michael Ali', PersonImage:person_2, jobTitle:'Chief Technical Officer', logoImage:Logo_2, link:'resources/case-studies', description:"Just wanted to say “thanks” and “nice job” that you put “skin in the game” by coming to the meeting with some well thought out and demonstrable ideas."},
    ]

    return(
        <section>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
                {items.map((item, index)=>{
                    return(
                        <div key={index} className="justify-between h-full flex flex-col gap-y-5 shadow-main p-[25px]">
                            <div>
                                <div className="rounded-xl flex justify-between items-center">
                                    <FontAwesomeIcon className="rotate-180 text-orange-600 text-6xl" icon={faQuoteRight} />
                                    <img className="w-1/3" src={item.logoImage} alt={item.logoImage} />
                                </div>
                                <div className="mt-5">
                                    <span className="leading-[28.8px] text-lg">{item.description}</span>
                                </div>
                            </div>

                            <div>
                                <div className="mt-2">
                                    <img className="rounded-full w-[100px]" src={item.PersonImage} alt={item.PersonImage} />
                                </div>
                                <div>
                                    <h2 className="font-semibold text-2xl my-2">{item.name}</h2>
                                    <p className="text-xl">{item.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <SeeAllMain title='See All' link='company/client-testimonial' />
        </section>
    )
}