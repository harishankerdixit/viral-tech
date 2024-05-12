import './App.css'
import Navbar from './components/navbar'
// import Footer from './components/footer/footer'
import Footer1 from './components/footer/footer1'
import {Hire} from './components/Hire/Hire'
import { Services } from './components/Services/Services'
import {Contacts} from './components/Contact/Contacts'
import {Work} from './components/Work/Work'
import { Clients } from './components/Clients/Clients'
import { Home } from './components/Home/Home'
import { Faq } from './components/Faq/Faq'
import { AboutUsTemp } from './components/Aboutus/aboutus';

function App() {

  return (
    <>
    <Navbar />
    {/* <Footer /> */}
    <Home />
    <Work />
    <Hire />
    <Services />
    <AboutUsTemp />
    <Clients />
    <Faq />
    <Contacts />
    <Footer1 />
    </>
  )
}

export default App
