import { Link } from 'react-router';
import banner from '../images/Landing-page-banner-Updated.jpg';


export default function Banner(){
    return(
        <div className="relative px-8 xl:px-16">
            <img
                className="w-full h-[420px] object-cover absolute top-0 left-0 z-0"
                src={banner}
                alt="banner"
            />

            <div className="relative z-10 flex flex-col justify-center text-white text-3xl h-[420px] p-8">
                <span className='font-bold text-5xl'>Reimagine. Transform. Thrive.</span>
                <Link to={'company/awards'} className='w-fit mt-7 border border-neutral-400 group hover:bg-orange-600 acrive:bg-orange-600 rounded-full text-center px-5 py-3 transition-all duration-200'>
                    <span className='flex items-center font-semibold p-2 text-base tracking-[1px] leading-[20.8px] whitespace-nowrap group-hover:text-white group-focus:text-white'>Explore our Awards & Recognitions</span>
                </Link>
            </div>
        </div>
    )
}