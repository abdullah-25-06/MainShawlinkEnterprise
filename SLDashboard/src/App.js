import Home from "./pages/home/Home";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { teacherInputs, userInputs , courseInputs , umInputs} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ListT from "./pages/listT/listT";
import List from "./pages/list/List";
import Profile from "./pages/profile/Profile";
import Poppin from "./components/Clockinform/Poppin";
import Loginpg from "./pages/Loginpage/Loginpg";


function App() {
  const {darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login">
                <Route index element={<Loginpg/>}/>
              </Route>

            <Route path="clockin">
              <Route index element={<List />} />

              <Route
                path="clockin"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="clockout">
              <Route index element={<ListT />} />

              <Route
                path="clockout"
                element={<New inputs={teacherInputs} title="Add New Teacher" />}
              />
            </Route>


           
            </Route>
              <Route path="register">
                <Route index element={<Profile/>} />

              </Route>
              <Route path="poppin">
                <Route index element={<Poppin/>}/>
              </Route>
            
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
