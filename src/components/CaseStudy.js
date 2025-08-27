import logo_1 from '../images/Logo-1.svg';
import logo_2 from '../images/Logo-2.svg';
import logo_3 from '../images/Logo-3.svg';
import logo_4 from '../images/Logo-4.svg';
import SeeAllMain from "./SeeAllMain";
import ReadMore from "./ReadMore";

export default function CaseStudy(){
    const items = [
        {type:'Case Study', image:logo_1, link:'resources/case-studies', description:"Augmenting Augusta Sportswear's Sales via Smooth Customer Journey. Augusta Sportswear Brands has grown into one of the leading sports apparel manufacturers in the U.S"},
        {type:'Case Study', image:logo_2, link:'resources/case-studies', description:"Fletcher Building’s Digital Transformation using SAP Hybris Services. Fletcher Building operates in six divisions"},
        {type:'Case Study', image:logo_3, link:'resources/case-studies', description:"HCL Commerce: Premier Healthcare's Quotes Management. A Custom UI for Quotes Management Module in HCL Commerce V9.0"},
        {type:'Case Study', image:logo_4, link:'resources/case-studies', description:"Seamless Customer Journey: Intcomex's MuleSoft Integration. The client is a leading manufacturer of technology products."},
    ]

    return(
        <section>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mx-5">
                {items.map((item, index)=>{
                    return(
                        <div key={index} className="flex flex-col gap-y-5 shadow-main p-[15px]">
                            <div className="h-[270px] rounded-xl flex justify-center items-center bg-neutral-100">
                                <img className='w-1/2' src={item.image} alt={item.image} />
                            </div>

                            <div className="flex flex-col gap-y-5 justify-between h-full">
                                <div className="mt-4">
                                    <span className="eading-[28.8px] line-clamp-3">{item.description}</span>
                                </div>

                                <ReadMore title='Read More' link={item.link}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <SeeAllMain title='See All' link='case-studies' />
        </section>
    )
}