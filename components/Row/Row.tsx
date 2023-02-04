import { View } from 'react-native';
import styles from './styles'
import Squere from '../Squere';


const Row = ({  netPlaces }: {  netPlaces: number[] }) => {
    return (
        <View style={styles.row} >
            <Squere netPlaces={netPlaces[0]} />
            <Squere netPlaces={netPlaces[1]} />
            <Squere netPlaces={netPlaces[2]} />
        </View >
    )
}

export default Row;