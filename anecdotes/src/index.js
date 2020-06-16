import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.text}</h1>
const Button = (props) => {
  const { onClick, text } = props
  return (
      <button onClick={onClick}>
      {text}
      </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const handleClick = () => {
    const rand = Math.floor((Math.random() * 6));
    console.log(rand);
    setSelected(rand)
  }

  const [votes, setVotes] = useState(new Array(6).fill(0))
  console.log("current",votes);

  const handleVote = () => {
    console.log("id",selected);
    console.log("votes",votes);
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

  }

  let top = 0
  let topID = 0
  votes.forEach((item, i) => {
    if (item>=top){
      top=item
      topID=i
      console.log(topID);
    }
  });

  console.log("top", top);

  return (
    <div>
      <Header text="anectode of the year"/>
      <p>{props.anecdotes[selected]}</p>
      <Button onClick={handleClick} text="next anecdote" />
      <Button onClick={handleVote} text="vote" />
      <Header text="anectode with most votes" />
      <p>{props.anecdotes[topID]}</p>
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
