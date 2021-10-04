import Image from 'next/image'
import Link from 'next/link'
import image from '../public/assets/images/3.jpg'
import classes from "../styles/video.module.css"

const Video = () => {
    return (
        <Link href="quiz.html" passHref>
            <div className={classes.video}>
                <Image src={image} alt="video" />
                <p>#23 React Hooks Bangla - React userRducer hook Bangla</p>
                <div className={classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score: Not taken yet</p>
                </div>   
            </div>
        </Link>
    )
}

export default Video
