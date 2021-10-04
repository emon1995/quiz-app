import Link from 'next/link';
import { VscAccount } from 'react-icons/vsc';
import classes from '../styles/account.module.css';

const Account = () => {
    return (
        <div className={classes.account}>
            <VscAccount />
            <Link href='signup.html'>
                <a>Signup</a>
            </Link>
        </div>
    )
}

export default Account
