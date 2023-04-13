import React, {useState} from 'react';
import './Login.css'
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch()

  const register = async () => {
    // TODO remove console
    if (!name) {
      return alert('Please enter full name')
    }

    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, email, pass);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: profilePic,
      });

      const user = auth.currentUser;
      dispatch(login({
        email: user.email,
        displayName: name,
        photoURL: profilePic,
        uid: user.uid,
      }));
    } catch (e) {
      alert(e);
    }
  }

  const loginApp = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    try {
      await signInWithEmailAndPassword(auth, email, pass)
      const user = auth.currentUser;
      dispatch(login({
        email: user.email,
        displayName: name,
        photoURL: profilePic,
        uid: user.uid,
      }));
    } catch (e) {
      alert(e)
    }
  }

  return (<div className='login'>
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.vectorico.com%2Fwp-content%2Fuploads%2F2018%2F02%2FLinkedin-full-logo.png%3Fw%3D2447&f=1&nofb=1&ipt=7dd66fd72b3fb403ba8d9ccd9f5375450c26f01a13c21c5d48c5e220db7f4577&ipo=images"
      alt=""/>
    <form>
      <input type="text" placeholder='Full name (required if registering)' value={name}
             onChange={e => setName(e.target.value)} required/>
      <input type="text" value={profilePic} onChange={e => setProfilePic(e.target.value)}
             placeholder='Profile pic Url(optional)'/>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='email'/>
      <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='password' required/>
      <button type='submit' onClick={loginApp}>Sign In</button>
    </form>

    <p>Not a member?
      <span className='login__register' onClick={register}>Register Now</span>
    </p>
  </div>);
};

export default Login;
