import React from 'react';
import './App.css';
import Car from './Car';

const topCars = [
  { manufacturer: 'BMW', model: 'm5cs' },
  { manufacturer: 'Mercedes', model: 'e63s' },
  { manufacturer: 'Audi', model: 'rs6' }
]

function App() {
  return (
    <div>
      <Car topCars={topCars} />
    </div>
  );
}

export default App;
