import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="site-title">Hokua's Blog</Link> 
                <ul>
                    <li><div class="map_dropdown">
                        <button class="dropbtn">Maps
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="map_dropdown-content">
                            <Link to="/map/travel">Travel</Link>
                            <Link to="/map/travel">Temp</Link>
                            <Link to="/map/travel">Temp 2</Link>
                        </div>
                    </div></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/writing">Writing</Link></li>                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;