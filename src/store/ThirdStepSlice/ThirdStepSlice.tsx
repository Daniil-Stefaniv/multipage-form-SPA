import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ThirdStepSlice = {
	additionallyPrice: number;
	amountSelectedCheckbox: number;
	checkBoxData: {
		id: number;
		isSelected: boolean;
		title: string;
		descr: string;
		price: {
			"For month": {
				text: string;
				number: number;
			};
			"For year": {
				text: string;
				number: number;
			};
		};
	}[];
};

const initialState: ThirdStepSlice = {
	additionallyPrice: 0,
	amountSelectedCheckbox: 0,
	checkBoxData: [
		{
			id: 1,
			isSelected: false,
			title: "Online service",
			descr: "Access to multiplayer games",
			price: {
				"For month": {
					text: "+$1/mo",
					number: 1,
				},
				"For year": {
					text: "+$10/yr",
					number: 10,
				},
			},
		},
		{
			id: 2,
			isSelected: false,
			title: "Larger storage",
			descr: "Extra 1TB of cloud save",
			price: {
				"For month": {
					text: "+$2/mo",
					number: 2,
				},
				"For year": {
					text: "+$20/yr",
					number: 20,
				},
			},
		},
		{
			id: 3,
			isSelected: false,
			title: "Customizable profile",
			descr: "Custom theme on your profile",
			price: {
				"For month": {
					text: "+$2/mo",
					number: 2,
				},
				"For year": {
					text: "+$20/yr",
					number: 20,
				},
			},
		},
	],
};

const ThirdStepSlice = createSlice({
	name: "third step slice",
	initialState,
	reducers: {
		toggle(state: ThirdStepSlice, action: PayloadAction<number>) {
			if (state.checkBoxData[action.payload - 1].isSelected === false) {
				state.amountSelectedCheckbox += 1;
				state.checkBoxData[action.payload - 1].isSelected = true;
			} else {
				state.amountSelectedCheckbox -= 1;
				state.checkBoxData[action.payload - 1].isSelected = false;
			}
			console.log(state.amountSelectedCheckbox);
		},
		calculateAdditionally(
			state: ThirdStepSlice,
			action: PayloadAction<{
				subscriptonPlan: "For month" | "For year";
				id: number;
			}>
		) {
			if (
				state.checkBoxData[action.payload.id - 1].isSelected === false
			) {
				state.additionallyPrice -=
					state.checkBoxData[action.payload.id - 1].price[
						action.payload.subscriptonPlan
					].number;
			} else {
				state.additionallyPrice +=
					state.checkBoxData[action.payload.id - 1].price[
						action.payload.subscriptonPlan
					].number;
			}
		},
		reCalculateAdditionally(
			state: ThirdStepSlice,
			action: PayloadAction<{
				subscriptonPlan: "For month" | "For year";
			}>
		) {
			state.additionallyPrice = 0;

			state.checkBoxData.map((a) => {
				if (a.isSelected) {
					state.additionallyPrice +=
						a.price[action.payload.subscriptonPlan].number;
				}
			});
		},
	},
});

export default ThirdStepSlice.reducer;

export const { toggle, calculateAdditionally, reCalculateAdditionally } =
	ThirdStepSlice.actions;
