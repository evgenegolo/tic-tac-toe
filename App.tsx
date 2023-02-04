import { View } from 'react-native';
import Main from './screens/Main'
import { Provider } from 'react-redux';
import { store } from './app/store'



export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}