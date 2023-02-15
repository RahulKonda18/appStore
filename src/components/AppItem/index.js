import './index.css'

const AppItem = props => {
  const {details} = props
  const {imageUrl, appName} = details

  return (
    <li className="app">
      <img className="image" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
