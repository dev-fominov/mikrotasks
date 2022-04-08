import React from "react";

type MoneyType = {
	banknots: string
	value: number
	number: string
	index: number
}


function Filter(props: MoneyType) {

	return (
		<>
			<li key={props.index}>
				<span>{props.banknots}</span>
				<span>{props.number}</span>
				<span>{props.value}</span>
			</li>
		</>
	)
}

export default Filter