import Link from 'next/link';
import classes from '../styles/account.module.css';

const Account = () => {
    return (
        <div className={classes.account}>
            <span>account_circle</span>
            <Link href='signup.html'>
                <a>Signup</a>
            </Link>
        </div>
    )
}

export default Account
