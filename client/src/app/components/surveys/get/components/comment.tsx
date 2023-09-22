import { useDispatch } from 'react-redux';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';

import { removeCommentApi } from "../../../../server/api/surveys.api";
import { commentSurveyAction } from "../../../../server/features/surveys.features";

import { commentSurveyType } from '../../../../types/survey.types';

const Comment = ({ comment, user }: commentSurveyType) => {

  const dispatch = useDispatch()

  const removeComment = async () => {
    const { data } = await removeCommentApi(comment._id, user.token)
    dispatch(commentSurveyAction(data))
  }

  return (
    <div className='container-comment'>
      <div className="container-action-remove">
        <p className='user-info-comment'>{comment.user.username}</p>
        {
          comment.user._id === user.user._id &&
          <AiOutlineDelete size={18} color={'#f00'} className="remove-icon-comment" onClick={removeComment} />
        }
      </div>
      <p className='user-info-comment' style={{ fontSize: '16px', fontWeight: 'normal' }}>{comment.comment}</p>
      <div className="contain-like-comment">
        <AiFillStar size={28} color={'#f64'} style={{ cursor: 'pointer' }} />
        <p className='text-info-getsurvey'>{comment.likes.length}</p>
      </div>
    </div>
  )
}

export default Comment