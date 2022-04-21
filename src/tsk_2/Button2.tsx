import React from "react";

type ButtonType = {
	name: string
	callBack: ()=>void
}

function Button2(props: ButtonType) {
	const onClickHandler = () => {
		props.callBack()
	}
	
	return (
		<>
			<button onClick={onClickHandler}>{props.name}</button>
		</>
	)
}

export default Button2