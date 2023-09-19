import { getSurveyType } from "../../../types/survey.types"
import CreateComment from "./components/createComment"

const Comments = ({ user, survey }: getSurveyType) => {
    return (
        <div className="container-comments">
            <CreateComment user={user} survey={survey} />
        </div>
    )
}

export default Comments