import "../styles/navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <a href="/" className="site-title">Site Name</a> 
                <ul>
                    <li><a href="/writing">writing</a></li>
                </ul>
            </nav>
        </div>
    ) 
}

export default Navbar;