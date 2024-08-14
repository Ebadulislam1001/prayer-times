import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Homepage from './Components/Homepage/Homepage.jsx';
import Nearby from './Components/Nearby/Nearby.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-between">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nearby" element={<Nearby />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App

