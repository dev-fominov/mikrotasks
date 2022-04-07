import React from 'react';
import './App.css';
import Car from './tsk_1/Car';
import Button from './tsk_2/Button';

const topCars = [
  { manufacturer: 'BMW', model: 'm5cs' },
  { manufacturer: 'Mercedes', model: 'e63s' },
  { manufacturer: 'Audi', model: 'rs6' }
]

function App() {

  const Btn1Foo = (subscriber: string) => {
    console.log(subscriber)
  }

  const Btn2Foo = (subscriber: string) => {
    console.log(subscriber)
  }
  

  return (
    <div>
      <Car topCars={topCars} />
      <br />
      <Button name={'Name 1'} callBack={() => Btn1Foo('Vasya')} />
      <Button name={'Name 2'} callBack={() => Btn2Foo('Ivan')} />
    </div>
  );
}

export default App;
