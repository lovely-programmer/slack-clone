import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import db from "../firebase";
import { useDataLayerValue } from "../StateProvider";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useDataLayerValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Lovely Programmer</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channels browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />


      <SidebarOption
        Icon={Add}
        id={channels.id}
        addChannelOption
        title="Add Channel"
      />

      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
