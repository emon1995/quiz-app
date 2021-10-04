import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/images/logo-bg.png';
import classes from '../styles/navbar.module.css';
import Account from './Account';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
            <li>
                <Link href='index.html'>
                <a className={classes.brand}>
                    <Image src={logo} alt="brand pic" />
                    <h3>Quiz App</h3>
                </a>
                </Link>
            </li>
            </ul>
            <Account />
        </nav>
    )
}

export default Navbar
