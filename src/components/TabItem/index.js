import './index.css'

const TabItem = props => {
  const {details, tab, tabChange} = props
  const {tabId, displayText} = details
  const cls = tab === tabId ? 'selected' : 'none'
  const changeTab = () => {
    tabChange(tabId)
  }
  return (
    <li>
      <button type="button" onClick={changeTab} className={cls}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
