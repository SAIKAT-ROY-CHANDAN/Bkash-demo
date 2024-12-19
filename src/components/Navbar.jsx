import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-3 text-xl justify-center py-6 border-b border-b-black/40">
        <Link to='/' className="hover:text-orange-500 outline-none">Home</Link>
        <Link to='/products' className="hover:text-orange-500 outline-none">Products</Link>
    </div>
  )
}

export default Navbar