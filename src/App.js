import { BrowserRouter } from "react-router-dom";
import './App.css';
import AsideBar from "./AsideBar";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AsideBar /> */}
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
