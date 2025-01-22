import { Link } from "react-router";
import { Outlet } from "react-router";
const Products = () => {
  return (
    <div>
        <h1>
            Products
        </h1>
        <ul>
          <li>
            <Link to={"/products/trend"}>Trend</Link>
          </li>
          <li>
            <Link to={"/products/cheap"}>Cheap</Link>
          </li>
        </ul>
        <Outlet/>
    </div>
  );
};

export default Products;