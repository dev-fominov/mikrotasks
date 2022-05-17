import React, { ChangeEvent, useState } from "react";

type AddMessageType = {
	addMessage:(title:string)=>void
}

function InputComponent(props: AddMessageType) {

	let [title, setTitle] = useState('')

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}
	const onClickButtonHandler = () => {
		props.addMessage(title)
		setTitle('')
	}

	return (
		<div>
			<input value={title} onChange={onChangeInputHandler} />
			<button onClick={onClickButtonHandler}>+</button>
		</div>
	)
}

export default InputComponent