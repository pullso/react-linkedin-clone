import React, {useEffect, useState} from 'react';
import './Feed.css'
import {CalendarViewDay, Create, EventNote, Image, Subscriptions} from "@mui/icons-material";
import InputOption from "./InputOption";
import Post from "./Post";
import {db} from "../firebase";
import {addDoc, collection, onSnapshot, orderBy, query, serverTimestamp} from "firebase/firestore";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])
  const user = useSelector(selectUser)

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => ({
        id: doc.id, data: doc.data(),
      })));
    });

    return () => unsubscribe();
  }, [])

  const sendPost = async (e) => {
    e.preventDefault()

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoURL: user.photoURL || '',
        timestamp: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (<div className='feed'>
    <div className="feed__inputContainer">
      <div className="feed__input">
        <Create/>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
          <button type='submit' onClick={sendPost}>Send</button>
        </form>
      </div>
      <div className="feed__inputOptions">
        <InputOption Icon={Image} title='Photo' color='#70b5f9'/>
        <InputOption Icon={Subscriptions} title='Video' color='lightred'/>
        <InputOption Icon={EventNote} title='Event' color='lightpink'/>
        <InputOption Icon={CalendarViewDay} title='Write Article' color='lightblue'/>
      </div>
    </div>
    <FlipMove>
      {posts.map(({id, data: {name, description, message, photoURL}}) => (
        <Post key={id} name={name} description={description} message={message} photoURL={photoURL}/>))}
    </FlipMove>
  </div>);
};

export default Feed;
