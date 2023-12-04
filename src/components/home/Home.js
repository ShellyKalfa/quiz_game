import React from 'react';
import {FaUserPen} from "react-icons/fa6";
import {BiSolidUserDetail} from "react-icons/bi";
import {FaHome} from "react-icons/fa";
import './home.css'
import {useNavigate} from 'react-router-dom';

function Home({data}) {
  const navigate = useNavigate();
  const onClickNavigate = (pageName) => {
    navigate(pageName)
  }
  return (
    <div className="centerDivHome">
      <div className="textDiv">
        <FaHome size={50}/>
        <h1> הכנה למבחן מתווכים במקרקעין</h1>
      </div>
      {data.userInfo.userName==undefined ?
        <>
          <div className="divButton" onClick={() => onClickNavigate("/signIn")}>
            <FaUserPen/>
            <label> הירשם </label>
          </div>
          <div className="divButton" onClick={() => onClickNavigate("/logIn")}>
            <BiSolidUserDetail/>
            <label> כניסה לחברים </label>
          </div>
        </> : <>
          <div>

            <label>{data.userInfo.userName}</label>
            <label>שלום</label>
          </div>
          <div className="divButton" onClick={() => onClickNavigate("/info")}>
            <BiSolidUserDetail/>
            <label>קדימה לחצי כאן למבחן </label>
          </div>
        </>}
    </div>
  );
}

export default Home;