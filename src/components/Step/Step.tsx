import { FC } from "react";

type Step = {
	id: number;
	count: number;
	name: string;
	title: string;
	isFulfilled: boolean;
};

const Step: FC<Step> = ({ id, count, name, title, isFulfilled }) => {
	return (
		<div id={`${id}`} className=" flex w-full gap-5 items-center h-fit">
			<span
				className={
					(isFulfilled
						? "bg-[rgba(255,255,255,0.7)] text-slate-800"
						: "text-white") +
					" px-5 py-3 rounded-full border-[1px] border-white p-4 font-semibold"
				}
			>
				{count}
			</span>
			<div>
				<span className=" text-slate-400">{name}</span>
				<h3 className="text-white">{title}</h3>
			</div>
		</div>
	);
};
export default Step;
