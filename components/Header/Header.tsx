import { View, Text } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import ScoreCounter from '../ScoreCounter';
import styles from './styles';

const Header = () => {
    const Player1Count = useAppSelector((state) => state.game.Player1Points);
    const Player2Count = useAppSelector((state) => state.game.Player2Points);
    const player1Status = useAppSelector((state) => state.noughtOrCross.playerX);
    const player2Status = useAppSelector((state) => state.noughtOrCross.playerO);

    return (
        <View style={styles.HeaderRoot}>
            <ScoreCounter count={Player1Count} PlayerNumber={1} playerStatus={player1Status} />
            <ScoreCounter count={Player2Count} PlayerNumber={2} playerStatus={player2Status} />
        </View>
    );
}

export default Header;