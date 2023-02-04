import { View, Text } from 'react-native';
import { useAppSelector } from '../../app/hooks';
import styles from './styles'

const ScoreCounter = ({ count, PlayerNumber, playerStatus }: { count: number, PlayerNumber: number, playerStatus: boolean }) => {


  return (
    <View style={playerStatus ? styles.ScoreCounterRootActive : styles.ScoreCounterRootNotActive}>
      <Text style={[styles.Text, styles.PlayerText]}>{"Player" + PlayerNumber}</Text>
      <Text style={styles.Text}>{count}</Text>
    </View >
  )
}


export default ScoreCounter;


