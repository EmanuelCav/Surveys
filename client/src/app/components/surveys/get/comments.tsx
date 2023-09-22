import CreateComment from "./components/createComment"
import Comment from './components/comment';

import { IComment } from "../../../interfaces/Survey"
import { getSurveyType } from "../../../types/survey.types"

const Comments = ({ user, survey }: getSurveyType) => {

    return (
        <div className="container-comments">
            <CreateComment user={user} survey={survey} />
            <div className="container-comments-section">
                {
                    survey.comments &&
                    survey.comments.map((comment: IComment, index: number) => {
                        return <Comment comment={comment} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Comments