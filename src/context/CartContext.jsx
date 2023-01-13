
import { createContext, useContext, useState } from "react"

export const Contexto = createContext()

export const useCartContext = () => {
  const cartContext = useContext(Contexto)
  return cartContext

}

export const CartContext = ({ children }) => {

  const [cart, setCart] = useState([])

  
  const clearCart = (cart) => {
    setCart( [] )
  }

  const addnewProduct = (product) => {

    const oldProduct = cart.find((currentProduct) => currentProduct.id === product.id)

    if (!oldProduct) {
      const newCart = [...cart, product]
      setCart(newCart)

    } else {
      const oldCart = cart.filter((currentProduct) => currentProduct.id !== product.id)

      const newProduct = { ...product, quantity: product.quantity + oldProduct.quantity }

      setCart([...oldCart, newProduct])
    }
  }

  const deleteProduct = (product) => {
    const newCart = cart.filter((currentProduct) => currentProduct.id !== product.id)
    setCart(newCart)
  }

  

  console.log(cart)


  return (
    <Contexto.Provider value={{
      cart,
      addnewProduct,
      deleteProduct,
      deleteProduct,
      clearCart,
    }}>
      {children}
    </Contexto.Provider>
  )
}