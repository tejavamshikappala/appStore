import './index.css'

const TabItem = props => {
  const {eachDetails, onChangingFun, isActive} = props
  const {tabId, displayText} = eachDetails

  const onChanging = () => {
    onChangingFun(tabId)
  }

  const isActiveClass = isActive ? 'forActive' : ''

  return (
    <>
      <li className="forList">
        <button
          className={`${isActiveClass} forButton`}
          type="button"
          onClick={onChanging}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
