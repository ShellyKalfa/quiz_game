import React from 'react';
import './loadingbar.css'

function LoadingBar({currentCountQuestion, lengthCountQuestion}) {
  const widthLoadingBar = (currentCountQuestion + 1) / lengthCountQuestion * 15;

  return (
    <div className="loadingbarBorder">
      <div>שאלה: {currentCountQuestion + 1} מתוך: {lengthCountQuestion} </div>
      <div className='loadingbarBorderInside' style={{width: lengthCountQuestion*1.5 + "vw"}}>
        <div className="loadingbarInside" style={{width: widthLoadingBar + "vw"}}></div>
      </div>
      {/*<div>{lengthCountQuestion} </div>*/}
    </div>
  );
}

export default LoadingBar;