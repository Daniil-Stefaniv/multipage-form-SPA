import { FC } from "react";
import SelectableCard from "./SelectableCard/SelectableCard";
import { useAppSelector } from "../../store/HooksTypes";
import Switcher from "./Switcher/Switcher";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";

type SecondStep = {};

const SecondStep: FC<SecondStep> = ({}) => {
	const iconsList: string[] = [iconArcade, iconAdvanced, iconPro];

	const { cardsList } = useAppSelector((state) => state.SecondPageSlice);

	const { switcherContent, switcherVal } = useAppSelector(
		(state) => state.SecondPageSlice
	);

	return (
		<div className="h-full">
			<div className="grid grid-cols-3 grid-rows-1 gap-3 mb-7">
				{cardsList.map((card) => {
					return (
						<SelectableCard
							key={card.id}
							id={card.id}
							current={card.id}
							title={card.title}
							price={card.price[switcherVal].priceText}
							discount={
								switcherVal === "For month" ? "" : card.discount
							}
							picture={iconsList[card.id - 1]}
						/>
					);
				})}
			</div>
			<Switcher
				positionOne={switcherContent.posOne}
				positionTwo={switcherContent.posTwo}
			/>
		</div>
	);
};

export default SecondStep;
