import React, {useState} from 'react';

function EndCheckYou({question,index,handleGetId}) {
  const [right, setRight] = useState(question.answerNumber ==  parseInt(question.userAnswerNumber))

  return (
    <div className='userAnswerQuestion'>
      <h1>בדיקה</h1>
      <div className='questionTitle'>
        <p className='questionP'>{question.question}</p>
        <label className='questionLabel'>:שאלה</label>
      </div>
      {!right ?
        <div>
          <div className='questionTitle'>
            <p className='questionP'>{question.choices[question.answerNumber]}</p>
            <label className='questionLabel'>התשובה הנכונה </label>
          </div>
          <div className='questionTitle'>
            <p className='questionP'>{question.choices[question.userAnswerNumber]}</p>
            <label className='questionLabel'>התשובה שלך</label>
          </div>
        </div> :
        <div className='questionTitle'>
          <p className='questionP'>{question.choices[question.answerNumber]}</p>
          <label className='questionLabel'> התשובה הנכונה שלך </label>
        </div>
      }
      <div className="center">
        <div className='divButton' onClick={()=>handleGetId(index+1)}>שאלה הבאה
        </div>
        <div className='divButton' onClick={()=>handleGetId(index-1)}>
         שאלה קודמת
        </div>
      </div>
      <div className='divButton' onClick={()=>handleGetId(-10)}>למסך הקודם
      </div>
    </div>
  );
}

export default EndCheckYou;