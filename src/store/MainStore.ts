import { configureStore } from "@reduxjs/toolkit";
import stepsListSlice from "./baseInterfaceSlice/baseInterfaceSlice";
import FirstPage from "./FirstPageSlice/FirstPageSlice";
import SecondStepSlice from "./SecondStepSlice/SecondStepSlice";
import ThirdStepSlice from "./ThirdStepSlice/ThirdStepSlice";
import FourthStepSlice from "./FourthStepSlice/FourthStepSlice";

const store = configureStore({
	reducer: {
		stepsListSlice: stepsListSlice,
		FirstPageSlice: FirstPage,
		SecondPageSlice: SecondStepSlice,
		ThirdStepSlice: ThirdStepSlice,
		FourthStepSlice: FourthStepSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
