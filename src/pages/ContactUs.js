import { Link } from 'react-router';
import ComHeader from '../components/ComHeader';
import banner from '../images/connect-banner.jpg';
import global from '../images/global-offices.svg';
import support from '../images/support-img-1.jpg';

export default function CountactUs() {
    const countries = ["Algeria", "Bahrain", "Comoros", "Djibouti", "Egypt", "Iraq", "Jordan", "Kuwait", "Lebanon", "Libya", "Mauritania", "Morocco", "Oman", "Palestine", "Qatar", "Saudi Arabia", "Somalia", "Sudan", "Syria", "Tunisia", "United Arab Emirates", "Yemen"];

    return (
        <div className="pt-[85px] mx-auto">
            <div className="relative w-full h-96 pt-[88px]">
                <img className="absolute inset-0 w-full h-full object-cover z-0" src={banner} alt="banner" />

                <div className="pb-[85px] relative z-10 flex flex-col justify-center text-white text-start h-full px-4 pl-16">
                    <h2 className="text-6xl font-bold mb-2">Let's Connect!</h2>
                    <p className="text-xl mt-3">You can find us anywhere, just fill the form we’re there</p>
                </div>
            </div>

            <div className='p-16'>
                <ComHeader title='Do you have any question about our services or solutions?' />
            </div>

            <div className='p-16 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="transform hover:scale-105 border-t-8 border-orange-500 hover:border hover:border-orange-500 hover:border-t-8 text-center leading-8 shadow-countact-us rounded-lg px-10 py-12 transition-all duration-300">
                    <h2 className='font-semibold text-xl mb-3'>US Headquarters</h2>
                    <p className='font-medium text-neutral-500'>55 Shuman Blvd, Suite 275, Naperville, IL 60563 USA.</p>
                    <a href="tel:+16303556292" className="text-blue-500 block">Tel: +1.630.355.6292</a>
                    <a href="mailto:info@royalcyber.com" className="text-blue-500 block">Email: info@royalcyber.com</a>
                    <Link className='flex mt-10 w-full rounded-full py-1 justify-center text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white duration-200 font-medium' to={'https://www.google.co.in/maps/place/Royal+Cyber/@41.8050397,-88.1464376,16.75z/data=%214m2%213m1%211s0x0:0x139eb821772896c5'}>Get Directions</Link>
                </div>

                <div className="transform hover:scale-105 border-t-8 border-sky-700 hover:border hover:border-sky-700 hover:border-t-8 text-center leading-8 shadow-countact-us rounded-lg px-10 py-12 transition-all duration-300">
                    <h2 className='font-semibold text-xl mb-3'>Canada</h2>
                    <p className='font-medium text-neutral-500'>Unit 202, 2020 Winston Park Drive, Oakville, Ontario L6H 6X7, Canada</p>
                    <a href="tel:+14169452540" className="text-blue-500 block">Tel: +1 416 945 2540</a>
                    <a href="mailto:info@royalcyber.com" className="text-blue-500 block">Email: info@royalcyber.com</a>
                    <Link className='flex mt-10 w-full rounded-full py-1 justify-center text-sky-500 border-2 border-sky-500 hover:bg-sky-500 hover:text-white duration-200 font-medium' to={'https://www.google.co.in/maps/place/Royal+Cyber/@41.8050397,-88.1464376,16.75z/data=%214m2%213m1%211s0x0:0x139eb821772896c5'}>Get Directions</Link>
                </div>

                <div className="flex flex-col justify-center items-center transform hover:scale-105 border-t-8 border-orange-500 hover:border hover:border-orange-500 hover:border-t-8 text-center leading-8 shadow-countact-us rounded-lg px-10 py-12 transition-all duration-300">
                    <img className='h-48' src={global} alt="global" />
                    <h2 className='font-semibold text-xl mb-3'>Our Global Offices</h2>
                    <Link className='flex mt-10 w-full rounded-full py-1 justify-center hover:text-orange-500 border-2 hover:border-orange-500 bg-orange-500 hover:bg-white text-white duration-200 font-medium' to={'https://www.google.co.in/maps/place/Royal+Cyber/@41.8050397,-88.1464376,16.75z/data=%214m2%213m1%211s0x0:0x139eb821772896c5'}>Get Directions</Link>
                </div>
            </div>

            <div className='shadow-inner p-16 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex justify-center items-center'>
                    <img className='w-96' src={support} alt="support" />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <div>
                            <h2 className='font-bold text-2xl mb-1'>Let's Connect!</h2>
                            <p className='font-semibold text-neutral-500'>You can find us anywhere, just fill the form we’re there</p>
                        </div>

                        <form action="" className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-5">
                            <input className='border-2 border-neutral-400 py-2 px-3 focus:outline-none focus:border-orange-500 duration-200' type="text" placeholder='First Name' />
                            <input className='border-2 border-neutral-400 py-2 px-3 focus:outline-none focus:border-orange-500 duration-200' type="text" placeholder='Last Name' />
                            <input className='col-span-2 w-full border-2 border-neutral-400 py-2 px-3 focus:outline-none focus:border-orange-500 duration-200' type="text" placeholder='Organization' />
                            <input className='border-2 border-neutral-400 py-2 px-3 focus:outline-none focus:border-orange-500 duration-200' type="email" placeholder='Business Email' />
                            <input className='border-2 border-neutral-400 py-2 px-3 focus:outline-none focus:border-orange-500 duration-200' type="tel" placeholder='Phone Number' />
                            <select className="col-span-2 w-full border-2 border-neutral-400 py-2 px-3 focus:outline-none focus:border-orange-500 duration-200" name="" id="">
                                <option disabled selected>Country</option>
                                {countries.map((country, index)=>{
                                    return(
                                        <option key={index} value="">{country}</option>
                                    )
                                })}
                            </select>
                            <textarea className='col-span-2 w-full border-2 border-neutral-400 py-2 px-3 focus:outline-none focus:border-orange-500 duration-200 resize-none' rows={3} placeholder='Massage For Us' name="" id=""></textarea>

                            <div className="col-span-2 flex items-center gap-2">
                                <input type="checkbox" id="newsletter" className="text-orange-600 border-gray-300 rounded focus:ring-orange-500"/>
                                <label htmlFor="newsletter" className="text-sm text-gray-700 cursor-pointer">Stay Updated with Our Newsletter</label>
                            </div>

                            <div className="col-span-2 flex items-center gap-2">
                                <input type="checkbox" id="newsletter" className="text-orange-600 border-gray-300 rounded focus:ring-orange-500"/>
                                <label htmlFor="newsletter" className="text-sm text-gray-700 cursor-pointer">I consent to Royal Cyber using the personal information provided above to send me marketing communications about its products and services. I understand I can opt-out at any time. By submitting this form, you acknowledge Royal Cyber can contact you with the information provided by you for business related discussions.</label>
                            </div>

                            <button className='col-span-2 w-full font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full p-3 duration-200'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
