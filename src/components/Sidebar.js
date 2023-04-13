import React from 'react';
import {Avatar} from "@mui/material";
import './Sidebar.css';
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser)

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )


  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1579546929518-9e396f3cc809%3Fixlib%3Drb-4.0.3%26w%3D1080%26fit%3Dmax%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb&f=1&nofb=1&ipt=30ede42111ac00b8a2924d3ab715b4d4828379eeb1a8fc674fa69fabf67549ae&ipo=images"
          alt=""/>
        <Avatar src={user.photoURL} className='sidebar__avatar'>{user.email[0].toUpperCase()}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you:</p>
          <p className="sidebar__statNumber">
            2,532
          </p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post:</p>
          <p className="sidebar__statNumber">
            2,342
          </p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p> Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('linkedin')}
        {recentItem('ux')}
        {recentItem('ai')}
      </div>
    </div>
  );
};

export default Sidebar;
