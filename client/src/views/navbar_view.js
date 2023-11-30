import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="site-title">Site Name</Link> 
                <ul>
                    <li><Link to="/writing">writing</Link></li>
                </ul>
            </nav>
        </div>
    ) 
}

export default Navbar;