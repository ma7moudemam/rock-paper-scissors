import React, { Fragment, useContext } from 'react'
import { useState } from 'react'
import classes from './Home.module.css'
import Score from './Score'
import Game from './Game'
import Rules from './Rules'
import Result from './Result'
import PickedContext from '../store/picked-context'


const Home = () => {

    const [showRules , setShowRules] = useState(false);
    const [selected , setSelected] = useState(false);
    const [picked ,setPicked] = useState('');
    const [housePick, setHousePick] = useState('default')
    const [results, setResults] = useState('');
    const [score, setScore] = useState(0)




    const showRulesHandler = () => {
        setShowRules(!showRules);
    }

    const hideRulesHandler =()=>{
        setShowRules(false);
    }

    const playGameHandler = () => {
        setSelected(!selected);
        setResults('');
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
      const elements = [
        'Paper',
        'Cisser',
        'Rock',
      ]

    function launchHousePick() {
        return new Promise((resolve, reject) => {
          let pick
          const interval = setInterval(() => {
            pick = elements[getRandomInt(0, 3)]
            setHousePick(pick)
          }, 75)
          setTimeout(() => {
            clearInterval(interval)
            resolve(pick)
          }, 2000)
        })
      }



    const  pickHandler = async (name) => {
        setPicked(name);
        const house = await launchHousePick();
        const results = playWithIA(name, house);
        setResults(results)
        if (results === 'win') {
            setScore(score + 1)
        }
        if (results === 'lose') {
            setScore(score - 1)
        }
    }


    function playWithIA(pick, housePick) {
        if (housePick === pick) {
          return 'draw'
        }
        if (pick === 'Paper') {
          if (housePick === 'Cisser') {
            return 'lose'
          }
          if (housePick === 'Rock') {
            return 'win'
          }
        }
        if (pick === 'Cisser') {
          if (housePick === 'Paper') {
            return 'win'
          }
          if (housePick === 'Rock') {
            return 'lose'
          }
        }
        if (pick === 'Rock') {
          if (housePick === 'Paper') {
            return 'lose'
          }
          if (housePick === 'Cisser') {
            return 'win'
          }
        }
      }


  return (
    <Fragment>
        <div className={classes.home}>
            <Score score={score}/>
            {
                selected ? <Result onPlay={playGameHandler} selectPicked={picked} sethousePick={housePick} result={results}/> : <Game getPicked={pickHandler} onPlay={playGameHandler}/>
            }
            {
                showRules ? <Rules onClose={hideRulesHandler}/> : null
            }
            <button className={classes.rulesbutton} onClick={showRulesHandler} >Rules</button>
        </div>
    </Fragment>
  )
}

export default Home