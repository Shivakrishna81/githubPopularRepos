import './index.css'

const LanguageFilterItem = props => {
  const {details, isActive, onClickEvent} = props
  const {language, id} = details
  const classItem = isActive ? 'dec-btn' : 'button'

  const onClickChangeId = () => {
    onClickEvent(id)
  }

  return (
    <button type="button" className={classItem} onClick={onClickChangeId}>
      <li>{language}</li>
    </button>
  )
}

export default LanguageFilterItem
