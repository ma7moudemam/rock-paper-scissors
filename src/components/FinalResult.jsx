import React from 'react'
import classes from './FinalResult.module.css'
const FinalResult = (props) => {
  return (
    <div className={classes.finalResult}>
        <h1>You {props.result}</h1>
        <button onClick={props.onPlay}>Play Again</button>
    </div>
  )
}

export default FinalResult