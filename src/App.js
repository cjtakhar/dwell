import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dash from './components/dash'
import NavBar from './components/navbar'
import Listings from './components/listings'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/dwell" element={<Dash />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
