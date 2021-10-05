import classes from '../styles/answers.module.css';
import CheckBox from '../components/CheckBox'

const Answers = () => {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answers} text="Test Answers" />
        </div>
    )
}

export default Answers
