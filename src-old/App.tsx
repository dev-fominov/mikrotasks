import React, { useState } from 'react';
import './App.css';
import Car from './tsk_1/Car';
import Button from './tsk_2/Button';
import Button2 from './tsk_2/Button2';
import UseState from './tsk_3/UseState';
import CurrentMoney from './tsk_4/CurrentMoney';
import Input from './tsk_5/Input';
// import InputComponent from './tsk_5/InputComponent';


export type FilterType = 'all' | 'Dollars' | 'RUBLS'

function App() {

  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ]

  const Btn1Foo = (subscriber: string) => {
    console.log(subscriber)
  }

  const Btn2Foo = (subscriber: string) => {
    console.log(subscriber)
  }

  let [a, setA] = useState(1);
  const onClickBtn = () => {
    setA(++a);
  }

  const onClickBtnZero = () => {
    setA(0);
  }

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const [filter, setFilter] = useState<FilterType>('all')

  let currentMoney = money

  if (filter === 'Dollars') {
    currentMoney = money.filter((f) => f.banknots === 'Dollars')
  }

  if (filter === 'RUBLS') {
    currentMoney = money.filter((f) => f.banknots === 'RUBLS')
  }

  const onClickFilter = (name: FilterType) => {
    setFilter(name)
  }

  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message1' },
    { message: 'message1' }
  ])

  let [title, setTitle] = useState('')

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message])
  }

  const onClickButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }
  
  const Button1Foo = (name: string) => {
    console.log(name)
  }
  return (
    <div>
      <Car topCars={topCars} />
      <br />
      <br />
      <br />
      <Button name={'Name 1'} callBack={() => Btn1Foo('Vasya')} />
      <Button name={'Name 2'} callBack={() => Btn2Foo('Ivan')} />
      <br />
      <br />
      <br />
      <UseState a={a} onClickBtn={onClickBtn} onClickBtnZero={onClickBtnZero} />
      <br />
      <br />
      <br />
      <CurrentMoney currentMoney={currentMoney} onClickFilter={onClickFilter} />
      <br />
      <br />
      <br />

      {/* <InputComponent addMessage={addMessage}/> */}

      <Input title={title} setTitle={setTitle} />
      <Button name={'+'} callBack={onClickButtonHandler} />
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}

      <br />
      <br />
      <br />
      <Button2 name={'click'} callBack={() => Button1Foo('dfhfdgh')} />

    </div>
  );
}

export default App;
