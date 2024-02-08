// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Hobbies from './Hobbies';
import JSON from './JSON';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  {/*
  const [count, setCount] = useState(0);
  */}

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* Sets website index to Home */}
            <Route index element={<Home />} />

            {/* Page routing */}
            <Route path="/home" element={<Home />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/calculator" element={<Calculator/>} />
            <Route path="/json" element={<JSON />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
