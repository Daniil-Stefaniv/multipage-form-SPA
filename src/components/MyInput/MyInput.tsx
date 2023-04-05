import { ChangeEventHandler, FC, MutableRefObject } from "react";

type MyInput = {
	name: string;
	placeholder: string;
	type: "text" | "number";
	handler: ChangeEventHandler;
	currentRef: MutableRefObject<null | HTMLInputElement>;
	val: string;
};

const MyInput: FC<MyInput> = ({
	name,
	placeholder,
	type,
	handler,
	currentRef,
	val,
}) => {
	const currentInputRef = currentRef;

	return (
		<label className="grid ">
			<div className="flex items-center justify-between mb-1">
				<span className="">{name}</span>
				<span className="">{""}</span>
			</div>

			<input
				ref={currentInputRef}
				onChange={handler}
				className=" font-U-reg text-sm border-zinc-300 focus-visible:border-blue-900 border rounded-md px-5 py-1 focus-visible:outline-none active:outline-none"
				placeholder={placeholder}
				type={type}
				value={val}
			/>
		</label>
	);
};

export default MyInput;
