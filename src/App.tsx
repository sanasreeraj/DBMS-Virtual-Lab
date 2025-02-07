// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Theory1 from './pages/Theory1';  // Imported as Theory1
import Practice from './pages/Practice';
import Playground from './pages/Playground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Theory1 />} />
          <Route path="/theory" element={<Theory1 />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;