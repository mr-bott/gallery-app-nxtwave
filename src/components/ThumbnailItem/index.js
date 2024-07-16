// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  click = id => {
    const {clicked} = this.props
    clicked(id)
  }
  render() {
    const {details} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = details
    return (
      <li className="li">
      <button className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="img"
          onClick={() => this.click(id)}
        />
        </button>
      </li>
    )
  }
}
export default ThumbnailItem
