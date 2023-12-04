import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import './questionPage.css'
import {useNavigate} from "react-router-dom";
import Timer from "../Timer";
import LoadingBar from "../loadinBar/LoadingBar";
import timer from "../Timer";
import {useRef} from "react";


function QuestionPage({dataQuestion, handelAddAnswer,numberOfQuestion,sec,handelTimer}) {
  const navigate = useNavigate();
  const [getTime, setGetTime] = useState(0);
  const [f, setF] = useState(false);
  const [userData, setUserData] = useState([]);
  const [question, setQuestion] = useState({
    id: "",
    question: "",
    choices: [],
    answerNumber: 0,
    userAnswerNumber: 0
  });
  const goToTheEnd = () => {
    navigate('/end')
  }
  const navigatePages = (pageName) => {
    setF(true)
    navigate(pageName)
  }
  const chooseQuestion = () => {
    if (userData.length == numberOfQuestion - 1) {
      goToTheEnd()
    }
    const indexChooseQuestion = Math.floor(Math.random() * dataQuestion.length);
    const index = userData.findIndex(({id}) => id == indexChooseQuestion)
    if (index == -1 && question.id != indexChooseQuestion) {
      setQuestion(dataQuestion[indexChooseQuestion])
    } else {
      if (userData.length >= numberOfQuestion - 1) {
        goToTheEnd()
      } else {
        chooseQuestion()
      }
    }
  }
  const handelClick = (e) => {
    const index = e.target.id;
    setUserData([...userData, {...question, userAnswerNumber: index}])
    handelAddAnswer({...question, userAnswerNumber: index})
    chooseQuestion()
  }
  const handeTime = (time) => {
    handelTimer(time)
  }

  useEffect(() => {
    console.log("use eff")
    chooseQuestion()
  }, [])

  return (
    <div className="centerQuestionDiv">
      {/*{console.log("getTime",getTime)}*/}
      {dataQuestion.length != 0 ?
        <div className="questionDiv">
          <div className='timerAndLoadingBar'>
            <Timer sec={sec}  handeTime={handeTime} f={f} />
            <LoadingBar currentCountQuestion={userData.length} lengthCountQuestion={numberOfQuestion}/>
          </div>
          <div>
            <div className='questionTitle'>
              <p className='questionP'>{question.question}</p>
              <label className='questionLabel'>:שאלה</label>

            </div>
            <ul>
              {
                question.choices.map((choice, index) => (
                  <li id={index} key={index} onClick={(e) => handelClick(e)}> {choice}</li>
                ))
              }
            </ul>

          </div>
        </div>
        :  navigatePages('/info')}
    </div>
  );
}

export default QuestionPage;
//