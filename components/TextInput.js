import classes from '../styles/textInput.module.css';

const TextInput = ({children, ...rest}) => {
    return (
        <div className={classes.textInput}>
            <input {...rest}/>
            <span> {children} </span>
        </div>
    )
}

export default TextInput
