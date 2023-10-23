import MainComponent from "./Components/MainComponent";
import "./App.css"
import { Provider } from "react-redux";
import store
 from "./Components/utils.js/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <MainComponent/>
      </Provider>
      
    </div>
  );
}

export default App;
