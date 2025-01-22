import { Link } from "react-router";
const Navbar = () => {
  return (
<>
<h1>Project  Router! </h1>
<nav>
<ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/about">About</Link>
    </li>
    <li>
    <Link to="/products">Products</Link>
    </li>
</ul>
</nav>

</>  )
}

export default Navbar;