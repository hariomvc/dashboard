import "./Dashboard.css";
import SideMenu from "./sidemenu/SideMenu";
import Header from "./header/Header";
import Stats from "./stats/Stats";
import Requests from "./other/Requests";
import Appointments from "./other/Appointments";
import Loader from './loader/Loader'
import { useState } from "react";

function Dashboard() {
  const [menu, setMenu] = useState("Dashboard");
  return (
    <div>
      <SideMenu menu={menu} setMenu={setMenu}/>
      <div className="dashboard">
        <Header />
        {menu == "Dashboard" ? (
          <div className="">
            <Stats />
            <div className="other">
              <Requests />
              <Appointments />
            </div>
          </div>
        ) : (<Loader/>)}
      </div>
    </div>
  );
}

export default Dashboard;
