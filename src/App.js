// App.js
import React, { useState, useEffect } from 'react';


import './App.css';
import Caviet from './Components/Caviet';

function App() {
  const [isCavietOpen, setCavietOpen] = useState(true);

  const closeCaviet = () => {
    setCavietOpen(false);
  };

  useEffect(() => {
    setCavietOpen(true);
  }, []);

  return (
    <div className={`App ${isCavietOpen ? 'blurred' : ''}`}>
      <h1>My App</h1>
      <Caviet isOpen={isCavietOpen} onClose={closeCaviet} />
     
    </div>
  );
}

export default App;
