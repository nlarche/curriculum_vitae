import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { WebIconList } from "web-icon"
import  ProfileCard  from "../../ProfileCard"

export default class Home extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    __filename: PropTypes.string.isRequired,
    __url: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
    body: PropTypes.string.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };
  
  constructor(props) {
    super(props)
    this.state = { icons: this.splitIconsFromHead(props.head) }
  }  
  componentWillReceiveProps(nextProps) {
      
    this.setState({ icons: this.splitIconsFromHead(nextProps.head) })
  }
  splitIconsFromHead(head) {
    return head.icons && head.icons.split(",")
  }
  render() {
    const {
      pkg,
    } = this.context.metadata

    const {
      __filename,
      __url,
      head,
      body,
    } = this.props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]
    
    const {
        imagePath,
        texteTitle, 
        subtitle,
        location,        
        } = head
    
    return (
      <div>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />       
        {
          imagePath &&
          <ProfileCard            
            imagePath={ imagePath }
            title={ texteTitle }
            subtitle={ subtitle }
            location={ location }
          />
        }
         {
          this.state.icons &&
           <WebIconList websites={ this.state.icons } />
        }   
         <div
           dangerouslySetInnerHTML={ { __html: body } }
         />        
        { this.props.children }
      </div>
    )
  }
}
