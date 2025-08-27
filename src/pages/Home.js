import Banner from '../components/Banner';
import Main from '../components/Main';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Events from '../components/Events';
import Talk from '../components/Talk';
import Partnerships from '../components/Partnerships';

export default function Home(){
    return(
        <div className='pt-[85px]'>
            <Banner/>
            <Main/>
            <About/>
            <Expertise/>
            <Events/>
            <Talk/>
            <Partnerships/>
        </div>
    )
}