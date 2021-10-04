import classes from '../styles/layout.module.css';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <main className={classes.main}>
            <div className={classes.container}>
            {children}
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Layout
