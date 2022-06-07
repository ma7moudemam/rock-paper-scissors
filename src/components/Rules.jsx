import React from 'react'
import Modal from '../UI/Modal';
import RulesPic from './../images/image-rules.svg'
import classes from './Rules.module.css';



const Rules = (props) => {
  return (
    <Modal onClose={props.onClose}>
    <div className={classes.rules}>
        <div className={classes.header}>
        <h1>Rules</h1>
        <i className="far fa-times" onClick={props.onClose}></i>
        </div>
        <img src={RulesPic} alt="Rules" />
    </div>
    </Modal>
  )
}

export default Rules