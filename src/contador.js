import React from 'react'
import { useState } from 'react'

export default function Contador() {
  const [contador, setContador] = useState(1)

  function adicionarContador() {
    setContador(contador + 1)
  }
  function removerContador() {
    setContador(contador - 1)
  }

  return <div>{contador}</div>
}
