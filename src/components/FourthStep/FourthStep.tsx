import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/HooksTypes";
import { toStep } from "../../store/baseInterfaceSlice/baseInterfaceSlice";

type FourthStep = {};

const FourthStep: FC<FourthStep> = ({}) => {
	const dispatch = useAppDispatch();

	const { currentPlanBtn } = useAppSelector((state) => state.FourthStepSlice);
	const { currentCard, cardsList, switcherVal } = useAppSelector(
		(state) => state.SecondPageSlice
	);

	const { checkBoxData, amountSelectedCheckbox } = useAppSelector(
		(state) => state.ThirdStepSlice
	);

	const { fullPrice } = useAppSelector((state) => state.FourthStepSlice);

	return (
		<div>
			<div className=" p-6 bg-blue-50 rounded-lg">
				<div className="flex items-center justify-between">
					<div className="">
						<h2 className=" font-U-medium text-blue-900 text-xl">{`${
							cardsList[currentCard - 1].title
						}(${
							switcherVal === "For month" ? "Monthly" : "Yearly"
						})`}</h2>
						<button
							className=" font-U-reg transition-all text-blue-700 text-lg hover:underline"
							onPointerUp={() => dispatch(toStep(2))}
						>
							{currentPlanBtn}
						</button>
					</div>
					<p className=" font-U-bold text-blue-900 text-lg">
						{
							cardsList[currentCard - 1].price[switcherVal]
								.priceText
						}
					</p>
				</div>

				<hr
					className={amountSelectedCheckbox === 0 ? "hidden" : "my-6"}
				/>

				{checkBoxData.map((chekbox) => {
					if (chekbox.isSelected) {
						return (
							<div
								key={chekbox.id}
								className="flex items-center justify-between"
							>
								<h3 className=" text-gray-400 font-U-reg mb-2">
									{chekbox.title}
								</h3>
								<p className=" font-U-medium text-blue-900">
									{chekbox.price[switcherVal].text}
								</p>
							</div>
						);
					}
				})}
			</div>
			<div className=" p-6 flex items-center justify-between">
				<h3 className=" font-U-reg text-base text-gray-400">{`Total (${
					switcherVal === "For month" ? "per month" : "per year"
				})`}</h3>
				<p className="font-U-bold text-2xl text-blue-600">
					{`+$${fullPrice}/${
						switcherVal === "For month" ? "mo" : "yr"
					}`}
				</p>
			</div>
		</div>
	);
};

export default FourthStep;
