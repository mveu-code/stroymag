import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Services from './views/Services';
import About from './views/About';
import Contacts from './views/Contacts';
import Calculator from './views/Calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
