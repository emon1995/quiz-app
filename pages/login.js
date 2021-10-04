import Link from 'next/link';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import Button from '../components/Button';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import classes from '../styles/login.module.css';

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={classes.column}>
      <Illustration />
      <Form className={`${classes.login}`}>
        <TextInput type='email' placeholder='Enter email'>
          <MdOutlineMailOutline />
        </TextInput>

        <TextInput type='password' placeholder='Enter password'>
          <RiLockPasswordLine />
        </TextInput>
        
        <Button>Submit Now</Button>

        <div className={classes.info}>
            Don&apos;t have an account? <Link href="login.html"><a>Signup</a></Link> instead.
        </div>
      </Form>
      </div>
    </>
  );
};

export default Login;
