import React from 'react'

function Joke(props){
    return (
    <div class="joke">
        <h3 style={{"display": !props.question && "none"}}>Question: {props.question} </h3>
        <h3 style={{"color": !props.punchLine && "#888888"}}>punchLine: {props.punchLine}</h3>
    </div>
    )
}
export default Joke