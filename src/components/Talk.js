export default function Talk(){
    const countries = ["Algeria", "Bahrain", "Comoros", "Djibouti", "Egypt", "Iraq", "Jordan", "Kuwait", "Lebanon", "Libya", "Mauritania", "Morocco", "Oman", "Palestine", "Qatar", "Saudi Arabia", "Somalia", "Sudan", "Syria", "Tunisia", "United Arab Emirates", "Yemen"];

    return(
        <section className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-talk 2xl:mx-[160.5px] xl:mx-[35px] justify-between">
                <div className="p-10 bg-[#F7F7F7] flex flex-col justify-between">
                    <div className="mt-4">
                        <h3 className="mb-5 font-bold text-5xl leading-[60px]">Ready to Elevate your Digital Strategy?</h3>
                        <h3 className="text-orange-600 font-medium text-2xl">Let’s talk about your transformation goals.</h3>
                    </div>
                    <p className="text-xl">Tell us about your business and let’s explore how we can innovate using our technologies together.</p>
                    <div>
                        <h3 className="text-orange-600 font-bold text-2xl">Contact Us</h3>
                        <h3 className="font-bold text-2xl mt-4">1.630.355.6292</h3>
                    </div>
                </div>
                <div className="p-10">
                    <form action="" className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-5">
                        <input className="w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7" type="text" placeholder="First Name*" />
                        <input className="w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7" type="text" placeholder="Last Name*" />
                        <input className="col-span-2 w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7" type="text" placeholder="Organization Name*" />
                        <input className="w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7" type="email" placeholder="Business Email*" />
                        <input className="w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7" type="text" placeholder="Phone*" />
                        <select className="col-span-2 w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7" name="" id="">
                            { countries.map((country, index)=>{
                                return(
                                    <option key={index} value={country}>{country}</option>
                                )
                            })}
                        </select>
                        <textarea className="col-span-2 w-full outline-none border-b-2 border-neutral-300 p-3 focus:border-orange-500 duration-200 rounded-sm mb-7" placeholder="Message for us" name="" id="" rows={3}></textarea>
                        
                        <button className="col-span-2 w-full bg-orange-500 hover:bg-orange-600 rounded-full text-white font-medium p-3 duration-200">Schedule a free Consultation</button>
                    </form>
                </div>
            </div>
        </section>
    )
}