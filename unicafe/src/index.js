import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.displaytext}</h1>
    </div>
  )
}


const Button = (props) => {
  console.log(props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Stat = (props) => {

  return (
    <tr><td> {props.text}</td> <td>{props.value}</td> <td>{props.suff} </td></tr>

  )
}

const Stats =(props) => {
  const all = props.good + props.neutral + props.bad
  const average = props.good/all -props.bad/all
  const positive = 100*props.good/all


  if (all === 0) {
    return (
      <div> No feedback given </div>
    )
  }
  return (

    <table>
         <Stat text="good" value={props.good} />
         <Stat text="neutral" value={props.neutral} />
         <Stat text="bad" value={props.bad} />
         <Stat text="all" value={all} />
         <Stat text="average" value={average} />
         <Stat text="positive" value={positive} suff="%" />
    </table>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const handleClickGood = () => {
    setGood(good+1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleClickBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <Header displaytext="give feedback" />
      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />
      <Header displaytext="statistics" />
      <Stats good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
