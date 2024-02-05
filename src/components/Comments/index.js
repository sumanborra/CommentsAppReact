import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
const {formatDistanceToNow} = require('date-fns')
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comment extends Component {
  state = {commentsList: [], name: '', comment: '', classNames: '', count: 0}
  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredData = commentsList.filter(each => each.id !== id)
    // this.setState({commentsList: filteredData})
    this.setState(prevState => ({
      count: prevState.count - 1,
      commentsList: filteredData,
    }))
  }
  toggleIsLiked = id => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }
  submitForm = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const random = Math.floor(Math.random() * 7)
    // this.setState({classNames:initialContainerBackgroundClassNames[random]})
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      time: formatDistanceToNow(new Date()),
      backgrounClassName: initialContainerBackgroundClassNames[random],
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }
  changeName = event => {
    this.setState({name: event.target.value})
  }
  changeComment = event => {
    this.setState({comment: event.target.value})
  }
  render() {
    const {commentsList, count,name,comment} = this.state
    return (
      <div className="background-container">
        <h1 className="heading">Comments</h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image-card"
          />
          <form controls="formControl">
            <p className="para">Say something about 4.0 technologies</p>
            <input
              type="text"
              value={name}
              className="input-element"
              onChange={this.changeName}
              placeholder="Your Name"
            />
            <br />
            <textarea
            value={comment}
              rows="10"
              cols="40"
              className="textarea-element"
              onChange={this.changeComment}
              placeholder="Your Comment"
            ></textarea>
            <br />
            <button type="submit" className="buttn" onClick={this.submitForm}>
              Add Comment
            </button>
          </form>
        </div>

        <hr className="horizantal-line" />
        <div className="count-comment-container">
          <p className="count-para">{count}</p>
          <p className="count-description">Comments</p>
        </div>
        <ul className="list-container">
          {commentsList.map(eachItem => (
            <CommentItem
              commentsList={eachItem}
              key={eachItem.id}
              toggleIsLiked={this.toggleIsLiked}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comment
