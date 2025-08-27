import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import icon_1 from '../images/company-partners-icon-1.png';
import ComHeader from '../components/ComHeader';
import partner_1 from '../images/partners-logo-1.png';
import partner_2 from '../images/partners-logo-2.png';
import partner_3 from '../images/partners-logo-3.png';
import partner_4 from '../images/partners-logo-4.png';
import partner_5 from '../images/partners-logo-5.png';
import partner_6 from '../images/partners-logo-6.png';
import partner_7 from '../images/partners-logo-7.png';
import partner_8 from '../images/partners-logo-8.png';
import partner_9 from '../images/partners-logo-9.png';
import partner_10 from '../images/partners-logo-10.png';
import partner_11 from '../images/partners-logo-11.png';
import partner_12 from '../images/partners-logo-12.png';
import banner from '../images/Landing-page-banner-Updated.jpg';
import { Link } from 'react-router';

export default function Partners() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [videoLoaded, setVideoLoaded] = useState([false, false]);

    const images = [
        {title: '', link: partner_1},
        {title: '', link: partner_2},
        {title: '', link: partner_3},
        {title: '', link: partner_4},
        {title: '', link: partner_5},
        {title: '', link: partner_6},
        {title: '', link: partner_7},
        {title: '', link: partner_8},
        {title: '', link: partner_9},
        {title: '', link: partner_10},
        {title: '', link: partner_11},
        {title: '', link: partner_12},
    ]

    const handleVideoLoad = (index) => {
        setVideoLoaded((prev) => {
            const updated = [...prev];
            updated[index - 1] = true;
            return updated;
        });
    };

    const contents = [
        <img className="w-full h-full object-contain" src={icon_1} alt="icon" />,

        videoLoaded[0] ? (
            <iframe
                className="w-full h-full"
                loading="lazy"
                src="https://www.youtube.com/embed/nCBTz7eVo1A"
                title="YouTube video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        ) : (
            <img
                className="w-full h-full object-cover cursor-pointer"
                src="https://img.youtube.com/vi/nCBTz7eVo1A/hqdefault.jpg"
                alt="Video thumbnail"
                onClick={() => handleVideoLoad(1)}
            />
        ),

        videoLoaded[1] ? (
            <iframe
                className="w-full h-full"
                loading="lazy"
                src="https://www.youtube.com/embed/IroOoMc7WVc"
                title="YouTube video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        ) : (
            <img
                className="w-full h-full object-cover cursor-pointer"
                src="https://img.youtube.com/vi/IroOoMc7WVc/hqdefault.jpg"
                alt="Video thumbnail"
                onClick={() => handleVideoLoad(2)}
            />
        )
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % contents.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [contents.length]);

    return (
        <div>
            <div className="relative w-full h-96 pt-[88px]">
                <img className="absolute inset-0 w-full h-full object-cover z-0" src={banner} alt="banner" />

                <div className="relative z-10 flex flex-col justify-center text-white text-center h-full px-4">
                    <h2 className="text-6xl font-bold mb-2">Strategic Partners</h2>
                    <p className="text-xl mt-3">We provide Customized Solutions to help achieve your Business & Technology Goals</p>
                </div>
            </div>
            
            <div className="mx-auto p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-16">
                    <div>
                        <h1 className="font-semibold text-2xl text-cyan-950 leading-[40px]">
                            Placing people in command of your business
                        </h1>
                        <p className="text-lg leading-10 mt-5">Royal Cyber prides itself by partnering with best of the breed technology innovators. We believe that every part of life will work better if it all works together – and that the journey starts with smarter organization with full spectrum of interactions, and a magnificent environment committed to deliver high standards of quality service and expertise.</p>
                    </div>

                    <div className="w-[85%]">
                        <div className="relative h-[300px] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ x: 300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -300, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)'}}
                                >
                                    {contents[activeIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex gap-5 justify-center mt-5">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`${
                                        activeIndex === i ? 'border-orange-500' : 'border-orange-300'
                                    } group hover:border-orange-500 rounded-full p-1 border-4 cursor-pointer inline-flex duration-200`}
                                >
                                    <span
                                        className={`${
                                            activeIndex === i ? 'bg-orange-500' : 'bg-orange-300'
                                        } group-hover:bg-orange-500 w-2 h-2 rounded-full block`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto p-16 bg-gray-100'>
                <div>
                    <ComHeader title='Partnership That Delivers' desc='“Working in Partnership is crucial for us to deliver our clients with sustainable commitments”'/>
                </div>

                <Link className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                    {images.map((image, index)=>{
                        return(
                            <div key={index} className='bg-white flex justify-center items-center'>
                                <img src={image.link} alt={image.link} />
                            </div>
                        )
                    })}
                </Link>
            </div>

            <div className='mx-auto p-16 flex flex-col gap-y-5'>
                <h2 className='font-semibold text-5xl'>Partnerships Disclaimer</h2>
                <p className='text-lg'>IBM®, WebSphere®, Rational®, and Watson® are registered trademarks and the IBM logo and the IBM Business Partner emblem are trademarks of International Business Machines Corporation in the United States, other countries, or both. We do not claim any ownership of any of the trademarks available here: http://www.ibm.com/legal/copytrade.shtml</p>
                <p className='text-lg'>Other company, product or service names may be trademarks or service marks of their respective companies. We are using the name only in an editorial fashion and to the benefit of the trademark owner as a partner, with no intention of infringement of the trademark.</p>
                <p className='text-lg'>The Royal Cyber Inc. subsidiaries websites contain links to other Web sites. We are not responsible for the trademark policies and practices or the content of such Web sites.</p>
            </div>
        </div>
    );
}
