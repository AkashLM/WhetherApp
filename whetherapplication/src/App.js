import ScreenContainer from "./CustomComponent/ScreenContainer/ScreenContainer.jsx";
import axios from "axios";
import "./App.css";
axios.defaults.headers.get["Access-Control-Allow_Origin"] = "*";

function App() {
  return (
    <div className="App">
      <ScreenContainer />
    </div>
  );
}

export default App;
