import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FourthStepSlice = {
	currentPlanBtn: string;
	result: {
		"For month": string;
		"For year": string;
	};
	fullPrice: number;
};

const initialState: FourthStepSlice = {
	currentPlanBtn: "Change",
	result: {
		"For month": "Total(per month)",
		"For year": "Total(per year)",
	},
	fullPrice: 9,
};

const FourthStepSlice = createSlice({
	name: "fourth step slice",
	initialState,
	reducers: {
		getFull(
			state: FourthStepSlice,
			action: PayloadAction<[number, number]>
		) {
			const [firstNum, secondNum] = action.payload;

			state.fullPrice = firstNum + secondNum;
		},
	},
});

export default FourthStepSlice.reducer;
export const { getFull } = FourthStepSlice.actions;
