import classes from '../styles/analysis.module.css';
import Question from '../components/Question';

const Analysis = () => {
    return (
        <div className={classes.analysis}>
            <h1>Question Analysis</h1>
            <h1>You answered 5 out of 10 question correctly</h1>
            <Question />
        </div>
    )
}

export default Analysis
