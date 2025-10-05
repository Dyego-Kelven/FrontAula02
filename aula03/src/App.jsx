import React from 'react'
import Produto from './components/Produto'

const App = () => {
  return (
    <div>
    {
      [
          { nome: "Notebook", preco: 4500, categoria: "Informática", quantidade: 10 },
          { nome: "Mouse Gamer", preco: 150, categoria: "Acessórios", quantidade: 0 },
          { nome: "Cadeira Ergonômica", preco: 1200, categoria: "Móveis", quantidade: 3 },
        ].map((produto) =>
          <Produto
            nome={produto.nome} preco={produto.preco} categoria={produto.categoria} quantidade={produto.quantidade}
            
            
          />
        )
      }
    </div>
  )
}

export default App

