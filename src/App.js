
import './App.css';
import Leftsection from './components/Leftsection';
import Rightsection from './components/Rightsection';
import Navbar from './components/Navbar.js';


function App() {
  return (<div> <Navbar></Navbar>
  <div className='section'>  <Leftsection></Leftsection>
    <Rightsection></Rightsection></div>
  
     </div>
  );
}

export default App;
