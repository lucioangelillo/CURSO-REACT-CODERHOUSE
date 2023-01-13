import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import swal from "sweetalert"




const Carrito = () => {
  const { cart, deleteProduct,clearCart } = useCartContext()

  const makeOrder = () => {
    const user = { name: "Juan", phone: "15449415247", mail: "juan@gmail.com" }
    const order = {
      buyer: user,
      items: cart,
      precioCart: precioTotal
    }
    saveOrder(order)
    console.log(order)
    swal("Su compra se realizo con exito, el saldo que se debitara de su cuenta es $ " + order.precioCart)
   clearCart()

  }

  



  function handleSubmit(e) {
    e.preventDefault();
    makeOrder()


  }

  const saveOrder = async (order) => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    const { id } = await addDoc(orderCollection, order)
    console.log(id)
  }

  const precioTotal = cart.reduce((acc, product) => {
    return acc + product.quantity * product.price
  }, 0);

  if (cart.length <= 0) {
    return <div className="  mt-4 justify-center">
      <p className="mt-4 flex-1 block text-xxl font-semibold text-gray-700 cursor-auto">Agrega articulos en el carrito para avanzar con tu compra</p>
      <Link to={`/`} className=" mt-4 btn btn-primary ">AGREGAR ARTICULOS </Link>
    </div>
  } else {
    return (

      <div>
        <div className=" grid auto-rows-auto gap-1 divide-y">
          {cart.map(product => (
            <div className="flex justify items-center">
              <img className="w-32 object-cover rounded-t-md circle flex-none" src={product.picture} alt="No se cargo la imagen" />
              <p className=" flex-1 block text-xl font-semibold text-gray-700 cursor-auto">{product.name}</p>
              <p className=" flex-1  block text-xl font-semibold text-gray-700 cursor-auto">Cantidad= {product.quantity}</p>
              <p className=" flex-1  block text-xl font-semibold text-gray-700 cursor-auto">Subtotal= ${product.quantity * product.price}</p>
              <button className=" flex-1  btn" onClick={() => deleteProduct(product)}>Eliminar producto</button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <span className="flex-1"></span>


          <p className="block text-xl font-semibold text-gray-700 cursor-auto object-right flex-1 w-64	">TOTAL DEL CARRITO = $ {precioTotal}</p>
        </div>



        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Detalle de Facturacion</h3>
                <p className="mt-1 text-sm text-gray-600">Completa los datos para que se pueda procesar la compra.</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmit}  >
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                        <input type="text" name="first-name" id="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Telefono</label>
                        <input type="number" name="last-name" id="last-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required></input>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">E-mail</label>
                        <input type="email" name="email-address" id="eMail" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">Repetir E-mail</label>
                        <input type="email" name="email-address" id="eMail_repeat" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required ></input>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" className="btn btn-primary" >FINALIZAR COMPRA</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>)

  }




}

export default Carrito