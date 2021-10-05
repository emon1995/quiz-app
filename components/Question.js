import { MdHelpOutline } from 'react-icons/md';
import Answers from '../components/Answers';
import classes from '../styles/question.module.css';

const Question = () => {
    return (
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <span><MdHelpOutline /></span>
                Here goes the question from Learn with Sumit?
            </div>
            <Answers />
        </div>
    )
}

export default Question
