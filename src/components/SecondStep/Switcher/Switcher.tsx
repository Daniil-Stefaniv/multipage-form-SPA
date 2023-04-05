import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/HooksTypes";
import { switchSwitcher } from "../../../store/SecondStepSlice/SecondStepSlice";
import { reCalculateAdditionally } from "../../../store/ThirdStepSlice/ThirdStepSlice";

type Switcher = {
	positionOne: string;
	positionTwo: string;
};

const Switcher: FC<Switcher> = ({ positionOne, positionTwo }) => {
	const dispatch = useAppDispatch();
	const switcherVal = useAppSelector(
		(state) => state.SecondPageSlice.switcherVal
	);

	return (
		<div className=" rounded-md flex items-center justify-center p-3 gap-3 bg-[rgba(108,138,213,0.1)]">
			<h2 className=" text-blue-900 font-U-bold">{positionOne}</h2>
			<div
				className={
					switcherVal === "For month"
						? "cursor-pointer rounded-full flex items-center justify-start border-2 w-9 h-5 bg-blue-900 border-blue-900 transition-all"
						: "cursor-pointer rounded-full flex items-center justify-end border-2 w-9 h-5 bg-blue-900 border-blue-900 transition-all"
				}
				onPointerUp={() => {
					if (switcherVal === "For month") {
						dispatch(switchSwitcher("For year"));
						dispatch(
							reCalculateAdditionally({
								subscriptonPlan: "For year",
							})
						);
					} else {
						dispatch(switchSwitcher("For month"));
						dispatch(
							reCalculateAdditionally({
								subscriptonPlan: "For month",
							})
						);
					}
				}}
			>
				<div className="w-4 h-4 bg-white rounded-full"></div>
			</div>
			<h2 className="text-blue-900 font-U-bold">{positionTwo}</h2>
		</div>
	);
};

export default Switcher;
