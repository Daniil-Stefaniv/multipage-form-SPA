import { FC, PointerEventHandler } from "react";
import checkBoxIcon from "../../../assets/images/icon-checkmark.svg";

type CheckboxType = {
	id: number;
	isSelected: boolean;
	title: string;
	descr: string;
	price: string;
	handler: PointerEventHandler;
};

const Checkbox: FC<CheckboxType> = ({
	id,
	isSelected,
	title,
	descr,
	price,
	handler,
}) => {
	return (
		<label
			onPointerUp={handler}
			className={
				isSelected
					? "border-[1px] border-blue-900 rounded-md p-4 cursor-pointer flex items-center bg-[rgba(108,138,213,0.1)]"
					: "border-[1px] border-gray-300 rounded-md p-4 cursor-pointer flex items-center hover:border-blue-900 transition-all"
			}
		>
			<div
				className={
					isSelected
						? " h-5 w-5 border-[1px] border-blue-900 bg-blue-900 rounded-[4px] transition-all mr-[5%]"
						: " h-5 w-5 border-[1px] border-gray-300 rounded-[4px] transition-all mr-[5%]"
				}
			>
				<picture>
					<img
						className={
							isSelected
								? " w-full h-full transition-all"
								: "hidden transition-all"
						}
						src={checkBoxIcon}
						alt=""
					/>
				</picture>
			</div>

			<div className=" mr-auto">
				<h2 className=" font-U-medium text-blue-900">{title}</h2>

				<p className=" font-U-reg text-sm text-gray-400">{descr}</p>
			</div>

			<p className=" font-U-reg text-sm text-blue-800">{price}</p>
		</label>
	);
};

export default Checkbox;
