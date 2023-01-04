import logo from './logo.svg';
import './App.css';
import Routing from './components/configs/Routing';
import { Provider } from 'react-redux';
import store from './components/configs/redux/store';

function App() {
  return (
    <Provider store={store}>

<div>

<Routing/>

</div>

    </Provider>
  );
}

export default App;
