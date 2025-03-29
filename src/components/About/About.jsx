import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About CourseRate.Golf</h1>
            <hr />
            <section className="about-content">
                <p>**CourseRate.Golf** allows golfers to explore **top-rated golf courses worldwide**,  
                    share their experiences, and discover **hidden gems** in the golfing world.  
                    Whether you're looking for professional courses or local favorites,  
                    CourseRate.Golf is your go-to destination!
                </p>
                <h2>🌟 Features</h2>
                <ul className="about-features-list">
                    <li>🏌️‍♂️ Discover **Top Golf Courses** worldwide</li>
                    <li>⭐ Rate and review courses you’ve played at</li>
                    <li>📍 Add courses to your personal **wishlist**</li>
                    <li>📝 Create your own course listings</li>
                    <li>🔍 Search and explore **detailed course information**</li>
                </ul>
                <h2>📢 Why Use CourseRate?</h2>
                <p>
                    Whether you're a beginner or a **PGA pro**, our platform helps  
                    you find the **perfect course** based on real golfer reviews and ratings.  
                    Start exploring today and share your experience with others!
                </p>
            </section>
            <Link to="/top" className="about-btn-link">Top Courses</Link>
        </div>
    );
};

export default About;