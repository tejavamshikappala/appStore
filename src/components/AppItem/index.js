import './index.css'

const AppItem = props => {
  const {eachItemDetails} = props

  const {appName, imageUrl} = eachItemDetails
  return (
    <>
      <li className="forListInappItem">
        <img src={imageUrl} className="forImageInApp" alt={appName} />
        <p className="forParaa">{appName}</p>
      </li>
    </>
  )
}
export default AppItem
