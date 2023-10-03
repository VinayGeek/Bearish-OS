import SiderBar from "./components/sideNavbar";
import AppStyle from "./app.module.css";
import Dashboard from "./pages/Dashboard";
import RightBar from "./pages/Rightbar";

function App() {
  return (
    <div className={AppStyle.container}>
      <SiderBar />
      <div className={AppStyle["col-span-2"]}>
        <Dashboard />
      </div>
      <RightBar />
    </div>
  );
}

export default App;
