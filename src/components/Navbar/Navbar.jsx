import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <h1 className="nav-title">CourseRate.Golf</h1>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="#about-section">About</Link>
                    <Link to="/top">Top Courses</Link>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;