import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { IComment } from '../../../../interfaces/Survey'

const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <div className='container-comment'>
      <p className='user-info-comment'>{comment.user.username}</p>
      <p className='user-info-comment' style={{ fontSize: '16px', fontWeight: 'normal' }}>{comment.comment}</p>
      <div className="contain-like-comment">
        <AiFillStar size={28} color={'#f64'} style={{ cursor: 'pointer' }} />
        <p className='text-info-getsurvey'>{comment.likes.length}</p>
      </div>
    </div>
  )
}

export default Comment