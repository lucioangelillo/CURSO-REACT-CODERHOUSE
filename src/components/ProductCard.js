import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, name, picture, price, stock }) => {
  return (
    <div className="mt-4 flex justify-center items-center">
      <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img className="w-64 object-cover rounded-t-md" src={picture} alt="No se cargo la imagen" />
        <div className="mt-1">
          <h1 className="text-2xl font-bold text-gray-700">{name}</h1>
          <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <p className="block text-xl font-semibold text-gray-700 cursor-auto">${price}</p>
            <Link to={`/product/${id}`} className="btn">Ver detalle</Link>
          </div>
          <p className="text-sm mt-2 text-xl font-bold text-gray-700">Stock Disponible:{stock}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard


