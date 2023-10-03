import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiderBar from "./components/sideNavbar";
import AppStyle from "./app.module.css";
import Dashboard from "./pages/Dashboard";
import RightBar from "./pages/Rightbar";
import SignIn from "./pages/Login/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route
          exact
          path="/dashboard"
          element={
            <div className={AppStyle.container}>
              <SiderBar />
              <div className={AppStyle["col-span-2"]}>
                <Dashboard />
              </div>
              <RightBar />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
