import { Link } from "react-router"
import banner from '../images/all-resources-banner.jpg';
import BannerText from "../components/BannerText";

export default function Resources(){
    const items = [
        {head: 'IBM', title: 'Anypoint Flex Gateway on IBM Power: Powering Secur...', desc: 'Deploy Anypoint Flex Gateway on IBM Power for secure, low-latency', link: '', color:'border-orange-500'},
        {head: 'Blogs', title: 'Smarter ERP: Exploring SAP and ChatGPT Integration...', desc: 'Home >> Resources Smarter ERP: Exploring SAP and ChatGPT Integration', link: '', color:'border-red-500'},
        {head: 'Blogs', title: 'Databricks Cost Optimization: Maximize Insights, M...', desc: 'Enterprises today face growing pressure to reduce costs while accelerating', link: '', color:'border-green-500'},
        {head: 'Optimizely', title: 'How to Unlock Enterprise-Grade Features in Spire U...', desc: 'In today’s fast-moving digital commerce world, businesses need more than', link: '', color:'border-blue-500'},
        {head: 'Case Study', title: 'Unlocking Agility and Resilience: Seamless Migrati...', desc: 'As one of the largest specialty bedding retailers in the', link: '', color:'border-yellow-500'},
        {head: 'Blogs', title: 'Hyper automation with ServiceNow: Driving Efficien...', desc: 'Click & learn servicenow hyperautomation to streamline workflows, reduce costs', link: '', color:'border-purple-500'},
        {head: 'Mainframe', title: 'How zDevOps Is Transforming Mainframe Development ...', desc: 'Mainframes still power some of the world’s most essential systems', link: '', color:'border-orange-500'},
        {head: 'Test Automation', title: 'Enterprise Change Management: A Comprehensive Tech...', desc: 'Cyber security has become an essential part of application development', link: '', color:'border-red-500'},
        {head: 'Webcast', title: 'Browser Security for Agentic AI: A Microsoft Purvi...', desc: 'Watch this webcast to learn how Microsoft Purview’s browser-based data', link: '', color:'border-green-500'},
        {head: 'Blogs', title: 'Why Application Integration Is Critical and Why It...', desc: 'Application landscapes are highly distributed, Enterprise today typically operates acros', link: '', color:'border-blue-500'},
        {head: 'Webcast', title: 'Transforming Legal Workflows: How AI Voice Assista...', desc: 'Watch this webcast to discover how Nouraa.ai, the AI Voice', link: '', color:'border-yellow-500'},
        {head: 'Case Study', title: 'Solving Manufacturing Gridlock: Niagara Bottling’s...', desc: 'Niagara Bottling is one of the largest beverage manufacturers in', link: '', color:'border-purple-500'},
    ]

    return(
        <div>
            <BannerText banner={banner} title='Knowledge Center' desc='Showcasing our competencies in technology, business, & industry with research & insight into trends & development' className='text-center' />
            <div className="py-16 px-8 xl:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
                    {items.map((item, index)=> {
                        return(
                            <Link key={index} className={`bg-neutral-100 shadow-lg hover:scale-105 duration-200 justify-between h-full border-b-4 ${item.color} flex flex-col items-center text-center px-10 xl:px-16 py-8`}>
                                <h3 className="text-neutral-400 font-bold leading-10">{item.head}</h3>
                                <h2 className="font-semibold text-lg">{item.title}</h2>
                                <p className="mt-5">{item.desc}</p>
                                <Link to={item.link} className="text-blue-500 font-medium mt-5 hover:text-blue-600">Read More</Link>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}