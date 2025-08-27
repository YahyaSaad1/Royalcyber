import ComHeader from '../components/ComHeader';
import banner from '../images/banner-testimonial.jpg';
import person_1 from '../images/person-1.jpg';
import person_2 from '../images/person-2.jpg';
import person_3 from '../images/person-3.jpg';
import person_4 from '../images/person-4.jpg';
import person_5 from '../images/person-5.jpg';
import person_6 from '../images/person-6.jpg';
import person_7 from '../images/person-7.jpg';
import person_8 from '../images/person-8.jpg';
import person_9 from '../images/person-9.jpg';
import company_1 from '../images/company-person-1.svg';
import company_2 from '../images/company-person-2.svg';
import company_3 from '../images/company-person-3.svg';
import company_4 from '../images/company-person-4.svg';
import company_5 from '../images/company-person-5.png';
import company_6 from '../images/company-person-6.svg';
import company_7 from '../images/company-person-7.png';
import company_8 from '../images/company-person-8.svg';
import company_9 from '../images/company-person-9.svg';

export default function ClientTestimonial() {
    const items = [
        {name:'Sameer Asthana', jopTitle:'Sr. Manager eCommerce', imgPerson: person_1, imgCompany: company_1, desc:'We are pleased to hit another major milestone of the project on time! Sincere THANKS! to your dedication and hard work. We value your expertise and the desire to go that extra mile to make us successful.'},
        {name:'Mike Douglass', jopTitle:'Director of Enterprise Systems', imgPerson: person_2, imgCompany: company_2, desc:'I want to personally thank you and your team for been amazingly responsive, reacting to text messages promptly, to help us push the needle closer to getting the Salesforce launched. A great partner. Thanks once again!'},
        {name:'Eric Wood', jopTitle:'Manager, Application Development', imgPerson: person_3, imgCompany: company_3, desc:'On top of this COVID issue, Aramark is also have some significant challenges with our environments. The CPS environments have largely been unaffected, but the Royal Cyber team has step up and helped us increase our monitoring. It’s during these events that your partnership with us really shines through.'},
        {name:'Michelle Chen', jopTitle:'Sr. IT Developer', imgPerson: person_4, imgCompany: company_4, desc:'I would like to thank you for doing a great job on the Monitor Pro. We have been recognized by Niagara business leaders regarding the great visibility on EDI'},
        {name:'Peeyush Shukla', jopTitle:'Chief Information & Technology Officer', imgPerson: person_5, imgCompany: company_5, desc:'It indeed is a game changer – both in terms of its impact and the solution framework it provides to leverage across other areas of the firm. The team has done a fantastic job.'},
        {name:'Craig McCroskey', jopTitle:'Sr. Director IT', imgPerson: person_6, imgCompany: company_6, desc:'Congratulations and a big thank you to everyone that worked on the Portal 8.5 Version upgrade and successfully implemented. The team did a great job working through all the tasks that came up and hats off to everyone that worked on this project.'},
        {name:'Navine Smith', jopTitle:'Digital Platforms Manager at Laminex', imgPerson: person_7, imgCompany: company_7, desc:'Royal Cyber team is working really well with the Laminex and GT team and the work quality and outputs are awesome.'},
        {name:'Michael Ali', jopTitle:'Chief Technical Officer', imgPerson: person_8, imgCompany: company_8, desc:'Just wanted to say “thanks” and “nice job” that you put “skin in the game” by coming to the meeting with some well thought out and demonstrable ideas.'},
        {name:'Debee Khadanga', jopTitle:'Director of E-Commerce Systems', imgPerson: person_9, imgCompany: company_9, desc:'I would like to take the opportunity to thank the team working behind the scene, for their hard work and dedication. The new AI Search powered by Search Spring is LIVE now. We are the first WCS customer to implement Search Spring. Awesome Teamwork guys.'},
    ]

    const videos = [
        {link:'BhweaZXo2gQ', title:'Mike', desc: 'Application Manager, Smith Drug'},
        {link:'pT7vLoWIKKw', title:'Bernardo Bazua', desc: 'Omnichannel & eCommerce, Coppel'},
        {link:'pT7vLoWIKKw', title:'Mike', desc: 'Omnichannel & eCommerce, Coppel'},
        {link:'IroOoMc7WVc', title:'IBM', desc: 'We hold technical, architect and deployment certifications for IBM software solutions programs.'},
        {link:'Widt9X8h6uQ', title:'Brian Lebersfeld', desc: 'Vice President and eCommerce Director at Capitol Lighting'},
        {link:'HyMBsQBA', title:'Jose Luis Sanchez', desc: 'Director of eCommerce and Digital Marketing at Rock West Composites'},
        {link:'e_jq_OpCNg', title:'Steven Bohlken', desc: 'Head of IoT Systems at GWA Limited Group'},
        {link:'Yuk7UNEiyww', title:'Ritesh Patel', desc: 'CIO at GWA Group Limited'},
        {link:'2fjse_czkfc', title:'Dilshaad Busgith', desc: 'ITSM Process Specialist ServiceNow at NorQuest College'},
    ]
    return (
        <div className="pt-[85px] mx-auto">
            <div className="relative w-full h-96 pt-[88px]">
                <img className="absolute inset-0 w-full h-full object-cover z-0" src={banner} alt="banner" />

                <div className="pb-[85px] relative z-10 flex flex-col justify-center text-white text-start h-full px-4 pl-16">
                    <h2 className="text-6xl font-bold mb-2">Client Testimonials</h2>
                    <p className="text-xl mt-3">See what our customer have to say about us, processes, services & solutions</p>
                </div>
            </div>

            <div className='p-16'>
                <ComHeader classNameTitle='text-3xl bg-gradient-to-r from-orange-700 to-blue-700 text-transparent bg-clip-text' title="Here's What Our Customers Say About Our Work" />
            </div>

            <div className='p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {videos.map((video, index)=>{
                    return(
                        <div key={index} className='flex flex-col gap-y-3'>
                            <iframe
                                className=''
                                src={`https://www.youtube.com/embed/${video.link}`}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{clipPath: 'polygon(20% 0%, 90% 0, 100% 10%, 100% 80%, 100% 100%, 10% 100%, 0 90%, 0 0)'}}
                                >
                            </iframe>
                            <h2 className='text-black font-semibold text-xl'>{video.title}</h2>
                            <i className='text-lg'>{video.desc}</i>
                        </div>
                    )
                })}
            </div>

            <div className='bg-gradient-to-r from-orange-700 to-blue-700'>
                <div className='p-16'>
                    <ComHeader classNameTitle='font-semibold text-2xl text-white' title="Look into Some More Reviews!" />
                
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                        {items.map((item, index)=>{
                            return(
                                <div key={index} className='transform hover:scale-105 duration-200 rounded-2xl p-5 bg-neutral-200 shadow-xl border-2 hover:border-orange-500 pb-10'>
                                    <div className='rounded-2xl p-3 flex justify-between items-center gap-3 bg-white'>
                                        <div className='w-[75px] h-[75px] shrink-0'>
                                            <img className='w-full h-full rounded-full' src={item.imgPerson} alt={item.imgPerson} />
                                        </div>
                                        <div>
                                            <h2 className='font-medium text-xl'>{item.name}</h2>
                                            <p>{item.jopTitle}</p>
                                        </div>
                                        <div>
                                            <img className='w-32' src={item.imgCompany} alt={item.imgCompany} />
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <p className='leading-7 font-medium'>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
