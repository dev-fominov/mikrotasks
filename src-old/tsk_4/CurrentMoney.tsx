import React from "react";
import { FilterType } from "../App";
import Button from '../tsk_2/Button';
import Filter from './Filter';

type CurrentMoneyType = {
	currentMoney: Array<MoneyType>
	onClickFilter: (name: FilterType) => void
}

type MoneyType = {
	banknots: string
	value: number
	number: string
}

function CurrentMoney(props: CurrentMoneyType) {
	return (
		<>
			<ul>
				{props.currentMoney.map((m: any, index: number) => {
					return (
						<Filter index={index} banknots={m.banknots} value={m.value} number={m.number} />
					)
				})}
			</ul>
			<Button name={'All'} callBack={() => props.onClickFilter('all')} />
			<Button name={'Dollars'} callBack={() => props.onClickFilter('Dollars')} />
			<Button name={'RUBLS'} callBack={() => props.onClickFilter('RUBLS')} />
		</>
	)
}

export default CurrentMoney