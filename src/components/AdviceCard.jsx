import React, {useState, useEffect} from 'react'
import {BsDice5Fill} from 'react-icons/bs'
import axios from 'axios'

export default function AdviceCard(){

    const [advice, setAdvice]=useState('')

    const getAdvice = async() =>{
        const res = await axios.get("https://api.adviceslip.com/advice")
        const advice= await res.data.slip;
        setAdvice(advice)
           }


    useEffect(() =>{
          getAdvice()
    }, [])

    return(
        <div className='card'>
            <p>ADVICE #{advice.id}</p>
            <h2> {advice.advice}</h2>
            <hr className='divider'/>   
        <div className='dice' onClick={getAdvice}>
           <BsDice5Fill />
        </div>
        </div>
    )
}