import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { Box, Typography } from '@mui/material';

import ActionComment from './ActionComment';
import NicknameComment from './NicknameComment';
import ActionPrivateSurvey from '../../surveyinfo/components/ActionPrivateSurvey';

import { likeCommentApi, removeCommentApi } from "../../../../../server/api/surveys.api";
import { getSurveyAction } from "../../../../../server/features/surveys.features";

import { ILike } from '../../../../../interfaces/Survey';
import { CommentPropsType } from '../../../../../types/props.types';

import { dangerMessage } from '../../../../../helper/message';

const Comment = ({ comment, user }: CommentPropsType) => {

  const dispatch = useDispatch()

  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isRemove, setIsRemove] = useState<boolean>(false)

  const handleRemove = () => {
    setIsRemove(true)
  }

  const removeComment = async () => {

    try {

      const { data } = await removeCommentApi(comment.id, user.token!)
      dispatch(getSurveyAction(data.survey))
      setIsRemove(false)

    } catch (error: any) {
      dangerMessage(error.response.data.message)
    }

  }

  const likeComment = async () => {

    try {

      const { data } = await likeCommentApi(comment.id, user.token!)
      dispatch(getSurveyAction(data))
      setIsLiked(!isLiked)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    comment.likes.find((like: ILike) => {
      if (like.userId === user.user?.id) {
        setIsLiked(true)
      }
    })
  }, [isLiked, comment.likes])

  return (
    <Box width='100%' position='relative' mt={2} sx={{
      wordWrap: 'break-word'
    }}>
      {
        isRemove && <ActionPrivateSurvey buttonText='Remove' text='Are you sure to remove the comment?' func={removeComment} setIsAction={setIsRemove} />
      }
      <NicknameComment Icon={AiOutlineDelete} handleAction={handleRemove} info={comment.user.username!} />
      <Typography variant='subtitle1' my={2}>
        {comment.comment}
      </Typography>
      {
        isLiked ? <ActionComment Icon={AiFillStar} handleAction={likeComment} info={`${comment.likes.length}`} />
          : <ActionComment Icon={AiOutlineStar} handleAction={likeComment} info={`${comment.likes.length}`} />
      }
    </Box>
  )
}

export default Comment