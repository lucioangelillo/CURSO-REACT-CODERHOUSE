import CartWidget from "./CartWidget"
import logoMoto from "./img/logomoto.jpg"

const NavBar = () => {
  return (
    <div className="navbar bg-slate-600">
      <div>
          <img className="w-10 rounded-full mr-5" src={logoMoto} />
        </div>
  <div className="flex-1">
    <h1 className=" normal-case text-white text-3xl"> DREAM RIDE</h1>
  </div>
  <div className="flex-">
    <a className="btn btn-ghost  text-white text-xl">INICIO</a>
  </div>
  <div className="flex-">
    <a className="btn btn-ghost normal-case text-white text-xl">TIENDA</a>
  </div>
  <div className="flex-">
    <a className="btn btn-ghost normal-case text-white text-xl">NOSOTROS</a>
  </div>
  <div className="flex-none">
    <CartWidget/>
    </div>
  </div>
  )
}

export default NavBar