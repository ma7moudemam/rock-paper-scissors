import React from 'react'
import Rock from './../images/icon-rock.svg'
import Paper from './../images/icon-paper.svg'
import Cisser from './../images/icon-scissors.svg'

import classes from './Circle.module.css'
const Circle = (props) => {

  const colors={
    "Paper": " radial-gradient(circle,hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
    "Cisser": " radial-gradient(circle,hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
    "Rock": " radial-gradient(circle,hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
  }
  const color= colors[props.name];

  const Images ={
    "Paper": Paper,
    "Cisser": Cisser,
    "Rock": Rock,
  }
  const image = Images[props.name]

  const onClickHandler = () => {
    props.onPlay();
    props.getPicked(props.name);
  }

  return (
    <div className={classes.outerCircle} style={{background:`${color}`}} onClick={onClickHandler} >
        <div className={classes.innerCircle}>
          <img  src={image} alt="Paper"/>
        </div>
    </div>
  )
}

export default Circle