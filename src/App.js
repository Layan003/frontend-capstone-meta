import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Bookings/Index';
import ConfirmedBooking from './components/Bookings/ConfirmedBooking';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<Index/>}/>
        <Route path='/confirm-booking' element={<ConfirmedBooking/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
