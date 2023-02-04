import { useEffect } from 'react';
import { SafeAreaView, } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import GameBoard from '../../components/GameBoard';
import Header from '../../components/Header';
import { checkWin, resetGame } from '../../features/Counter/gameSlice';
import { resetValue } from '../../features/NoughtOrCross/noughOrCrossSlice';
import styles from './style';


export default function Main() {

    const noughtOrCross = useAppSelector((state) => state.noughtOrCross.value);
    const win = useAppSelector((state) => state.game.win);
    const dispatch = useAppDispatch();
    const CheckWin = () => { dispatch(checkWin(noughtOrCross)); }
    const resetWin = () => { dispatch(resetGame()); }
    const resetnoughtOrCross = () => { dispatch(resetValue()); }

    useEffect(() => {
        CheckWin();
        if (win) {
            resetWin();
            resetnoughtOrCross();
            return;
        }
    }, [noughtOrCross])

    return (
        <SafeAreaView style={styles.Mainroot}>
            <Header />
            <GameBoard />
        </SafeAreaView>
    );
}

