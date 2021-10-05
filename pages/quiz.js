import ProgressBar from "../components/ProgressBar"
import Answers from "../components/Answers"
import MiniPlayer from "../components/MiniPlayer"

const Quiz = () => {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Films</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </>
    )
}

export default Quiz
