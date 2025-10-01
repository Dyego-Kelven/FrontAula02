import React from 'react'

const EstouComSono = (props) => {
  return (
    <div>
        {props.comSono ? <h1> Hora de descansar</h1> : <h1>Bora Estudar mais um pouco ! </h1>}
    </div>
  )
}

export default EstouComSono

