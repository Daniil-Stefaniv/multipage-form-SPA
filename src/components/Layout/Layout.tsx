import { ChangeEvent, FC, MutableRefObject, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/HooksTypes";
import Step from "../Step/Step";
import MyInput from "../MyInput/MyInput";
import { changeValue } from "../../store/FirstPageSlice/FirstPageSlice";
import stepsbg from "../assets/images/bg-sidebar-desktop.svg";
import FirstStep from "../FirstStep/FirstStep";
import { Outlet } from "react-router";

const Layout = () => {
	const dispatch = useAppDispatch();
	const { stepsList, currentStep, titlesList, descList, btnTemplates } =
		useAppSelector((state) => state.stepsListSlice);
	const { inputsList } = useAppSelector((state) => state.FirstPageSlice);

	return (
		<div className="bg-blue-100 flex items-center justify-center h-[1000px]">
			<section className=" rounded-xl p-4 bg-white grid grid-cols-[0.4fr,_1.6fr] w-[60%] h-[600px]">
				<div className=" overflow-hidden relative rounded-xl p-6 h-full bg-blue-900 ">
					<picture className="">
						<img
							className=" select-none absolute z-0 top-0 left-0 right-0 bottom-0 w-[100%] h-[100%]"
							src={stepsbg}
							alt=""
						/>
					</picture>

					<div className="relative z-10 grid h-full grid-col-1 grid-rows-[repeat(4,_0.2fr)]">
						{stepsList.map((step, idx) => (
							<Step
								id={idx}
								key={step.stepNum}
								count={step.stepNum}
								name={step.stepName}
								title={step.stepTitle}
								isFulfilled={true}
							/>
						))}
					</div>
				</div>

				<div className=" pt-10 pb-2 px-32 grid grid-cols-1 grid-rows-[0.5fr,0.5fr,4fr,0.5fr]">
					<h1 className=" text-slate-900 text-4xl font-bold">
						{titlesList[currentStep]}
					</h1>
					<p>{descList[currentStep]}</p>

					<div className=" h-[80%] grid grid-cols-1 gap-4">
						{<Outlet />}
					</div>

					<div className="flex justify-between">
						<button className=" text-slate-400 hover:bg-gray-">
							{btnTemplates.previous}
						</button>
						<button className=" px-5 h-full rounded-lg bg-blue-800 text-white hover:bg-blue-600 transition-all">
							{currentStep === 4
								? btnTemplates.next.finished
								: btnTemplates.next.notFinished}
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Layout;
