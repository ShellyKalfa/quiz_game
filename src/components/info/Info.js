import React from 'react';
import {useNavigate} from 'react-router-dom';
import './info.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {FaHome} from "react-icons/fa";


function Info({handelGetDataQuestion,userInfo,numberOfQuestion}) {
  const navigate = useNavigate();
  const [getTheNextQuestion, setGetTheNextQuestion] = useState(false);
  const [getData, setGetData] = useState([]);
  const navigatePages = (pageName) => {
    navigate(pageName)
  }
  useEffect(() => {
    if(userInfo.userName!=undefined)
    { axios.get(`https://shellykalfa.github.io/host_api_quiz_game/questionsQuiz.json`)
      .then(res => {
         setGetData(res.data)
         setGetTheNextQuestion(true)
      })
      .catch(err => {
        console.log("err", err)
      });}
  }, []);


  useEffect(() => {
    if (getTheNextQuestion) {
      handelGetDataQuestion(getData)
    }
  }, [getTheNextQuestion]);
  return (
    <div className="centerDivInfo">
      <div className="homeButton" onClick={()=>navigatePages('/')}><FaHome size={40}/></div>
      <h1>ברוכים הבאים למבחן</h1>
      <p>
        במבחן הרשמי עומדות לרשות הנבחן שעתיים לפתרון 25 שאלות ( כ4.5 דקות לשאלה)
      </p>
      <p>
        בבחינה {numberOfQuestion} שאלות עומדות לרשותך {numberOfQuestion *4.5} דקות
      </p>
      <h4>
        בהצלחה
      </h4>
      {getTheNextQuestion?<div className='divButton' onClick={() => navigatePages('/questionPage')}> אני מוכן</div>:"loading"}
    </div>
  );
}

export default Info;