import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NoughtOrCrossState {
    value: boolean[] | null[],
    playerX: boolean,
    playerO: boolean,
};

const initialState: NoughtOrCrossState = {
    value: [null, null, null, null, null, null, null, null, null],
    playerX: true,
    playerO: false,
};

const noughtOrCrossSlice = createSlice({
    name: 'nought-or-cross',
    initialState,
    reducers: {
        turnPlayed(state, action: PayloadAction<number>) {
            if (state.value[action.payload] == null) {
                if (state.playerX) {
                    state.value[action.payload] = state.playerX;
                    state.playerX = false;
                    state.playerO = true;
                } else {
                    state.playerO = false;
                    state.value[action.payload] = state.playerO;
                    state.playerX = true;
                }
            } else {
                return;
            }
        },
        resetValue(state) {
            state.value = initialState.value;
            state.playerX = initialState.playerX;
            state.playerO = initialState.playerO;
        },
    }
})

export const { turnPlayed, resetValue } = noughtOrCrossSlice.actions;
export default noughtOrCrossSlice.reducer;