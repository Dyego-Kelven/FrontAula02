import React from 'react'

const Produto = ({ nome, preco, categoria, quantidade }) => {
  return (
    <>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
      <p>Categoria: {categoria}</p>
      <p>Status: {quantidade > 0 ? "DISPONÍVEL" : "ESGOTADO"}</p>
    
    </>
  )
}

export default Produto
