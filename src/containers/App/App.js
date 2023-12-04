import React from 'react';
import axios from 'axios';
import {Route, Routes} from "react-router-dom";
import Home from "../../components/home/Home";
import LogIn from "../../components/logIn/LogIn";
import SignIn from "../../components/signIn/SignIn";
import Info from "../../components/info/Info";
import QuestionPage from "../../components/questionPage/QuestionPage";
import End from "../../components/end/End";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from '../../redux/index'
import {getTime} from "../../redux/action/action";


function App() {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const {GetDataQuestion, addUserDataAnswer, logIn, logOut, getTime} = bindActionCreators(actionCreators, dispatch);
  const numberOfQuestion = 10;
  const sec =numberOfQuestion*4.5*60 ;

  const handelLogIn = (user) => {
    const data = {
      ...state,
      userInfo: user
    }
    logIn(data)
  }
  const handelGetDataQuestion = (getDataQuestion) => {
    const data = {
      ...state,
      dataQuestion: getDataQuestion
    }
    GetDataQuestion(data)
  }
  const handelTimer = (time) => {
    const data = {
      ...state,
      timer:sec- time
    }
    getTime(data)
  }
  const handelAddAnswer = (question) => {
    addUserDataAnswer(question)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home data={state} />}/>
        <Route path="/logIn" element={<LogIn handelLogIn={handelLogIn}/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/info"
               element={<Info
                 handelGetDataQuestion={handelGetDataQuestion}
                 userInfo={state.userInfo}
                 numberOfQuestion={numberOfQuestion}
               />}/>
        <Route path="/questionPage"
               element={<QuestionPage
                 dataQuestion={state.dataQuestion}
                 handelTimer={handelTimer}
                 handelAddAnswer={handelAddAnswer}
                 numberOfQuestion={numberOfQuestion}
                 sec={sec}
                 handelTimer={handelTimer}
               />}/>
        <Route path="/end" element={<End data={state}
                                         numberOfQuestion={numberOfQuestion}
                                         sec={sec}
        />}/>
      </Routes>

    </div>
  );
}

export default App;
