import classes from '../styles/progressBar.module.css';
import Link from 'next/link'
import Button from '../components/Button'
import {BiArrowBack} from 'react-icons/bi';
import {IoMdArrowForward, IoMdArrowBack} from 'react-icons/io';

const ProgressBar = () => {
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton}>
                <IoMdArrowBack />
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>24% Complete</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{width: '20%'}}></div>
                </div>
            </div>
            <Link href="result.html" passHref>
                <a>
                    <Button className={classes.next}>
                        <span>Next Question</span>
                        <IoMdArrowForward />
                    </Button>
                </a>
            </Link>
        </div>
    )
}

export default ProgressBar
