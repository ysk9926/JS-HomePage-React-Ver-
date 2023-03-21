import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./router/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
