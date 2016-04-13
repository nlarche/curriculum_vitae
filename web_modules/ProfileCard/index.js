import React, { Component, PropTypes } from "react"
import Styles from "./index.css"

export default class ProfileCard extends Component {  
    
  static propTypes = {
    content: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  };  
    
  constructor(props) {
    super(props)
    this.state = {
      content : this.props.content,
      imagePath : this.props.imagePath,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.initState(nextProps)
  }
  shouldComponentUpdate(nextProps) {       
    return nextProps.content !== this.state.content
         || nextProps.imagePath !== this.state.imagePath
  }   
  initState(props) {
    this.setState({
      content : props.content,
      imagePath : props.imagePath,
    })
  }
  render() {    
    const imageName = this.state.imagePath
    return (
      <div className={ Styles.profileCard }  >       
         <img className={ Styles.picture }  
           alt={ imageName }  
           src={ this.state.imagePath } 
         />
         <div
           dangerouslySetInnerHTML={ { __html: this.state.content } }
         />
      </div>
    )
  }
}
