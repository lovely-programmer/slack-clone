import React from "react";
import "./Header.css";
import {useDataLayerValue} from '../StateProvider'
import { Avatar, IconButton } from "@material-ui/core";
import { AccessTime, Search, HelpOutline } from "@material-ui/icons";
import { actionType } from "../reducer";

function Header() {
  const [{user},dispatch] = useDataLayerValue()
  const signOut = () => {
    dispatch({
      type: actionType.LOGOUT_USER,
      user: null
    })
  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={signOut}>
          <Avatar
            className="header__avatar"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </IconButton>
        <AccessTime />
      </div>

      <div className="header__search">
        <Search />
        <input type="text" placeholder="Search lovely Programmer" />
      </div>

      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
