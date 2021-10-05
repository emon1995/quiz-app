import Image from 'next/image';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import image from '../public/assets/images/3.jpg';
import classes from '../styles/miniPlayer.module.css';

const MiniPlayer = () => {
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
            <span className={classes.open}><AiOutlinePlayCircle  /></span>
            <span className={classes.close} ><MdClose />close</span>
            <Image src={image} alt="image" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    )
}

export default MiniPlayer
