const data = {
  timer: 0,
  dataQuestion: [],
  userDataAnswer: [ ],
  userInfo: {}
}

export default function reducer(state = data, action) {
  console.log("state",state)
  console.log("action",action)
  switch (action.type) {
    case 'getDataQuestion': {
      return {...state, dataQuestion: action.payload.data.dataQuestion}
    }
    case 'addUserDataAnswer': {
      const tempState = {...state};
      const index = tempState.userDataAnswer.findIndex(({id}) => id === action.payload.question.id);
      if (index == -1) {
        return {...tempState,userDataAnswer:[ ...tempState.userDataAnswer, action.payload.question]}
      }
      tempState.userDataAnswer[index]={ ...tempState.userDataAnswer[index], ...action.payload.question};
      console.log("tempState",tempState)
        return tempState;
    }
    case 'logIn': {
      return {...state, userInfo: action.payload.data.userInfo}
    }
    case 'logOut': {
      return {...state, userInfo:{}}
    }
    case 'getTime': {
      return {...state, timer: action.payload.data.timer}


    }
    default:
      return state;
  }

}
