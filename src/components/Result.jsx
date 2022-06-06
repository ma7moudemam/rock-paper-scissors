import React, { useState } from 'react'
import classes from './Result.module.css'
import Circle from './../UI/Circle'
import FinalResult from './FinalResult';
const Result = (props) => {

  


  return (
    <div className={classes.result}> 
          <div className={classes.group}>
            <h1>you picked</h1>
          <Circle name={props.selectPicked}/>
          </div>
          {
            props.result &&  <FinalResult onPlay={props.onPlay} result={props.result}/>
          }
          <div className={classes.group}>
            <h1>the house picked</h1>
          <Circle name={props.sethousePick}/>
          </div>
    </div>
  )
}

export default Result