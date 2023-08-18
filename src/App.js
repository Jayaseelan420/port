import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Navbar } from './components/Nav/nav';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Qualification } from './components/qualification/qualification';
import { Experiment } from './components/experiment/experiment';

import { Certificate } from './components/certificates/certificate';
import { Skill } from './components/skills/skill';
import { Contact } from './components/contact/contact';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
     
      <Route path='/' element={[<Navbar/>,<Home/>,<About/>,<Qualification/>,<Experiment/>,<Certificate/>,<Contact/>]}/>
      <Route path='/about' element={[<Navbar/>,<About/>]}/>
      <Route path='/abt'element={[<Navbar/>,<About/>]}/>
      <Route path='/qualification'element={[<Navbar/>,<Qualification/>]}/>
      <Route path='/experiences' element={[<Navbar/>,<Experiment/>]}/>
     
      <Route path='/certificates' element={[<Navbar/>,<Certificate/>]}/>
      <Route path='/skills' element={[<Navbar/>,<Skill/>]}/>
      <Route path='/contact' element={[<Navbar/>,<Contact/>]}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
