import Link from 'next/link';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLockClock, MdOutlineMailOutline } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import classes from '../styles/signup.module.css';

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classes.column}>
      <Illustration />
      <Form className={`${classes.signUp}`}>
        <TextInput type='text' placeholder='Enter name'>
          <BsFillPersonFill />
        </TextInput>

        <TextInput type='email' placeholder='Enter email'>
          <MdOutlineMailOutline />
        </TextInput>

        <TextInput type='password' placeholder='Enter password'>
          <RiLockPasswordLine />
        </TextInput>

        <TextInput type='password' placeholder='Confirm password'>
          <MdOutlineLockClock />
        </TextInput>

        <CheckBox text=" I agree to the Terms &amp; Conditions" />

        <Button><span>Submit Now</span></Button>

        <div className={classes.info}>
            Already have an account? <Link href="/login"><a>Login</a></Link> instead.
        </div>
      </Form>
      </div>
    </>
  );
};

export default Signup;
