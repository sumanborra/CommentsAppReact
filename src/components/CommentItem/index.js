// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentsList, toggleIsLiked, onDeleteComment} = props
  const {id, name, comment, isLiked, time, backgrounClassName} = commentsList
  console.log(isLiked)
  const likeimage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeText = isLiked ? 'liked' : 'like'
  const likeParaClassName = isLiked ? 'liked-style' : 'like-style'
  const sliceName = name.slice(0, 1)
  const changeLike = () => {
    toggleIsLiked(id)
  }
  const DeleteComment = () => {
    onDeleteComment(id)
  }
  return (
    <li className="list-item-style">
      <div className="listdetails-container">
        <p className={`profile-pic ${backgrounClassName}`}>{sliceName}</p>
        <div>
          <div className="profile-container">
            <p className="name-para">{name}</p>
            <p className="para-namefull">{time}</p>
          </div>
          <p className="comment-description">{comment}</p>
        </div>
      </div>
      <div className="like-delete-icons-container">
        <button className="buttn-1" type="button" onClick={changeLike}>
          <img
            src={likeimage}
            className="like-icon"
            id="likeIconId"
            alt="like"
          />
          <label className={likeParaClassName} for="likeIconId">
            {likeText}
          </label>
        </button>
        <button className="buttn-1" type="button" onClick={DeleteComment} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="like-icon"
          />
        </button>
      </div>
      <hr className="horizantal-line-items" />
    </li>
  )
}
export default CommentItem
