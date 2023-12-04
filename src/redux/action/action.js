export const GetDataQuestion = (data) => {
  return(dispatch)=>{
    dispatch({
      type:'getDataQuestion',
      payload:{data}
    })
  }
}
export const addUserDataAnswer = (question) => {
  return(dispatch)=>{
    dispatch({
      type:'addUserDataAnswer',
      payload:{question}
    })
  }
}
export const logIn = (data) => {
  console.log("data",data)
  return(dispatch)=>{
    dispatch({
      type:'logIn',
      payload: {data}
    })
  }
}
export const logOut = ({data}) => {
  return(dispatch)=>{
    dispatch({
      type:'logOut',
      payload:{data}
    })
  }
}
export const getTime = (data) => {
  return(dispatch)=>{
    dispatch({
      type:'getTime',
      payload:{data}
    })
  }
}
// export const add = ({input}) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'add',
//       payload: {input}
//     })
//   }
// }