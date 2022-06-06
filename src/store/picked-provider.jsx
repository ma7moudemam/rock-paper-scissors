import React,{useContext, useReducer} from 'react'

const defaultPickedState = {
    totalScore:0,
}

const pickedReducer =(state , action)=>{

}


const PickedProvider =(props)=>{
    const [pickedState , dispatchPickedAction] = useReducer(pickedReducer,defaultPickedState);


  
}