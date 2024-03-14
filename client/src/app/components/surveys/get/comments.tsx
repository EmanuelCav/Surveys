import CreateComment from "./components/createComment"
import Comment from './components/comment';

import { IComment } from "../../../interfaces/Survey"

const Comments = ({ user, survey }: any) => {

    return (
        <div className="container-comments">
            <CreateComment user={user} survey={survey} />
            <div className="container-comments-section">
                {
                    survey.comments &&
                    survey.comments.map((comment: IComment, index: number) => {
                        return <Comment comment={comment} user={user} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Comments