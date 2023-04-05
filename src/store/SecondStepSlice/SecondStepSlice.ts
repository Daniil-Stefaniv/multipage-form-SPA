import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SecondSlice = {
	currentCard: 1 | 2 | 3;
	switcherVal: "For month" | "For year";
	cardsList: {
		id: 1 | 2 | 3;
		title: string;
		discount: string;
		price: {
			"For month": {
				priceNum: number;
				priceText: string;
			};
			"For year": {
				priceNum: number;
				priceText: string;
			};
		};
	}[];
	switcherContent: {
		posOne: string;
		posTwo: string;
	};
	currentCardPrice: number;
};

const initialState: SecondSlice = {
	currentCard: 1,
	switcherVal: "For month",
	cardsList: [
		{
			id: 1,
			title: "Arcade",
			price: {
				"For month": {
					priceNum: 9,
					priceText: "$9/mo",
				},
				"For year": {
					priceNum: 90,
					priceText: "$90/yr",
				},
			},
			discount: "2 months free",
		},
		{
			id: 2,
			title: "Advanced",
			price: {
				"For month": {
					priceNum: 12,
					priceText: "$12/mo",
				},
				"For year": {
					priceNum: 120,
					priceText: "$120/yr",
				},
			},
			discount: "2 months free",
		},
		{
			id: 3,
			title: "Pro",
			price: {
				"For month": {
					priceNum: 15,
					priceText: "$15/mo",
				},
				"For year": {
					priceNum: 150,
					priceText: "$150/yr",
				},
			},
			discount: "2 months free",
		},
	],
	switcherContent: {
		posOne: "Monthly",
		posTwo: "Yearly",
	},
	currentCardPrice: 9,
};

const SecondStepSlice = createSlice({
	name: "SecondStepSlice",
	initialState,
	reducers: {
		switchCard(state: SecondSlice, action: PayloadAction<1 | 2 | 3>) {
			if (action.payload !== state.currentCard) {
				state.currentCard = action.payload;
				state.currentCardPrice =
					state.cardsList[action.payload - 1].price[
						state.switcherVal
					].priceNum;
			}
		},
		switchSwitcher(
			state: SecondSlice,
			action: PayloadAction<"For month" | "For year">
		) {
			state.switcherVal = action.payload;

			state.currentCardPrice =
				state.cardsList[state.currentCard - 1].price[
					action.payload
				].priceNum;
		},
	},
});

export default SecondStepSlice.reducer;
export const { switchCard, switchSwitcher } = SecondStepSlice.actions;
