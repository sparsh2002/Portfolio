import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="nav">
            <nav>
                <div className="logo">
                    SparshDesign
                </div>
                <ul>
                    <li><Link to='/' className="active link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/ourWorks' className="link">Our Works</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;