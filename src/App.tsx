import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import ReactLenis from 'lenis/react'
import About from './sections/About'
import Work from './sections/Work'
import ContactSummary from './sections/ContactSummary'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'

const App = () => {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
      <TechStack />
      <ServiceSummary/>
      <Services />
      <About/>
      <Work />
      <ContactSummary />
      <Contact />
    </ReactLenis>
  )
}

export default App