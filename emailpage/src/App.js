import MainComponent from "./Components/MainComponent";
import "./App.css"
import { Provider } from "react-redux";
import appStore from "./Components/utils.js/appStore";
function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <MainComponent/>
       
    </div>
    </Provider>
  );
}

export default App;
