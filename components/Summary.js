import Image from 'next/image';
import image from '../public/assets/images/success.png';
import classes from '../styles/summary.module.css';

const Summary = () => {
    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br/> 5 out of 10
                </p>
            </div>
            <div className={classes.badge}>
                <Image src={image} alt="Success" />
            </div>
        </div>
    )
}

export default Summary
