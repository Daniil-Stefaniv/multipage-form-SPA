import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/HooksTypes";
import Step from "./Step/Step";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import FourthStep from "./FourthStep/FourthStep";
import {
	nextStep,
	previousStep,
} from "../store/baseInterfaceSlice/baseInterfaceSlice";
import { getFull } from "../store/FourthStepSlice/FourthStepSlice";

import finallyImg from "../assets/images/icon-thank-you.svg";

const App: FC = () => {
	const [status, setStatus] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	const { stepsList, currentStep, titlesList, descList, btnTemplates } =
		useAppSelector((state) => state.stepsListSlice);

	const { inputsList } = useAppSelector((state) => state.FirstPageSlice);

	const { currentCardPrice } = useAppSelector(
		(state) => state.SecondPageSlice
	);

	const { additionallyPrice } = useAppSelector(
		(state) => state.ThirdStepSlice
	);

	const { descr, title } = useAppSelector(
		(state) => state.stepsListSlice.finallyPageInfo
	);

	const steps = {
		1: <FirstStep inputsList={inputsList} />,
		2: <SecondStep />,
		3: <ThirdStep />,
		4: <FourthStep />,
	};

	return (
		<div className=" bg-blue-100 flex items-center justify-center h-[1000px]">
			<section className=" rounded-xl p-4 bg-white grid grid-cols-[0.6fr,_1.4fr] w-[60%] h-[600px]">
				<div className="overflow-hidden relative rounded-xl w-full h-full  ">
					<svg
						className="absolute"
						xmlns="http://www.w3.org/2000/svg"
						width="274"
						height="568"
						fill="none"
						viewBox="0 0 274 568"
					>
						<rect width="274" height="568" fill="#483EFF" rx="10" />
						<mask
							id="a"
							width="274"
							height="568"
							x="0"
							y="0"
							maskUnits="userSpaceOnUse"
							style={{ maskType: "alpha" }}
						>
							<rect
								width="274"
								height="568"
								fill="#fff"
								rx="10"
							/>
						</mask>
						<g mask="url(#a)">
							<path
								fill="#6259FF"
								fillRule="evenodd"
								d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
								clipRule="evenodd"
							/>
							<path
								fill="#F9818E"
								fillRule="evenodd"
								d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
								clipRule="evenodd"
							/>
							<path
								stroke="#fff"
								strokeLinecap="round"
								strokeLinejoin="bevel"
								strokeWidth="5"
								d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"
							/>
							<path
								fill="#FFAF7E"
								d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
							/>
						</g>
					</svg>

					<div className="relative z-10 grid h-full grid-col-1 grid-rows-[repeat(4,_0.15fr)] p-6">
						{stepsList.map((step, idx) => (
							<Step
								id={idx}
								key={step.stepNum}
								count={step.stepNum}
								name={step.stepName}
								title={step.stepTitle}
								isFulfilled={
									step.stepNum === currentStep ? true : false
								}
							/>
						))}
					</div>
				</div>

				{status ? (
					<div className="p-24 flex flex-col justify-center items-center gap-7">
						<picture>
							<img src={finallyImg} alt="" />
						</picture>

						<h1 className=" text-blue-900 font-U-bold text-4xl">
							{title}
						</h1>

						<p className=" text-center text-gray-400">{descr}</p>
					</div>
				) : (
					<div className=" pt-10 pb-2 px-16 grid grid-cols-1 grid-rows-[0.5fr,0.5fr,4fr,0.5fr]">
						<h1 className="font-U-bold text-blue-900 text-4xl font-bold">
							{titlesList[currentStep]}
						</h1>
						<p className=" font-U-reg text-[] text-gray-400 mb-8">
							{descList[currentStep]}
						</p>

						<div className=" h-[80%] grid grid-cols-1 gap-4">
							{steps[currentStep]}
						</div>

						<div className="flex justify-between">
							<div>
								<button
									className={
										(currentStep === 1 ? "hidden" : "") +
										" text-base font-U-medium text-slate-400 hover:text-blue-900 transition-all"
									}
									onPointerUp={() => {
										dispatch(previousStep());
									}}
								>
									{btnTemplates.previous}
								</button>
							</div>

							<button
								className={
									currentStep === 4
										? " px-5 h-full rounded-lg bg-pink-400 text-white hover:bg-pink-600 transition-all"
										: " px-5 h-full rounded-lg bg-blue-800 text-white hover:bg-blue-600 transition-all"
								}
								onPointerUp={() => {
									if (currentStep !== 4) {
										if (currentStep === 1) {
											let isAbleToStep: boolean = false;

											inputsList.map((input) => {
												if (input.isEmpty) {
													isAbleToStep = false;
													console.log("fal");
												} else {
													isAbleToStep = true;
													console.log("fal");
												}
											});

											if (isAbleToStep) {
												dispatch(nextStep());
											}
										} else {
											if (currentStep === 3) {
												dispatch(
													getFull([
														currentCardPrice,
														additionallyPrice,
													])
												);
											}
										}

										dispatch(nextStep());
									} else {
										setStatus(true);
									}
								}}
							>
								{currentStep === 4
									? btnTemplates.next.finished
									: btnTemplates.next.notFinished}
							</button>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export default App;
