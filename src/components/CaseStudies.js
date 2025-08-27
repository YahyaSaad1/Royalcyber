import post1 from '../images/studies-1.jpg';
import post2 from '../images/studies-2.jpg';
import post3 from '../images/studies-3.jpg';
import post4 from '../images/studies-4.jpg';
import post5 from '../images/studies-5.jpg';
import post6 from '../images/studies-6.jpg';
import post7 from '../images/studies-7.jpg';
import post8 from '../images/studies-8.jpg';
import post9 from '../images/studies-9.jpg';
import SeeAll from '../pages/SeeAll';


export default function CaseStudies(){
    const items = [
        {title:'Unlocking Agility and Resilience: Seamless Migration from Hybrid Mule to CloudHub 2.0', image:post1},
        {title:'Solving Manufacturing Gridlock: Niagara Bottling’s Blueprint for Scalable AI', image:post2},
        {title:'Enhancing Content Management and Omnichannel Responsive Design with Adobe Experience Manager', image:post3},
        {title:'Empowering Retail Agents with AI: Transforming Customer Service with Salesforce Agentforce', image:post4},
        {title:'Booth School of Business — Building a Multi-Agentic System on Microsoft Azure', image:post5},
        {title:'Implementing Software Asset Management (SAM) on Oracle for Aerospace Manufacturer', image:post6},
        {title:'Modernizing Data Validation in Logistics: Implementing DCVS for Client', image:post7},
        {title:'Optimizing Duty and Tax Invoicing with GDB at Client', image:post8},
        {title:'Implementing New Standardized Forms And Processes For A Financial Company', image:post9},
    ]

        return(
        <SeeAll items={items} />
    )
}