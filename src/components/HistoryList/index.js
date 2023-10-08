import './index.css'

const HistoryList = props => {
  const {browsedHistoryDetails, onHistoryDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browsedHistoryDetails

  const onDeleteHistory = () => {
    onHistoryDelete(id)
  }

  return (
    <li className="display-row-history">
      <div className="elements-container">
        <p className="time-stamp">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="app-logo" />
        <p className="app-title">{title}</p>
        <p className="domain-link">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        testid="delete"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default HistoryList
