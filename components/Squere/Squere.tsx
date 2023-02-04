import { View, Text, Pressable, StyleProp, ViewStyle } from 'react-native';
import styles from './styles'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { turnPlayed } from '../../features/NoughtOrCross/noughOrCrossSlice';
import { addTurn } from '../../features/Counter/gameSlice';



const Squere = ({ netPlaces }: { netPlaces: number }) => {

    const noughtOrCross = useAppSelector((state) => state.noughtOrCross.value);
    const a = useAppSelector((state) => state.game.turns);
    const dispatch = useAppDispatch();
    const turn = () => {
        dispatch(turnPlayed(netPlaces));
    }
    const add = () => { dispatch(addTurn()) }


    const touch = () => {
        turn();
        add();
    }

    const stylePIcker = (netPlaces: number): StyleProp<ViewStyle> => {
        switch (netPlaces) {
            case 0:
                return [styles.squere, styles.borderBottom, styles.borderRight];
            case 1:
                return [styles.squere, styles.borderBottom, styles.borderRight, styles.borderLeft];
            case 2:
                return [styles.squere, styles.borderBottom, styles.borderLeft];
            case 3:
                return [styles.squere, styles.borderBottom, styles.borderTop, styles.borderRight];
            case 5:
                return [styles.squere, styles.borderBottom, styles.borderTop, styles.borderLeft];
            case 6:
                return [styles.squere, styles.borderTop, styles.borderRight];
            case 7:
                return [styles.squere, styles.borderTop, styles.borderRight, styles.borderLeft];
            case 8:
                return [styles.squere, styles.borderTop, styles.borderLeft];
            default:
                return [styles.squere, styles.borderBottom, styles.borderTop, styles.borderRight, styles.borderLeft];
        }
    }

    return (
        <View >
            <Pressable onPress={touch} style={stylePIcker(netPlaces)}>
                <Text style={noughtOrCross[netPlaces] ? styles.textX : styles.textO}>{noughtOrCross[netPlaces] != null ? (noughtOrCross[netPlaces] ? 'X' : 'O') : ' '}</Text>
            </Pressable>
        </View >
    )
}


export default Squere;


