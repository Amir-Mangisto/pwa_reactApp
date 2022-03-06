import React from 'react';
import './App.css';
import  './firebase';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks-auth';

const firebaseAuth = firebase.auth();

function App() {
  const [user] = useAuthState(firebaseAuth);
  const [auth,setAuth] = React.useState(null);
  React.useEffect(()=>{
    setAuth(firebaseAuth);
  },[])
  const singInWithGoogle = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.singInWithGoogle(provider);
  }
  return (
    <div className="App">
      <button onClick={singInWithGoogle}></button>
      <Register/>
      <Login/>
    </div>
  );
}

export default App;
