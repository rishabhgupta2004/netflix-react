
import './App.css';
import Body from './components/body';
import { Provider } from 'react-redux';
import appStore from './utils/appstore.js';

function App() {
  return (
    <Provider store={appStore}> <Body/></Provider>
  );
}

export default App;
