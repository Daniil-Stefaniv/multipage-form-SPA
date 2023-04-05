import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/HooksTypes";
import { switchCard } from "../../../store/SecondStepSlice/SecondStepSlice";

type SelectableCard = {
	current: 1 | 2 | 3;
	id: 1 | 2 | 3;
	title: string;
	price: string;
	discount: string;
	picture: string;
};

const SelectableCard: FC<SelectableCard> = ({
	current,
	id,
	title,
	price,
	discount,
	picture,
}) => {
	const dispatch = useAppDispatch();

	const { currentCard } = useAppSelector((state) => state.SecondPageSlice);

	return (
		<div
			className={
				current === currentCard
					? "bg-[rgba(108,138,213,0.1)] border-[1px] border-blue-900 p-4 transition-all rounded-md cursor-pointer flex flex-col"
					: "border-[1px] border-gray-200 p-4 transition-all rounded-md cursor-pointer hover:border-blue-800 flex flex-col"
			}
			onPointerUp={() => dispatch(switchCard(id))}
		>
			<picture>
				<img className=" mb-9" src={picture} alt="" />
			</picture>

			<h3 className=" font-U-bold text-lg text-blue-900">{title}</h3>
			<span className="text-base font-U-reg text-gray-400">{price}</span>
			<span className="text-base font-U-reg text-blue-900">
				{discount}
			</span>
		</div>
	);
};

export default SelectableCard;
