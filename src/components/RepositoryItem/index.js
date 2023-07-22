// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, starsCount, forksCount, avatarUrl, issuesCount} = details

  return (
    <li className="listItem">
      <img src={avatarUrl} alt={name} className="img" />
      <h1 className="head2">{name}</h1>
      <div className="item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p>{starsCount}</p>
      </div>
      <div className="item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p>{forksCount}</p>
      </div>
      <div className="item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
