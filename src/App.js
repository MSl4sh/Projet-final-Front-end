import './App.css';
import {useRoutes} from "react-router-dom"
import {routes} from "./Routes"
import { Provider } from 'react-redux';
import store from "../src/store/store"


function App() {

  

  const element = useRoutes(routes)
  return (
    <Provider store={store}>
    <div className="App">
      {element}
    </div>
    </Provider>
  );
};

export default App;
