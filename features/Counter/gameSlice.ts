import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
    Player1Points: number
    Player2Points: number
    win: boolean,
    turns: number,
};


const initialState: GameState = {
    Player1Points: 0,
    Player2Points: 0,
    win: false,
    turns: 0,
}


const GameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        checkWin(state, arr: PayloadAction<boolean[] | null[]>) {
            if (state.turns > 4) {

                for (let i = 0; i < 9 && !state.win; i += 3) {
                    state.win = (arr.payload[i] != null && arr.payload[i] == arr.payload[i + 1] && arr.payload[i] == arr.payload[i + 2]);
                    if (state.win) {
                        arr.payload[i] ? state.Player1Points++ : state.Player2Points++;
                    }
                }

                for (let i = 0; i < 3 && !state.win; i++) {
                    state.win = (arr.payload[i] != null && arr.payload[i] == arr.payload[i + 3] && arr.payload[i] == arr.payload[i + 6])
                    if (state.win) {
                        arr.payload[i] ? state.Player1Points++ : state.Player2Points++;
                    }
                }

                for (let i = 0; i < 3 && !state.win; i += 2) {
                    state.win = (arr.payload[i] != null && arr.payload[i] == arr.payload[4] && arr.payload[i] == arr.payload[10 - (2 + i)])
                    if (state.win) {
                        arr.payload[i] ? state.Player1Points++ : state.Player2Points++;
                    }
                }
            }
        },
        addTurn(state) {
            state.turns++;
        },
        resetGame(state) {
            state.win = initialState.win;
        }
    }
});

export const { checkWin, addTurn, resetGame } = GameSlice.actions;
export default GameSlice.reducer;