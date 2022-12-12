import { useState } from 'react'

const Contador = ({ stock }) => {

  const [count, setCount] = useState(1)

  const restarUnidad = () => {
    if (count > 1) {
      setCount(count => count - 1)
    }
  }
  const agregarUnidad = () => {
    if (count < stock) {
      setCount(count => count + 1)
    }
  }


  return (
    <div>
      <button onClick={restarUnidad} className='btn'>-</button>
      <span className='text-xl m-2'>{count}</span>
      <button onClick={agregarUnidad} className='btn'>+</button>



    </div>
  )
}

export default Contador