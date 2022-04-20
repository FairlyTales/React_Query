import "./App.css";
import {Characters} from "./Characters";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty characters</h1>
				<Characters />
      </div>
    </div>
  );
}

export default App;
