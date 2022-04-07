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
					<tr>
						<td key={index}>{index + 1}</td>
						<td key={index}>{info.manufacturer}</td>
						<td key={index}>{info.model}</td>
					</tr>
				)
			})}

		</table>
	)
}

export default Car