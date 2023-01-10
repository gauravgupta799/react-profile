import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ScrollDown from './Components/Home/ScrollDown';
import Qualifications from './Components/Qualification/Qualifications';
import Scrollup from './Components/ScrollUp/Scrollup';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualifications/>
        <Testimonials/>
        <Contact/>
      </main>
        <Footer/>
        <Scrollup/>

    </>
  );
}

export default App;
