import { Link } from "react-router";
import blog_1 from '../images/blog-1.jpg';
import blog_2 from '../images/blog-2.jpg';
import blog_3 from '../images/blog-3.jpg';
import ReadMore from "./ReadMore";

export default function Blog(){
    const items = [
        {type:'Blogs', image:blog_1, link:'blogs/mainframe/mainframe-devops-transformation', date:'July 24, 2025', description:"Mainframes still power some of the world’s most essential systems..."},
        {type:'Blogs', image:blog_2, link:'blogs/test-automation/enterprise-change-management-implementation-guide', date:'July 22, 2025', description:"Cyber security has become an essential part of application development..."},
        {type:'Blogs', image:blog_3, link:'blogs/mulesoft/api-gateway-integration', date:'July 16, 2025', description:"Application landscapes are highly distributed, Enterprise today typically operates across..."},
    ]

    return(
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mx-5">
            {items.map((item, index)=>{
                return(
                    <div key={index} className="flex flex-col gap-y-5 shadow-main p-[15px]">
                        <Link to={item.link} className="h-[190px] rounded-xl flex justify-center items-center bg-neutral-100">
                            <img className="w-[100%] h-[100%]" src={item.image} alt={item.image} />
                        </Link>

                        <div>
                            <span className="font-semibold text-lg leading-[25.2px] text-neutral-500">{item.date}</span>
                        </div>

                        <div className="flex flex-col gap-y-5 justify-between h-full">
                            <div>
                                <span className="text-xl leading-[27px]">{item.description}</span>
                            </div>

                            <ReadMore title='Read More' link={item.link}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}