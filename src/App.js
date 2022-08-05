import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NewsentencePage from "./pages/NewsentencePage";
import Write from "./pages/write";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/write" element={<Write/>}></Route>
      <Route path="/NewsentencePage" element={<NewsentencePage />}></Route>
    </Routes>
  );
}

export default App;
