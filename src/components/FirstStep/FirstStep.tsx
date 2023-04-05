import { ChangeEvent, FC, MutableRefObject, useRef } from "react";
import MyInput from "../MyInput/MyInput";
import { changeValue } from "../../store/FirstPageSlice/FirstPageSlice";
import { useAppDispatch } from "../../store/HooksTypes";

type FirstStep = {
	inputsList: {
		id: number;
		placeholder: string;
		name: string;
		type: "number" | "text";
		value: string;
	}[];
};

const FirstStep: FC<FirstStep> = ({ inputsList }) => {
	const dispatch = useAppDispatch();

	const refsList: {
		[key: string]: MutableRefObject<null | HTMLInputElement>;
	} = {};

	inputsList.map((input) => {
		refsList[input.id] = useRef(null);
	});

	return (
		<>
			{inputsList.map(({ id, placeholder, name, type, value }) => {
				return (
					<MyInput
						key={id}
						placeholder={placeholder}
						currentRef={refsList[id]}
						name={name}
						type={type}
						val={value}
						handler={(e: ChangeEvent): void => {
							console.log(e.currentTarget.nodeValue);

							dispatch(
								changeValue({
									id: id,
									newVal: (e.target as HTMLInputElement)
										.value,
								})
							);
						}}
					/>
				);
			})}
		</>
	);
};

export default FirstStep;
