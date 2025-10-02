import React from 'react'
import ListaDeLinguagens from './components/ListaDeLinguagens'



const App = () => {
  return (
    <div>
    {
      [
        {linguagem: "C++", dificuldade:"Difícil"},
        {linguagem: "C#", dificuldade:"Difícil"},
        {linguagem: "Python", dificuldade:"Difícil"},
        {linguagem: "JavaScript", dificuldade:"Difícil"},
        {linguagem: "Java", dificuldade:"IMPOSSÍVEL"}

      ].map((linguagem) =>
        <ListaDeLinguagens linguagem={linguagem.linguagem} dificuldade={linguagem.dificuldade}/>
      )
    } 

    </div>
  )
}

export default App

