import post1 from '../images/videos-1.jpg';
import post2 from '../images/videos-2.jpg';
import post3 from '../images/videos-3.jpg';
import post4 from '../images/videos-4.jpg';
import post5 from '../images/videos-5.jpg';
import post6 from '../images/videos-6.jpg';
import post7 from '../images/videos-7.jpg';
import post8 from '../images/videos-8.jpg';
import SeeAll from '../pages/SeeAll';

export default function Videos(){
    const items = [
        {title:'Browser Security for Agentic AI: A Microsoft Purview Approach', image:post1},
        {title:'Royal Cyber & Rock West: Agentic AI Innovation at Salesforce Connections 2025', image:post2},
        {title:'Wild Fork’s Digital Transformation with Commercetools & Royal Cyber’s OMS Accelerator', image:post3},
        {title:'How to Build Multi-Agent Systems in Microsoft Copilot Studio | Step-by-Step Tutorial', image:post4},
        {title:'Transforming Legal Workflows: How AI Voice Assistants Boost Law Firm Efficiency', image:post5},
        {title:'From ATF to Automation: Evolving Your ServiceNow Testing Approach', image:post6},
        {title:'Meta Orders & Salesforce OMS Integration | Full Order Management Demo', image:post7},
        {title:'Revolutionizing Healthcare with AI | Cyber Agent for Healthcare by Royal Cyber', image:post8},
    ]

        return(
        <SeeAll items={items} />
    )
}