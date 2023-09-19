import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from "react-redux";

import { commentSurveyApi } from "../../../../server/api/surveys.api";
import { commentSurveyAction } from "../../../../server/features/surveys.features";

import { IComment } from '../../../../interfaces/Survey'
import { getSurveyType } from '../../../../types/survey.types';

const CreateComment = ({ user, survey }: getSurveyType) => {

  const dispatch = useDispatch()

  const initialState: IComment = {
    comment: ""
  }

  const [commentData, setCommentData] = useState<IComment>(initialState)

  const { comment } = commentData

  const getData = async () => {

    try {

      const { data } = await commentSurveyApi(survey._id, commentData, user.token)
      dispatch(commentSurveyAction(data))

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
    setCommentData({
      comment: ""
    })
  }

  return (
    <form className='form-comment' onSubmit={handleSumbit}>
      <textarea className='comment-area' name='comment' value={comment} onChange={handleChange} placeholder='Write a comment' />
      <button className='button-comment' disabled={comment.length === 0 ? true : false}>SEND</button>
    </form>
  )
}

export default CreateComment