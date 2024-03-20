import { Box } from "@mui/material";

import CreateComment from "./components/comments/CreateComment"
import SurveyComments from "./components/comments/SurveyComments";

import { CommentsPropsType } from "../../types/props.types";

const Comments = ({ user, survey }: CommentsPropsType) => {

    return (
        <Box className="container-comments">
            <CreateComment user={user} survey={survey} />
            <SurveyComments user={user} comments={survey.comments!} />
        </Box>
    )
}

export default Comments