import { View, Text } from 'react-native';
import Row from '../../components/Row';
import styles from './styles';

const GameBoard = () => {
    return (
        <View style={styles.GameBoardroot}>
            <Row netPlaces={[0, 1, 2]} />
            <Row netPlaces={[3, 4, 5]} />
            <Row netPlaces={[6, 7, 8]} />
        </View>
    );
}

export default GameBoard;