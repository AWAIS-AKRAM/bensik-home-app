import Home from './home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';

function App() {
  return (
 <div className="App">
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path='/about' element={<About/>}/>
   </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
