import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
