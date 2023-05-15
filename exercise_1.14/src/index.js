import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {

  return (<button onClick={props.constName}>
    {props.name}
  </button>
  )
}
const Header = (props) =>{
  return <div><h1>{props.header}</h1></div>
}

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(new Array(6).fill(0))
  
 
const RandomNum = () => {
  setSelected(Math.floor(Math.random()*anecdotes.length))
}

const AddPoints = () => {
  const copy = [...points]
  copy[selected] +=1
  setPoints(copy)
}
const MostPoints = () => {
 const max = Math.max(...points)
 const maxAnecdote = anecdotes[points.indexOf(Math.max(...points))]

return(
  <div>
    <p>{maxAnecdote}</p>
    <p>Has {max} votes</p>
  </div>
)
}

  return (
    <div>
      <Header header={'Anecdote of the day'}/>
      <p>{selected}.{props.anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <Button constName={RandomNum} name={'Next Anecdote'} />
      <Button constName={AddPoints} name={'Vote'} />

      <Header header={'Anecdote with most votes'}/>
      <MostPoints/>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)