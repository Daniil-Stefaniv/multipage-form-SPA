import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StepsListState = {
	currentStep: 1 | 2 | 3 | 4;
	stepsList: {
		stepNum: number;
		stepName: string;
		stepTitle: string;
	}[];
	titlesList: { 1: string; 2: string; 3: string; 4: string };
	descList: { 1: string; 2: string; 3: string; 4: string };
	btnTemplates: {
		next: { finished: string; notFinished: string };
		previous: string;
	};
	finallyPageInfo: {
		title: string;
		descr: string;
	};
};

const initialState: StepsListState = {
	currentStep: 1,
	stepsList: [
		{
			stepNum: 1,
			stepName: "step 1",
			stepTitle: "YOUR INFO",
		},
		{
			stepNum: 2,
			stepName: "step 2",
			stepTitle: "SELECT PLAN",
		},
		{
			stepNum: 3,
			stepName: "step 3",
			stepTitle: "ADD-ONS",
		},
		{
			stepNum: 4,
			stepName: "step 4",
			stepTitle: "SUMMARY",
		},
	],
	titlesList: {
		1: "Personal info",
		2: "Select your plan",
		3: "Pick add-ons",
		4: "Finishing up",
	},
	descList: {
		1: "Please provide your name, email address, and phone number.",
		2: "You have the option of monthly or yearly billing.",
		3: "Add-ons help enhance your gaming experience.",
		4: "Double-check everything looks OK before confirming.",
	},
	btnTemplates: {
		next: { finished: "Confirm", notFinished: "Next Step" },
		previous: "Go Back",
	},
	finallyPageInfo: {
		title: "Thank you!",
		descr: "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
	},
};

const baseInterfaceSlice = createSlice({
	name: "steps list slice",
	initialState,
	reducers: {
		nextStep(state: StepsListState, action: PayloadAction) {
			if (state.currentStep !== 4) {
				state.currentStep++;
			}
		},
		previousStep(state: StepsListState, action: PayloadAction) {
			if (state.currentStep !== 1) {
				state.currentStep--;
			}
		},
		toStep(state: StepsListState, action: PayloadAction<1 | 2 | 3 | 4>) {
			state.currentStep = action.payload;
		},
	},
});

export default baseInterfaceSlice.reducer;
export const { nextStep, previousStep, toStep } = baseInterfaceSlice.actions;
