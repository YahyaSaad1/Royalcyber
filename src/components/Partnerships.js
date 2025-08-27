import SeeAllMain from "./SeeAllMain";
import icon_1 from '../images/partnership-icon-1.png';
import icon_2 from '../images/partnership-icon-2.png';
import icon_3 from '../images/partnership-icon-3.png';
import icon_4 from '../images/partnership-icon-4.png';
import icon_5 from '../images/partnership-icon-5.png';
import icon_6 from '../images/partnership-icon-6.png';
import icon_7 from '../images/partnership-icon-7.png';
import icon_8 from '../images/partnership-icon-8.png';
import icon_9 from '../images/partnership-icon-9.png';

export default function Partnerships(){
    return(
        <section className="py-10 px-8 xl:px-0">
            <div className="2xl:mx-[160.5px] xl:mx-[35px] p-[10px] flex flex-col gap-5 justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-4xl leading-[32px]">Strong Partnerships</h1>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-9 gap-5 items-center">
                    <img src={icon_1} alt={icon_1} />
                    <img src={icon_2} alt={icon_2} />
                    <img src={icon_3} alt={icon_3} />
                    <img src={icon_4} alt={icon_4} />
                    <img src={icon_5} alt={icon_5} />
                    <img src={icon_6} alt={icon_6} />
                    <img src={icon_7} alt={icon_7} />
                    <img src={icon_8} alt={icon_8} />
                    <img src={icon_9} alt={icon_9} />
                </div>


                <SeeAllMain title='See All Partners' link='company/partners' />
            </div>
        </section>
    )
}