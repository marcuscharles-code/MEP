import '../assets/css/PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section className="page-not-found">
            <div className="error-content">
                <div className="error-logo">
                    <span>MEP</span>
                </div>

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    Sorry, the page you are looking for could not be found.
                    It may have been moved, removed, or the address may be incorrect.
                </p>

                <Link to="/" className="home-btn">
                    Back to Home
                </Link>
            </div>
        </section>
    );
};

export default PageNotFound;