import React from 'react';
import './Header.css'
import HeaderOption from "./HeaderOption";
import {BusinessCenter, Chat, Home, Notifications, Search as SearchIcon, SupervisorAccount} from "@mui/icons-material";

const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
        <svg className='header__logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0a66c2"
             focusable="false">
          <path
            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
        <div className="header__search">
          <SearchIcon/>
          <input type="text"/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title='Home' Icon={Home}/>
        <HeaderOption title='My Network' Icon={SupervisorAccount}/>
        <HeaderOption title='Jobs' Icon={BusinessCenter}/>
        <HeaderOption title='Messaging' Icon={Chat}/>
        <HeaderOption title='Notifications' Icon={Notifications}/>
        <HeaderOption avatar='https://media.licdn.com/dms/image/C4E03AQFVBiLCcAvgfA/profile-displayphoto-shrink_100_100/0/1640286323197?e=1686787200&v=beta&t=n8wsa5eeGFlqhFxaLa9k7ZZiTmfEu2f9eIv6C_NUYiY' title='me'/>
      </div>
    </div>
  );
};

export default Header;
