import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "../../store/HooksTypes";
import {
	calculateAdditionally,
	toggle,
} from "../../store/ThirdStepSlice/ThirdStepSlice";
import { getFull } from "../../store/FourthStepSlice/FourthStepSlice";

const ThirdStep = () => {
	const dispatch = useAppDispatch();

	const { checkBoxData } = useAppSelector((state) => state.ThirdStepSlice);
	const switcherVal: "For month" | "For year" = useAppSelector(
		(state) => state.SecondPageSlice.switcherVal
	);

	return (
		<div className=" flex flex-col gap-4">
			{checkBoxData.map(({ id, isSelected, title, descr, price }) => {
				return (
					<Checkbox
						key={id}
						id={id}
						isSelected={isSelected}
						title={title}
						descr={descr}
						price={price[switcherVal].text}
						handler={() => {
							dispatch(toggle(id));
							dispatch(
								calculateAdditionally({
									id: id,
									subscriptonPlan: switcherVal,
								})
							);
						}}
					/>
				);
			})}
		</div>
	);
};

export default ThirdStep;
