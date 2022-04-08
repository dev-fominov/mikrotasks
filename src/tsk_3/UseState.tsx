import React, { useState } from "react";
import Button from '../tsk_2/Button';

type CountType = {
	a: number
	onClickBtn: ()=>void
	onClickBtnZero: ()=>void
}

 
function UseState(props: CountType) {
	return (
		<>
			<h1>{props.a}</h1>

			<Button name={'add +1'} callBack={props.onClickBtn} />
			<Button name={'return 0'} callBack={props.onClickBtnZero} />

		</>
	)
}

export default UseState

{/* <button onClick={onClickBtn}>+1</button>
			<button onClick={onClickBtnZero}>0</button> */}