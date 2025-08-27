import { Link } from 'react-router';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-5 px-3">
            <div className='flex justify-between items-center px-8 xl:px-16'>
                <Link to={'/'}>
                    <img className='w-[160px] lg:w-[190px]' src={logo} alt="logo" />
                </Link>

                <div>
                    <div className='hidden lg:flex gap-3'>
                    <div className='flex justify-between items-center gap-3'>
                        <a href="/#" className='cursor-pointer hover:border-b border-b-orange-500 transition-all duration-200'>
                            <span className='text-cyan-950 hover:text-orange-500 font-semibold pr-1 duration-200'>What We Offer</span>
                            <FontAwesomeIcon className='text-orange-600' icon={faAngleDown} />
                        </a>

                        <a href="/#" className='cursor-pointer hover:border-b border-b-orange-500 transition-all duration-200'>
                            <span className='text-cyan-950 hover:text-orange-500 font-semibold pr-1 duration-200'>Learn</span>
                            <FontAwesomeIcon className='text-orange-600' icon={faAngleDown} />
                        </a>

                        <a href="/services/ai-center-of-excellence-solutions" className='cursor-pointer hover:border-b border-b-orange-500 transition-all duration-200'>
                            <span className='text-cyan-950 hover:text-orange-500 font-semibold pr-1 duration-200'>Who We Are</span>
                            <FontAwesomeIcon className='text-orange-600' icon={faAngleDown} />
                        </a>

                        <Link to={'services/ai-center-of-excellence-solutions'} className='cursor-pointer hover:text-orange-500 hover:border-b border-b-red-500 transition-all duration-200 py-[10px] pr-[30px] pl-[15px]'>
                            <FontAwesomeIcon className='w-[17.5px] h-5 text-xl leading-[20px] text-orange-500 mr-1' icon={faLightbulb} />
                            Ai Services
                        </Link>
                    </div>

                    <div className='cursor-pointer border border-orange-600 rounded-full text-center px-5 py-3 w-[140px]'>
                        <span className='justify-center items-center text-orange-600 font-semibold text-base tracking-[1px] leading-[20.8px]'>
                            Search
                            <FontAwesomeIcon className='whitespace-nowrap w-[17.5px] h-5 text-xl leading-[20px] pl-2 text-orange-500' icon={faSearch} />
                        </span>
                    </div>

                    <Link to={'/company/contact-us'} className='bg-orange-600 rounded-full text-center px-5 py-3 w-[140px]'>
                        <span className='whitespace-nowrap text-white font-semibold text-base tracking-[1px] leading-[20.8px]'>Contact Us</span>
                    </Link>
                    </div>

                    <div className='lg:hidden cursor-pointer'>
                        <FontAwesomeIcon className='size-8 hover:text-orange-600 duration-300' icon={faBars} />
                    </div>
                </div>
            </div>
        </div>
    );
}













// import { Link } from 'react-router';
// import logo from '../images/logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
// import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

// export default function Navbar(){
//     return(
//         <div className="fixed flex w-full justify-between items-center p-5">
//             <div>
//                 <img className='w-[160px] lg:w-[190px]' src={logo} alt="logo" />
//             </div>
//             <div className='hidden lg:flex gap-3'>
//                 <div className='flex justify-between items-center gap-3'>
//                     <a href="#" className='py-[10px] pr-[30px] pl-[15px]'>
//                         <span className='cursor-pointer hover:text-orange-500 hover:border-b border-b-red-500 transition-all duration-200'>What We Offer</span>
//                     </a>

//                     <a href="#" className='py-[10px] pr-[30px] pl-[15px]'>
//                         <span className='cursor-pointer hover:text-orange-500 hover:border-b border-b-red-500 transition-all duration-200'>Learn</span>
//                     </a>

//                     <a href="#" className='py-[10px] pr-[30px] pl-[15px]'>
//                         <span className='cursor-pointer hover:text-orange-500 hover:border-b border-b-red-500 transition-all duration-200'>Who We Are</span>
//                     </a>

//                     <span className='cursor-pointer hover:text-orange-500 hover:border-b border-b-red-500 transition-all duration-200 py-[10px] pr-[30px] pl-[15px]'>
//                         <FontAwesomeIcon className='w-[17.5px] h-5 text-xl leading-[20px]' color='#EA580C' icon={faLightbulb} />
//                         Ai Services
//                     </span>
//                 </div>

//                 <div className='cursor-pointer border border-orange-600 rounded-full text-center px-5 py-3 w-[140px]'>
//                     <span className='justify-center items-center text-orange-600 font-semibold text-base tracking-[1px] leading-[20.8px]'>
//                         Search
//                         <FontAwesomeIcon className='whitespace-nowrap w-[17.5px] h-5 text-xl leading-[20px] pl-2' color='#EA580C' icon={faSearch} />
//                     </span>
//                 </div>

//                 <Link className='bg-orange-600 rounded-full text-center px-5 py-3 w-[140px]'>
//                     <span className='whitespace-nowrap text-white font-semibold text-base tracking-[1px] leading-[20.8px]'>Contact Us</span>
//                 </Link>
//             </div>

//             <div className='flex lg:hidden bg-sky-950 px-[10px] py-[6px] w-[46px] h-[38px] justify-center items-center'>
//                 <FontAwesomeIcon className='w-[17.5px] h-5 text-xl leading-[20px]' color='white' icon={faBars} />
//             </div>
//         </div>
//     )
// }