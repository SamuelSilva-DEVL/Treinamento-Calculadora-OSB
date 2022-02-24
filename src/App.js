import React from 'react'
import './App.css'
import { IoMdAdd } from 'react-icons/io'
import { FiChevronUp } from 'react-icons/fi'
import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react'

export default function App() {
  const [contador, setContador] = useState(1)
  const [variavel, setVariavel] = useState(0)
  const [resultado, setResultado] = useState(0)

  function adicionarContador() {
    setContador(contador + 1)
  }
  function removerContador() {
    setContador(contador - 1)
  }

  function realizaSoma() {
    setVariavel(document.querySelector('#entrada').value)
    var res = parseInt(contador) + parseInt(variavel)
    setResultado(res)
  }

  return (
    <>
      <div className="container">
        <h1>Calculator</h1>
        {/*caixa com botoes de aumentar e diminuir*/}
        <div className="caixas">
          <div className="caixa1">
            <p>{contador}</p>
            <div>
              <button onClick={adicionarContador}>
                <FiChevronUp />
              </button>
              <button onClick={removerContador}>
                <FiChevronDown />
              </button>
            </div>
          </div>
          {/* caixa pra valor de entrada */}
          <div className="caixa">
            <input
              type="text"
              placeholder="0"
              className="btnInput"
              id="entrada"
            />
          </div>
        </div>
        {/* caixa com botão de adição */}
        <div className="caixa2">
          <button className="btn" onClick={realizaSoma}>
            <IoMdAdd size={30} color="#ffff" />
          </button>
        </div>
        <h1 className="result">{resultado}</h1>
      </div>
    </>
  )
}
