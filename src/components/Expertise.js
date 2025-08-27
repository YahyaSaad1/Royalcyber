import ReadMore from "./ReadMore";
import icon_1 from '../images/expertise-icon-01.svg';
import icon_2 from '../images/expertise-icon-02.png';
import icon_3 from '../images/expertise-icon-03.png';
import icon_4 from '../images/expertise-icon-04.png';
import icon_5 from '../images/expertise-icon-05.png';
import icon_6 from '../images/expertise-icon-06.png';

export default function Expertise(){
    const items = [
        {title:'Digital Transformation', image:icon_1, link:'services/commerce', description:"Automate mainframe information systems to accelerate service delivery and problem resolution. Modernize Your Mainframe Application with Rational Tools. Our team of experts are here to help your organization & are always available 24/7 to meet your business objectives."},
        {title:'Digital Commerce', image:icon_2, link:'services/commerce', description:"At Royal Cyber, we keep our clients ahead of the competition with personalized support and innovative tools. With over 20+ years of digital commerce experience and the trust of several Fortune 500 companies, we turn our experience into new opportunities and exciting products for our clients."},
        {title:'Automation & Optimization', image:icon_3, link:'services/commerce',description:"Digital transformation is the trending goal to achieve your desired ROI, & Robotic Process Automation can accomplish this journey. We help organizations integrate technologies like Machine Learning (ML) & Artificial Intelligence (AI) with RPA development to revamp & digitalize the entire business ecosystem."},
        {title:'Data Modernization', image:icon_4, link:'services/commerce',description:"Our AI/ML services empower you to build, deploy, and manage powerful models that automate data analysis tasks, identify complex patterns, and generate predictive insights. Gain a competitive edge by making smarter, faster decisions."},
        {title:'Generative AI', image:icon_5, link:'services/commerce',description:"The future rests in harnessing the power of Generative AI models and technologies. Our goal is to provide Generative AI Services to companies that want to equip themselves with specialized Artificial Intelligence applications that leverage their internal data to streamline their business."},
        {title:'Cloud Acceleration', image:icon_6, link:'services/cloud',description:"With our especially engineers and architects, we will reshape your Cloud Strategies and take it to the next level in the simplest, most effective way. Royal Cyber’s “Self-X” brings in new age thinking into managing cloud operations."},
    ]

    return(
        <section className="bg-[#1B252F] text-white py-10 px-8 xl:px-0">
            <div className="2xl:mx-[160.5px] xl:mx-[35px] p-[10px] flex flex-col gap-5 justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-4xl leading-[32px]">Expertise</h1>
                    <p className="text-2xl leading-[43.2px] mt-3">Highly specialized Team</p>
                </div>

                <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
                    {items.map((item, index)=>{
                        return(
                            <div className="bg-white rounded-3xl p-7 flex flex-col gap-5 text-black">
                                <div className="flex items-center gap-3">
                                    <img className="w-[50px]" src={item.image} alt={item.image} />
                                    <h2 className="font-bold text-xl leading-[28.8px]">{item.title}</h2>
                                </div>
                                <p className="line-clamp-3">{item.description}</p>
                                <ReadMore title='Read More' link={item.link}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}