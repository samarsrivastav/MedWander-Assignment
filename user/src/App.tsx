import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { SignUp } from './component/Signup';
import { SignIn } from './component/Signin';

const App = () => {
  const [auth,setAuth]=useState(Boolean)
  useEffect(()=>{
    setAuth(localStorage.getItem('token') !== null)
  },[])
  console.log(auth)
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={auth ? <Home /> : <SignIn />} />
        <Route path="/signup" element={auth ? <Home /> : <SignUp />} />
        <Route path="/" element={auth ? (
          <Home/>
        ) : (
          <SignIn />
        )} />

      </Routes>
    </Router>
  );
};

export default App;
