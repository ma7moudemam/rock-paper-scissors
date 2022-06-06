import React, { useContext } from 'react'
import PickedContext from '../store/picked-context';
import classes from './Score.module.css'


const Score = (props) => {

    
  return (
    <div className={classes.score}>
        <div className={classes.content}>
            <h2>Rock</h2>
            <h2>Paper</h2>
            <h2>Scissors</h2>
        </div>
        <div className={classes.scoreNum}>
            <p>Score</p>
            <h1>{props.score}</h1>
        </div>
    </div>
  )
}

export default Score