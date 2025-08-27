import './App.css';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Technologies from './pages/Technologies';
import Partners from './pages/Partners';
import CountactUs from './pages/ContactUs';
import ClientTestimonial from './pages/ClientTestimonial';
import ExcellenceSolutions from './pages/ExcellenceSolutions';
import Awards from './pages/Awards';
import CaseStudies from './components/CaseStudies';
import Videos from './components/Videos';
import UpcomingEvents from './pages/UpcomingEvents';
import Resources from './pages/Resources';


function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/technologies' element={<Technologies/>} />
        <Route path='/company/partners' element={<Partners/>} />
        <Route path='/company/contact-us' element={<CountactUs/>} />
        <Route path='/company/client-testimonial' element={<ClientTestimonial/>} />
        <Route path='/services/ai-center-of-excellence-solutions' element={<ExcellenceSolutions/>} />
        <Route path='/company/awards' element={<Awards/>} />
        <Route path='/case-studies' element={<CaseStudies/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/company/news-events/upcoming-events' element={<UpcomingEvents/>} />
        <Route path='/resources' element={<Resources/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;