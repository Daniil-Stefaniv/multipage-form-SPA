import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FirstPageSlice = {
	inputsList: {
		id: number;
		name: string;
		placeholder: string;
		type: "text" | "number";
		value: string;
		isEmpty: boolean;
	}[];
	errorsText: { [key: string]: string };
};

const initialState: FirstPageSlice = {
	inputsList: [
		{
			id: 1,
			name: "Name",
			placeholder: "e.g. Stephen King",
			type: "text",
			value: "",
			isEmpty: true,
		},
		{
			id: 2,
			name: "Email Address",
			placeholder: "e.g. stephenking@lorem.com",
			type: "text",
			value: "",
			isEmpty: true,
		},
		{
			id: 3,
			name: "Phone Number",
			placeholder: "e.g. +1 234 567 890",
			type: "text",
			value: "",
			isEmpty: true,
		},
	],
	errorsText: {
		empty: "This field is required",
	},
};

const FirstPageSlice = createSlice({
	name: "first page slice",
	initialState,
	reducers: {
		changeValue(
			state: FirstPageSlice,
			action: PayloadAction<{ id: number; newVal: string }>
		) {
			state.inputsList.map((input) => {
				if (input.id === action.payload.id) {
					if (action.payload.newVal === "") {
						input.isEmpty = true;
					} else {
						input.isEmpty = false;
					}
					input.value = action.payload.newVal;
				}
			});
		},
	},
});

export default FirstPageSlice.reducer;
export const { changeValue } = FirstPageSlice.actions;
