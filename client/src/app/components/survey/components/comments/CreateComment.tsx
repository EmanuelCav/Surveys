import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from '@mui/material';

import { commentSurveyApi } from "../../../../server/api/surveys.api";
import { getSurveyAction } from "../../../../server/features/surveys.features";

import { ICreateComment } from '../../../../interfaces/Survey'

import { CommentsPropsType } from '../../../../types/props.types';

const CreateComment = ({ user, survey }: CommentsPropsType) => {

  const dispatch = useDispatch()

  const initialState: ICreateComment = {
    comment: ""
  }

  const [commentData, setCommentData] = useState<ICreateComment>(initialState)

  const { comment } = commentData

  const getData = async () => {

    try {

      const { data } = await commentSurveyApi(survey.id!, commentData, user.token!)
      dispatch(getSurveyAction(data))

      setCommentData({
        comment: ""
      })

    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCommentData({ ...commentData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getData()
  }

  return (
    <Box component='form' noValidate display='flex' justifyContent='space-between' alignItems='center' width='100%' onSubmit={handleSumbit}>
      <TextField
        placeholder="Write a comment"
        multiline
        rows={2}
        name='comment'
        value={comment}
        onChange={handleChange}
        margin="normal"
        color='warning'
        sx={{
          width: '80%',
          '&:hover fieldset': {
            borderColor: '#f64 !important',
          },
        }}
      />
      <Button type="submit" variant='contained' color='warning' disabled={comment.length === 0}>SEND</Button>
    </Box>
  )
}

export default CreateComment