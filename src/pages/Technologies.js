import { Link } from "react-router";
import ComHeader from "../components/ComHeader";
// import icon1_1 from '../images/technologies-icon-1.svg';
// import icon1_2 from '../images/technologies-icon-2.svg';
// import icon1_3 from '../images/technologies-icon-3.svg';
// import icon1_4 from '../images/technologies-icon-4.svg';
// import icon1_5 from '../images/technologies-icon-5.svg';
// import icon1_6 from '../images/technologies-icon-6.svg';
// import icon1_7 from '../images/technologies-icon-1.svg';
// import icon1_8 from '../images/technologies-icon-2.svg';
// import icon1_9 from '../images/technologies-icon-3.svg';

export default function Technologies(){
    const items = [
        {title: 'Ecommerce', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/data-icon.svg', desc: 'Commerce is never a one size fits all settlement. As your business looks expand globally, we need to do it better more…'},
        {title: 'Cloud', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/cloud-icon.svg', desc: 'Royal Cyber is an industry leading cloud solutions provider. We help automation, deployment and best practices.'},
        {title: 'Business Process Management', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/planner-icon.svg', desc: 'Our Business Process Management (BPM) function is uniquely positioned to solve irresolute problems and deploy it more effectively for rapidly scaling organizations.'},
        {title: 'Data Services', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/data-icon.svg', desc: 'Our AI & IOT solutions and services focus on providing quick transaction settlements and help in minimizing the risks.'},
        {title: 'Middleware', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/archive-icon.svg', desc: 'Our extensive experience in integration and our expertise offers a bespoke support solution to meet your operational needs.'},
        {title: 'Devops', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/programming-icon.svg', desc: 'We create better customer experiences through a better approach to DevOps. Our DevOps tools practices and our experience helping customers globally.'},
        {title: 'Portal', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/data-icon.svg', desc: 'We deliver comprehensive portal solution tailored with a highly-personalized interactive functional site for your end users.'},
        {title: 'ERP', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/cloud-icon.svg', desc: 'We secure your tomorrow with our Big Data Models and solutions to support data-driven decisions.'},
        {title: 'Security', image: 'https://www.royalcyber.com/wp-content/uploads/2021/08/planner-icon.svg', desc: 'Our proactive and secure IT security management will become an extension of your business. With proven track record we have security in mind at all times when we develop solutions.'},
    ]

    return(
        <div className='container pt-[85px] text-center mx-auto'>
            <div className="p-16 flex flex-col gap-5">
                <ComHeader title='Our Technologies & Services' desc='Deliver flexible, reliable & scalable solutions by applying technologies to help businesses achieve their business goals' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-16">
                    {items.map((item, index)=>{
                        return(
                            <Link key={index} to={'services/commerce'} className="hover:border-2 hover:border-orange-500 hover:scale-105 p-5 py-10 rounded-xl shadow-technologies flex flex-col text-start gap-7 duration-300">
                                <div className="border-2 border-orange-500 w-fit p-2 rounded-lg">
                                    <img className="w-12 text-white" src={item.image} alt={item.image} />
                                </div>
                                <h1 className="font-bold line-clamp-4 text-xl text-cyan-950">{item.title}</h1>
                                <p className="text-start font-medium">{item.desc}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}