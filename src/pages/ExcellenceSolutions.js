import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import banner from '../images/banner-services.jpg';
import step from '../images/step.svg';
import { faArrowRight, faCircleCheck, faCircleRight, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import ComHeader from '../components/ComHeader';
import ReadMore from '../components/ReadMore';


export default function ExcellenceSolutions() {
    const buttons = ['Retail AI', 'Ecommerce', 'Supply Chain Operations', 'Manufacturing', 'Energy/Utilities', 'Education', 'Financial Services', 'Real Estate', 'Enterprise Support', 'AR/VR', 'Misc'];

    return (
        <div className="pt-[85px] mx-auto">
            <div className="relative w-full h-96 pt-[88px]">
                <img className="absolute inset-0 w-full h-full object-cover z-0" src={banner} alt="banner" />

                <div className="pb-[85px] relative z-10 flex flex-col justify-center text-white text-start h-full px-4 md:pl-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-2">AI Center of Excellence</h2>
                    <p className="text-xl mt-3">Accelerate Innovation and Intelligence with Generative AI Solutions</p>
                    <a href="#Let’sTalk" className='flex items-center py-3 px-5 mt-4 bg-white text-orange-500 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white duration-200 w-fit'>
                        <span className='font-medium'>Meet Our Team</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>

            <div className='bg-sky-50'>
                <div className='py-16 px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='md:pr-20'>
                        <h2 className='font-bold text-3xl tracking-wide lg:tracking-widest leading-10 mb-5'>Introducing Specialized Artificial Intelligence Solutions from Royal Cyber</h2>
                        <p className='text-lg leading-7'>Royal Cyber’s AI Center of Excellence offers a comprehensive suite of advanced AI/ML services and solutions that ensure every solution is custom-built to surpass client expectations in today’s dynamic digital landscape. We champion a holistic strategy that tackles immediate needs and seamlessly integrates AI, data, and analytics across all facets of the business, propelling our clients toward becoming a full-fledged intelligent enterprise.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-96' src="https://www.royalcyber.com/wp-content/uploads/2024/07/artificial-intelligence-solutions-from-royal-cyber.svg" alt="intelligence" />
                    </div>
                </div>
            </div>


            <div className='py-16 px-4 md:px-16'>
                <ComHeader classNameTitle='tracking-wide' classNameDesc='mt-5' title='Our Custom AI Solutions Catalog' desc='General AI/ML and generative AI use cases are designed to help industries achieve efficiency and adaptability and enhance customer experience.' />
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-16 px-4 md:px-16'>
                    <div className='col-span-1'>
                        <h2 className='font-bold text-2xl text-blue-900 mb-5'>Filter</h2>
                        {buttons.map((button, index)=>{
                            return(
                                <div key={index} className='flex flex-col items-start cursor-pointer duration-200 hover:bg-orange-500 focus:bg-orange-500 rounded-full p-3 px-5 hover:text-white focus:text-white font-medium mb-2'>
                                    <button>
                                        {button}
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                    <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='shadow-2xl'>
                            <div className='p-5 bg-cyan-300'><img src='https://www.royalcyber.com/wp-content/uploads/2024/08/cement-mixer.svg' alt="cement" /></div>
                            <div className='p-5'>
                                <h2 className='font-semibold text-xl text-blue-900 tracking-wider'>AI Cement Formulation</h2>
                                <p className='mt-4 leading-7 tracking-wider'>Our AI cement mixer solution automates the selection and quantity of additives required to achieve precise strength targets. Eliminate costly trial and error and optimize formulations for consistent quality control.</p>
                                <ReadMore class='mt-5' title='Read More' link={'item.link'}/>
                            </div>
                        </div>
                        <div className='shadow-2xl'>
                            <div className='p-5 bg-cyan-300'><img src='https://www.royalcyber.com/wp-content/uploads/2024/08/cement-mixer.svg' alt="cement" /></div>
                            <div className='p-5'>
                                <h2 className='font-semibold text-xl text-blue-900 tracking-wider'>AI Cement Formulation</h2>
                                <p className='mt-4 leading-7 tracking-wider'>Our AI cement mixer solution automates the selection and quantity of additives required to achieve precise strength targets. Eliminate costly trial and error and optimize formulations for consistent quality control.</p>
                                <ReadMore class='mt-5' title='Read More' link={'item.link'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-blue-100 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-16'>
                <div className='flex flex-col items-center text-center md:items-start md:text-start justify-center'>
                    <h2 className='font-bold tracking-wider text-2xl mt-10'>Our Generative AI Roadmap</h2>
                    <p className='tracking-wider text-lg mt-4 leading-7'>Royal Cyber AI’s client roadmap provides a systematic approach to implementing AI solutions. Our comprehensive process ensures a seamless transition to AI adoption and successful use case implementation.</p>
                    <div className='mt-7'>
                        <a href='#Let’sTalk' className='w-full p-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 duration-200'>
                            Sign up for a Complimentary Assessment
                        </a>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-4/5' src={step} alt="step" />
                </div>
            </div>

            <div className='py-16 p-10 md:px-40'>
                <div className='felx-col gap-y-7 text-start bg-gradient-to-br from-blue-700 to-blue-950 p-12 px-20 flex flex-col text-white rounded-3xl'>
                    <div className='flex justify-center'>
                        <h2 className='text-5xl font-semibold'>Why Select Royal Cyber?</h2>
                    </div>

                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-5'/>
                        <div>
                            <span className='font-bold text-xl'>Certified AI Engineers: </span>
                            <span className='text-lg'>Our team of AI experts is dedicated to helping businesses overcome critical performance limitations.</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-5'/>
                        <div>
                            <span className='font-bold text-xl'>10+ Years of Experience: </span>
                            <span className='text-lg'>Our extensive track record allows us to identify your specific challenges and develop insightful solutions quickly. We've tackled many scenarios, giving us the expertise to deliver impactful AI across diverse industries.</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-5'/>
                        <div>
                            <span className='font-bold text-xl'>Cross-Functional Approach: </span>
                            <span className='text-lg'>We foster collaboration by uniting data scientists, analysts, engineers, and AI/ML experts. This cross-functional approach ensures we understand the technical challenges and delve into the industry-specific pain points.</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-5'/>
                        <div>
                            <span className='font-bold text-xl'>Predict and Pivot Capabilities: </span>
                            <span className='text-lg'>Our team detects the latest trends in AI, giving you the "Predict and Pivot" advantage. Our AI solutions are built to adapt, ensuring you stay ahead of the curve and seize opportunities as they arise.</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-5'/>
                        <div>
                            <span className='font-bold text-xl'>30+ AI Models: </span>
                            <span className='text-lg'>Leverage Royal Cyber's library of 20+ pre-built AI models to jumpstart your project and achieve results quickly.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="Let’sTalk" className='shadow-inner py-16 px-4 md:px-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 shadow-2xl'>
                    <div className='p-10 px-12 flex flex-col justify-between bg-gray-100'>
                        <div>
                            <h3 className='font-bold text-2xl text-orange-500'>Let’s Talk</h3>
                            <h2 className='font-medium text-4xl mt-2'>What could we achieve together?</h2>
                            <p className='mt-8'>Book a session with our experts to discuss how we can collaborate to achieve AI excellence for your enterprise.</p>
                        </div>
                        <div>
                            <h3 className='font-bold text-2xl text-orange-500'>Sales Team</h3>
                            <h3 className='font-bold text-xl text-neutral-700'>1.630.355.6292</h3>
                        </div>
                    </div>
                    <form className='p-10 px-12'>
                        <input className='w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7' type="text" placeholder='Name' />
                        <input className='w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7' type="email" placeholder='Business Email' />
                        <input className='w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7' type="tel" placeholder='Phone number' />
                        <input className='w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7' type="text" placeholder='Organization' />
                        <input className='w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7' type="text" placeholder='Job Title' />
                        <button className='bg-orange-500 text-white hover:bg-orange-600 p-4 rounded-full w-full md:w-1/2 mt-3 duration-200'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}