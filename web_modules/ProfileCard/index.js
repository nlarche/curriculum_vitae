import React, { Component, PropTypes } from "react"
import Styles from "./index.css"

export default class ProfileCard extends Component {  
    
  static propTypes = {
    imagePath: PropTypes.string.isRequired,
  };  
    
  constructor(props) {
    super(props)
    this.state = this.initState(props)
  }
  componentWillReceiveProps(nextProps) {
    this.setState(this.initState(nextProps))
  }
  shouldComponentUpdate(nextProps) {       
    return nextProps.imagePath !== this.state.imagePath
         || nextProps.title !== this.state.title
         || nextProps.subtitle !== this.state.subtitle
         || nextProps.location !== this.state.location
  }   
  initState(props) {
    return {
      imagePath : props.imagePath,
      title : props.title,
      subtitle: props.subtitle,
      location:props.location,
    }
  }
  render() {    
    const imageName = this.state.imagePath
    return (
      <div className={ Styles.profileCard }  >       
         <img className={ Styles.picture }  
           alt={ imageName }  
           src={ this.state.imagePath } 
         />
         <div>
            { this.state.title && <h1>{ this.state.title } </h1> }
            { this.state.subtitle &&  <h2>{ this.state.subtitle } </h2> }
            { this.state.location &&  <span>{ this.state.location } </span> }
         </div>        
      </div>
    )
  }
}
