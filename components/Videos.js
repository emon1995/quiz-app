import classes from "../styles/videos.module.css"
import Video from "./Video"

const Videos = () => {
    return (
        <div className={classes.videos}>
            <Video />
            <Video />
        </div>
    )
}

export default Videos
