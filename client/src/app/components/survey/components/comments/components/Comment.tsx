import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { Box, Typography } from '@mui/material';

import ActionComment from './ActionComment';

import { likeCommentApi, removeCommentApi } from "../../../../../server/api/surveys.api";
import { getSurveyAction } from "../../../../../server/features/surveys.features";

import { CommentPropsType } from '../../../../../types/props.types';

const Comment = ({ comment, user }: CommentPropsType) => {

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
    <Box width='100%' mt={2} sx={{
      wordWrap: 'break-word'
    }}>
      <ActionComment Icon={AiOutlineDelete} handleAction={removeComment} info={`${comment.user.username}`} />
      <Typography variant='h6' mb={1}>
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