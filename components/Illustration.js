import classes from '../styles/illustration.module.css';
import Image from 'next/image'
import signup from '../public/assets/images/signup.svg'

const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <Image src={signup} alt="signup" />
        </div>
    )
}

export default Illustration
