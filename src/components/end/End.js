import React from 'react';
import {useEffect, useState, useRef} from "react";
import {useNavigate} from 'react-router-dom';
import {FaHome} from "react-icons/fa";
import './end.css'
import EndCheckYou from "./EndCheckYou";

function End({data, sec, numberOfQuestion}) {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const questionId = useRef(null);
  const navigate = useNavigate();
  const navigatePages = (pageName) => {
    navigate(pageName)
  }
  const [findCurectAnswer, setFindCurectAnswer] = useState(data.userDataAnswer.filter(({
                                                                                         answerNumber,
                                                                                         userAnswerNumber
                                                                                       }) => answerNumber == parseInt(userAnswerNumber)).length)
  const classNameForCurrentQuestion = (index) => {
    if (index == currentQuestion) {
      return 'userAnswerDivShow'
    } else {
      return 'userAnswerDivNone'
    }
  }
  useEffect((() => {
  }), [currentQuestion])

  function handleGetId(nextOrPre) {
    if(nextOrPre==-10){
      setCurrentQuestion(-1)
    }
    else
    {
      if (nextOrPre <= -1) {
        nextOrPre = data.userDataAnswer.length - 1
      } else {
        if (nextOrPre >= data.userDataAnswer.length - 1) {
          nextOrPre = 0
        }
      }
    }

    setCurrentQuestion(nextOrPre)
  }


  return (
    <div className="centerEndDiv">
      {console.log(data)}
      <div className="homeButton" onClick={() => navigatePages('/')}><FaHome size={40}/></div>
      <div className="centerDiv">
        <h1>סיום</h1>
        <div className="center">
          <div>{data.userInfo.userName}</div>
          <div>שלום</div>
        </div>
        <div className="center">

          <div>{parseInt(data.timer /60)}:{parseInt(data.timer %60)}</div>
          <div>:סיימת בזמן</div>
        </div>
        <div className="center">
          <div>{numberOfQuestion}</div>
          <div>מתוך:</div>
          <div>{findCurectAnswer}</div>
          <div>ענית נכון על:</div>
        </div>
        <div className="center">
          <div>{findCurectAnswer * (100 / numberOfQuestion)}</div>
          <div>ציונך</div>

        </div>
        <div className="center">
          <div className='divButton' onClick={() => handleGetId(0)}>בדוק את עצמך
          </div>
          <div className='divButton' onClick={() => navigatePages('/questionPage')}>
            נסה שוב
          </div>
        </div>
        {data.userDataAnswer.map((question, index) =>
          (<div key={index} className={classNameForCurrentQuestion(index)}>
            <EndCheckYou  question={question} handleGetId={handleGetId} index={index}/>
          </div>))}
      </div>

    </div>
  );
}

export default End;