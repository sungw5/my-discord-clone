import React from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
// Material UI Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Tyler Oh</h3>
        <ExpandMoreIcon />
      </div>

      {/* Channels */}
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      {/* VOICE */}
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />

        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/116238077_10217810896850264_9062144719825589748_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=QBQFMJEvZu0AX9OMg12&_nc_oc=AQmZN0qk3y8L5Upd5M-ALiZHcoXsooKv_JWEp3fX5kz1insPPz8vmgNFxc3zSK9cZpj5zSv_M_sD9leR4CWuLdIP&_nc_ht=scontent-iad3-1.xx&oh=dc48f070f88e3e9817a042487d00a4ac&oe=600E547D" />
        <div className="sidebar__profileInfo">
          <h3>@sungw5</h3>
          <p>#thisismyid</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon className="" />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
