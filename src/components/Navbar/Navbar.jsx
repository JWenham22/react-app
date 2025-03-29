import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <h1 className="nav-title">CourseRate.Golf</h1>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/top">Top Courses</a>
                    <a href="/courses">My Courses</a>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;