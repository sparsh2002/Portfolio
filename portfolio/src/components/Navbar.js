import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
const Navbar = () => {
    return ( 
        <div className="nav">
            <nav>
                <div className="logo">
                    SparshDesign
                </div>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label for="checkbox" >
                    <MenuIcon id="nav-icon" />
                </label>
                <ul>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/ourWorks' className="link">Our Works</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;