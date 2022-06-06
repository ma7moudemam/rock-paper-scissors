import React from 'react'
import Circle from '../UI/Circle'
import classes from './Game.module.css';



const Game = (props) => {


  return (
   <div className={classes.game}>   
        <div className={classes.first}>
        <Circle onPlay={props.onPlay} getPicked={props.getPicked} name="Paper"/>
        <Circle onPlay={props.onPlay} getPicked={props.getPicked} name="Cisser"/> 
        </div>
        <div className={classes.second}>
        <Circle onPlay={props.onPlay} getPicked={props.getPicked} name="Rock"/>  
        </div>
        
    </div>
  )
}   

export default Game