import { useState } from "react";

import { useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
// import { sendRequest, urlLookup } from "../../settings/Settings";
import {hariu} from "../../getdata/dummy";




export default function Home() {
return (
      <>
      <Topbar ilgeeh = {hariu}/>
        <div className="homeContainer">
       <Sidebar/>
       <Feed/>
       <Rightbar/>
      </div>
     </>
);
}

