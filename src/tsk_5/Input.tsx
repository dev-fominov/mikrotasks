import React, { ChangeEvent } from "react";

type InputPropsType = {
	setTitle: (title: string)=>void,
	title: string
}

function Input(props: InputPropsType) {

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setTitle(event.currentTarget.value)
	}


	return (
		<input value={props.title} onChange={onChangeInputHandler} />
	)
}

export default Input