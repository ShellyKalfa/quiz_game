import React from 'react';
import './signIn.css'
import {FaHome} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function SignIn(props) {
  const navigate = useNavigate();
  const navigatePages = (pageName) => {
    navigate(pageName)
  }
  return (
    <div className="centerSignInDiv">
      <div className="homeButton" onClick={() => navigatePages('/')}><FaHome size={40}/></div>
      <div className="centerDiv">
        <h1>הרשמה</h1>
        <div>
          <input type="text"/>
          <label> שם משתמש </label>
        </div>
        <div>
          <input type="text"/>
          <label> טלפון</label>

        </div>
        <div>
          <input type="text"/>
          <label> אמייל </label>
        </div>
        <div>
          <input type="text"/>
          <label>סיסמא</label>
        </div>
        <div className="divButton">הירשם</div>
        <div className="logInDiv" onClick={ ()=>navigatePages('/logIn')}> אני כבר  רשום! איפה נכנסים?</div>
      </div>
    </div>
  );
}

export default SignIn;