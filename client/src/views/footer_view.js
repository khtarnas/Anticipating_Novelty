import { Link } from 'react-router-dom'
import "../styles/footer.css"

function Footer() {
    return (
        <div>
             <footer className="foot">
                <Link to="/" className="site-title">Hokua's Blog</Link>
            </footer>
        </div>
    )
}

export default Footer;