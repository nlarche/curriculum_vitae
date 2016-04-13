import React, { Component, PropTypes } from "react"
import Styles from "./index.css"

export default class ProfileCard extends Component {  
    
  static propTypes = {
    content: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  };  
    
  constructor(props) {
    super(props)
  }    
  render() {    
    const imageName = this.props.imagePath
    return (
      <div className={ Styles.profileCard }  >       
         <img className={ Styles.picture } 
           alt={ imageName } 
           src={ this.props.imagePath }  
         />
         <div
           dangerouslySetInnerHTML={ { __html: this.props.content } }
         />
      </div>
    )
  }
}
