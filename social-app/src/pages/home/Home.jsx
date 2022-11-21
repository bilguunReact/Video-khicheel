import { useState } from "react";

import { useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import { sendRequest, urlLookup } from "../../settings/Settings";


const [datas, setDatas] = useState();
const bodyChiglel = {
     action: "chiglel",
    };

sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));



return (
      <>
      <p>{datas && JSON.stringify(datas)}</p>
        {/* <text>{datas && JSON.stringify(datas['data'][9])}</text> */}
        <Topbar/>
         <div className="homeContainer">
       <Sidebar/>
       <Feed/>
       <Rightbar/>
      </div>
     
      </>
);
  

