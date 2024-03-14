import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';

import { likeCommentApi, removeCommentApi } from "../../../../server/api/surveys.api";
import { getSurveyAction } from "../../../../server/features/surveys.features";

import { commentSurveyType } from '../../../../types/survey.types';

const Comment = ({ comment, user }: commentSurveyType) => {

  const dispatch = useDispatch()

  const [isLiked, setIsLiked] = useState<boolean>(false)

  const removeComment = async () => {

    try {
      const { data } = await removeCommentApi(comment.id, user.token)
      dispatch(getSurveyAction(data))
    } catch (error) {
      console.log(error);
    }

  }

  const likeComment = async () => {

    try {

      const { data } = await likeCommentApi(comment.id, user.token)
      dispatch(getSurveyAction(data))
      setIsLiked(!isLiked)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    comment.likes.find((userId) => {
      if (userId === user.user.id) {
        setIsLiked(true)
      }
    })
  }, [isLiked, comment.likes])

  return (
    <div className='container-comment'>
      <div className="container-action-remove">
        <p className='user-info-comment'>{comment.user.username}</p>
        {
          comment.user.id === user.user.id &&
          <AiOutlineDelete size={18} color={'#f00'} className="remove-icon-comment" onClick={removeComment} />
        }
      </div>
      <p className='user-info-comment' style={{ fontSize: '16px', fontWeight: 'normal' }}>{comment.comment}</p>
      <div className="contain-like-comment">
        {
          isLiked ? (
            <AiFillStar size={28} color={'#f64'} style={{ cursor: 'pointer' }} onClick={likeComment} />
          ) : (
            <AiOutlineStar size={28} color={'#f64'} style={{ cursor: 'pointer' }} onClick={likeComment} />
          )
        }
        <p className='text-info-getsurvey'>{comment.likes.length}</p>
      </div>
    </div>
  )
}

export default Comment