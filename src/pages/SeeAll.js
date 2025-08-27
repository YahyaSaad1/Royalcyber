import { Link } from 'react-router';
import { useState } from 'react';


export default function SeeAll({items}){
    const [searchTerm, setSearchTerm] = useState("");
    const filteredItems = items.filter(item=> item.title.toLowerCase().includes(searchTerm.toLowerCase()))

        return(
        <section className="pt-[85px] mx-auto">
            <div className="py-16 px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pb-5 border-b-2 border-b-gray-300">
                    <div className="col-span-3 w-full">
                        <input onChange={e=> setSearchTerm(e.target.value)} className="w-full rounded-md outline-gray-200 py-2 px-3 font-semibold text-black border-2" type="search" name="search" id="search" placeholder="Search" />
                    </div>
                    <div className="flex gap-3 col-span-2">
                        <button onClick={()=> setSearchTerm("")} className="rounded-md py-2 px-7 font-semibold text-white bg-orange-600 hover:bg-white hover:text-orange-600 border-2 hover:border-orange-600 duration-200">RESET</button>
                    </div>
                </div>
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {filteredItems.map((item, index)=>{
                        return(
                            <Link to={'/#'} key={index}>
                                <img src={item.image} alt={item.image} />
                                <p className='mt-3 font-medium leading-7 text-xl -tracking-wide text-sky-600'>{item.title}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}