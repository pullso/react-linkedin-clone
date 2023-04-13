import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './App.css'
import Feed from "./components/Feed";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header/>
      {!user ?
        <Login/> : (
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            {/*<Widgets />*/}
          </div>
        )
      }
    </div>
  );
}

export default App;
