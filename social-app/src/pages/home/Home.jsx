import { useState } from "react";
import { useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"


export default function Home() {
  const [datas, setDatas] = useState();
  const urlLookup = "http://btax.mandakh.org:8000/lookup/";
  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };
    sendRequest(urlLookup, bodyChiglel);
  }, []);

  const a = ["data", "action"];
a["action"] = "10"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);

  const sendRequest = async (url, body) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(async (response) => {
        setDatas(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
    <text>
    {JSON.stringify(datas)}</text>
    
    {/* <text>{JSON.stringify(datas [1:10])};</text> */}
    {/* <text>{JSON.stringify([datas (10)])};</text> */}
     <Topbar/>
     <div className="homeContainer">
     <Sidebar/>
     <Feed/>
     <Rightbar/>
     </div>
     
    </>
  )
}
