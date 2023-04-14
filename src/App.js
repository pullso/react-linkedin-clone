import React, {useEffect} from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './App.css'
import Feed from "./components/Feed";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./components/Login";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Widgets from "./components/Widgets";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          }))
        } else {
          dispatch(logout({}))
        }
      });
    };
  }, [dispatch]);

  return (
    <div className="app">
      <Header/>
      {!user ?
        <Login/> : (
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
        )
      }
    </div>
  );
}

export default App;
