import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from "./test1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test1" element={<Test1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
