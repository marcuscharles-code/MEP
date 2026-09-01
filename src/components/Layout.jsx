import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};