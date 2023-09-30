import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Faqpages from './pages/faqpages/Faqpages';
import Order from './component/order/Order';
import Company from './component/company/Company';
import Home from './component/home/Home';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/order' element={<Order />}/>
            <Route path='/company' element={<Company />} />
            <Route path='/faqpages' element={<Faqpages />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
