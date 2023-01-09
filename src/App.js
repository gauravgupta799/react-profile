import './App.css';
import About from './Components/About/About';
// import Country from './Components/CountryCode/Country';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        {/* <Country/> */}
      </main>
    </>
  );
}

export default App;
