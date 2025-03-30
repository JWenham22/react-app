import './Home.css';
import { Link } from 'react-router-dom'
import courseImage from '../../images/default-course.jpg.webp';
import About from '../About/About'

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-heading">Welcome to CourseRate.Golf</h1>
            <img src={courseImage} alt="Home Picture" className="home-img" />
            <div className="home-btns">
                <Link to="/signup" className="btn-link">Sign Up</Link>
                <Link to="/login" className="btn-link">Login</Link>
            </div>


            <About />
        </div>
    );
};

export default Home;