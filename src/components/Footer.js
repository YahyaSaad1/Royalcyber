import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

export default function Footer(){

    const social = [
        {icon: faFacebookF, link:''},
        {icon: faXTwitter, link:''},
        {icon: faLinkedinIn, link:''},
        {icon: faYoutube, link:''},
        {icon: faInstagram, link:''},
        {icon: faWhatsapp, link:''},
    ]
    return(
        <section className="pt-5 pb-10 bg-black text-white">
            <div className="p-16 flex flex-col gap-5 justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-y-3 mb-10">
                        <h2 className="font-bold text-lg">Industries</h2>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Retail Industry</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Healthcare Industry</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Travel Industry</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Automotive Industry</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Banking & Finance Industry</Link>
                    </div>
                    <div className="flex flex-col gap-y-3 mb-10">
                        <h2 className="font-bold text-lg">Core Services</h2>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Digital Consulting</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">APIs & Integration</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Cloud Services</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">ServiceNow</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Robotic Process Automation</Link>
                    </div>
                    <div className="flex flex-col gap-y-3 mb-10">
                        <h2 className="font-bold text-lg">Innovations</h2>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">3D Product Customization</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Monitor Pro for Supply Chain</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">GoTestPro</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Securacloud</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">AiagentBot</Link>
                    </div>
                    <div className="flex flex-col gap-y-3 mb-10">
                        <h2 className="font-bold text-lg">Contact Us:</h2>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">USA Address: 55 Shuman Blvd, Suite 275, Naperville, IL 60563 USA.</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Tel: +1.630.355.6292</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Email: info@royalcyber.com</Link>
                        <Link className="cursor-pointer hover:text-orange-600 transition-all duration-200">Follow us:</Link>
                        <div className="grid grid-cols-6">
                            {social.map((icon, index)=>{
                                return(
                                    <Link to={''} className="bg-neutral-800 hover:bg-orange-600 flex justify-center items-center rounded-full w-10 h-10 transition-all duration-200">
                                        <FontAwesomeIcon className="h-5" icon={icon.icon} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-neutral-800 mb-5" />

            <div className="px-16 flex flex-col gap-5 mt-10 items-center lg:justify-between lg:flex-row">
                <p className="order-2 lg:order-1 text-center lg:text-left">
                    Copyright ©2025 Royal Cyber Inc. All Rights Reserved.
                </p>

                <div className="order-1 lg:order-2 flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
                    <Link className="hover:border-b-2 hover:border-orange-600 hover:text-orange-600 transition-all duration-200" to={''}>Cookies Policy</Link>
                    <Link className="hover:border-b-2 hover:border-orange-600 hover:text-orange-600 transition-all duration-200" to={''}>Privacy Policy</Link>
                    <Link className="hover:border-b-2 hover:border-orange-600 hover:text-orange-600 transition-all duration-200" to={''}>Sitemap</Link>
                    <Link className="hover:border-b-2 hover:border-orange-600 hover:text-orange-600 transition-all duration-200" to={''}>Disclaimer</Link>
                    <Link className="hover:border-b-2 hover:border-orange-600 hover:text-orange-600 transition-all duration-200" to={''}>Contact Us</Link>
                </div>
            </div>

        </section>
    )
}