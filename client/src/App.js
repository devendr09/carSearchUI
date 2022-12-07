import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import AddCar from './components/AddCar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../.env";

function App() {
  return (
    <div className='main_container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/add' element={<AddCar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
