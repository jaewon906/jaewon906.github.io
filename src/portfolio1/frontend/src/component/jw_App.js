import ApplySubscribeJW from "../pages/jw_applySubscribe";
import Main from "../pages/jw_main";
import { Routes, Route, Outlet } from "react-router-dom";
import Asdfsadf from "./asdfasdf";

function App_jw() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Outlet />}>
          <Route path="main/" element={<ApplySubscribeJW />} />
          <Route path="main/" element={<Outlet />}>
            <Route path="category=/:contentsId" Component={Asdfsadf}></Route>
            <Route path="myInfo" Component={Asdfsadf}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
export default App_jw;
