import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/gameSlice';
import noughtOrCrossReducer from '../features/NoughtOrCross/noughOrCrossSlice';


export const store = configureStore({
    reducer: {
        game: counterReducer,
        noughtOrCross: noughtOrCrossReducer,
    },
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>


