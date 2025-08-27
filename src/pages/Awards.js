import { Link } from 'react-router';
import banner from '../images/banner-company-awards.jpg';
import logo1 from '../images/award-logo-1.jpg';
import logo2 from '../images/award-logo-2.jpg';
import logo3 from '../images/award-logo-3.svg';
import logo4 from '../images/award-logo-4.jpg';
import logo5 from '../images/award-logo-5.svg';
import logo6 from '../images/award-logo-6.jpg';
import BannerText from '../components/BannerText';

export default function Awards(){
    const awards = [
        {title:'Royal Cyber Named One of the 2025 Chicago Sun-Times’ Best Workplaces!', desc:'We are proud to announce that Royal Cyber has been recognized as one of the Best Workplaces of 2025 by the Chicago Sun-Times and Best Companies Group. This award celebrates our ongoing commitment to building an exceptional workplace culture rooted in innovation, collaboration, and employee well-being.', image:logo1},
        {title:'commercetools APAC Partner of the Year', desc:'Royal Cyber has been honored as the APAC Partner of the Year at Elevate – The Global Commerce Event by commercetools, recognizing our innovation and leadership in digital commerce across the region. This prestigious award reflects the strength of our partnerships and the dedication of our global team.', image:logo2},
        {title:'Recognized on CRN’s 2025 Solution Provider 500!', desc:'Royal Cyber is proud to be named among North America’s top IT solution providers on CRN’s prestigious 2025 Solution Provider 500 list. This honor reflects our unwavering commitment to digital innovation, customer-centric solutions, and excellence in the IT channel.', image:logo3},
        {title:'Best Digital Consulting Firm of 2025', desc:'We’re honored to be recognized by Corporate America Today as the Best Digital Consulting Firm of 2025. This prestigious award highlights our commitment to driving innovation and delivering cutting-edge digital solutions that empower businesses to succeed. A heartfelt thank you to our clients and dedicated team for being part of this journey.', image:logo4},
        {title:'Chicago’s 2025 Best & Brightest Companies to Work For', desc:'We’re honored to be recognized for the 6th consecutive year as one of Chicago’s Best & Brightest Companies to Work For. This award celebrates our ongoing commitment to employee well-being, workplace culture, and innovation. At Royal Cyber, people truly are our greatest strength.', image:logo5},
        {title:'Best Software Development Companies 2025', desc:'Royal Cyber is honored to be recognized by Expertise.com as one of the Best Software Development Companies for 2025! This award reflects our commitment to innovation, excellence, and delivering top-tier technology solutions.', image:logo6},
    ]
    return(
        <section>
            <BannerText banner={banner} title='Awards & Recognition' desc='Towering Over the Global Competition' className='text-start' />
            {awards.map((award, index)=>{
                return(
                    <div key={index} className='border-b-2 border-gray-300 grid grid-cols-1 md:grid-cols-5 py-16 px-8 lg:px-16 gap-7'>
                        <div className='flex justify-center items-center'>
                            <img className='w-[150px]' src={award.image} alt={award.image} />
                        </div>
                        <div className='col-span-4'>
                            <h3 className='text-blue-800 text-3xl font-medium'>{award.title}</h3>
                            <div className='border-b-2 border-blue-800 w-2/5 mt-2'/>
                            <p className='text-lg font-semibold mt-4'>{award.desc}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}