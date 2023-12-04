import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {FaHome} from "react-icons/fa";
import './logIn.css'

function LogIn({handelLogIn}) {
  const navigate = useNavigate();
  const [getUers, setGetUers] = useState([])
  const [user, setUser] = useState({
    userName: "",
    password: ""
  })
  const updateUser = (name, value) => {
    const updatedUser = {
      ...user,
      [name]: value
    };
    setUser(updatedUser);
  }
  const onChange = (e) => {
    const {name, value} = e.target;
    updateUser(name, value)
  }
  const handelClick = () => {
    const indexUser = getUers.findIndex((data) => data.userName === user.userName);
    if (indexUser > -1) {
      if (getUers[indexUser].password === user.password) {
        alert("Welcome " + user.userName)
        handelLogIn(user)
        navigate('/info')
      } else {
        alert("Wrong password")
      }
    } else {
      alert("Wrong username")
    }
  }
  const navigatePages = (pageName) => {
    navigate(pageName)
  }
  useEffect(() => {

    axios.get(`https://shellykalfa.github.io/host_api_quiz_game/user.json`)
      .then(res => {
        setGetUers(res.data)
      })
      .catch(err => {
        console.log("err", err)
      });
  }, []);

  return (
    <div className="centerLogInDiv">
      <div className="homeButton" onClick={()=>navigatePages('/')}><FaHome size={40}/></div>
      <div className='centerDiv'>
        <h1> כניסה </h1>
        <table>
          <tr>
            <th><input type="text" name="userName" onChange={onChange} placeholder="what is your user name..."/></th>
            <th><label> שם משתמש </label></th>
          </tr>
          <tr>
            <th><input type="text" name="password" onChange={onChange} placeholder="what is your password..."/></th>
            <th><label>סיסמא</label></th>
          </tr>
        </table>
        <div className="divButton" onClick={handelClick}> כניסה</div>

        <div className="signInDiv" onClick={ ()=>navigatePages('/signIn')}> אני לא רשום? הירשם עכשיו</div>
      </div>
    </div>
  );
}

export default LogIn;