import React from "react";

export type topCarsType = {
	topCars: topCarType[]
}

type topCarType = {
	manufacturer: string
	model: string
}

function Car(props: topCarsType) {
	return (
		<table>

			{props.topCars.map((info, index) => {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{info.manufacturer}</td>
						<td>{info.model}</td>
					</tr>
				)
			})}

		</table>
	)
}

export default Car