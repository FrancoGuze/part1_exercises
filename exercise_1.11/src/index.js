import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (<div> <h1>{props.header}</h1> </div>)
}

const Boton = (props) => {
  return (
    <button onClick={props.constName}> {props.name} </button>
  )
}

const Statistics = (props) => {
  if (props.totalS === 0) {
    return (<p>No feedback given</p>)
  }
  return (<div> <p>{props.good}: {props.goodS}</p>
    <p>{props.neutral}: {props.neutralS}</p>
    <p>{props.bad}: {props.badS}</p> <p>{props.total}: {props.totalS}</p>
    <p>{props.averge}: {props.avergeS}</p>
    <p>{props.positive}: {props.positiveS}</p>
  </div>)
}
const StatisticLine = (props) => {
  return (
    <tr><td>{props.name}:  {props.value}</td></tr>
  )
}
const App = () => {
  // save clicks of each button to its own state 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [averge, setAverge] = useState(0)

  const Good = () => {
    setTotal(total + 1)
    setAverge(averge + 1)
    setGood(good + 1)
  }
  const Neutral = () => {
    setTotal(total + 1)
    setNeutral(neutral + 1)
  }
  const Bad = () => {
    setTotal(total + 1)
    setAverge(averge - 1)
    setBad(bad + 1)
  }
  const positive = good / total * 100 + '%'

  return (
    <div>
      <Header header={'give feedback'} />

      <Boton constName={Good} name={'Good'} />
      <Boton constName={Neutral} name={'Neutral'} />
      <Boton constName={Bad} name={'Bad'} />

      <Header header={'statistics'} />
      <table>
        <tbody>
          
            <StatisticLine name={'Good'}value={good}/>
            <StatisticLine name={'Neutral'}value={neutral}/>
            <StatisticLine name={'Bad'}value={bad}/>
            <StatisticLine name={'Total'}value={total}/>
            <StatisticLine name={'Averge'}value={averge / total}/>
            <StatisticLine name={'Positive'}value={positive}/>
          
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
