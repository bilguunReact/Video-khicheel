import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import {hariu} from "../../getdata/dummy";

// function homepageClick(whichPage, en) {
//   alert("H" + en);
// }

// export default function Topbar({ilgeeh}) {
//   const [numberState, setNumber] = useState(0);
//   let number = 0;

//   function clickButton(0) {
//     setNumber(numberState + 1);
//     console.log("Button click" + numberState);
//     e.preventDefault();
//   }
// }

export default function Topbar ({ilgeeh}) {
  return (
    <>
    {JSON.stringify(hariu)}
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">{JSON.stringify(ilgeeh.data.username)}</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
         <Search className="searchIcon" />
         <input 
               placeholder='Search for frieand, post or video'
               className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>  
        <div className="topbarIcons">
          <div className="topbarIconItem">
           <Person />
           <span className="topbarIconBadge">{JSON.stringify(ilgeeh.data.chats)}</span>
          </div>
          <div className="topbarIconItem">
           <Chat />
           <span className="topbarIconBadge">{JSON.stringify(ilgeeh.data.friendRequest)}</span>
          </div>
          <div className="topbarIconItem">
           <Notifications />
           <span className="topbarIconBadge">{JSON.stringify(ilgeeh.data.notif)}</span>
          </div>
        </div>
        <img src={(ilgeeh.data.profilephoto)} alt="" className="topbarImg" />
      </div> 
    </div>
    </>
  )
}
