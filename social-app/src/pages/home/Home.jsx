import { useState } from "react";

import { useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
// import { sendRequest, urlLookup } from "../../settings/Settings";




export default function Home() {
return (
      <>
      <Topbar/>
        <div className="homeContainer">
       <Sidebar/>
       <Feed/>
       <Rightbar/>
      </div>
     </>
);
}

