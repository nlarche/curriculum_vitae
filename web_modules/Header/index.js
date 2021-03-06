import React, { Component, PropTypes } from "react"
import { Link } from "react-router"
import { WebIcon } from "web-icon"
import getI18n from "../i18n/get"

import styles from "./index.css"

export default class Header extends Component {
   
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }      
    
  constructor(props) {
    super(props)
    // const i18n = getI18n(context)
  }
  render() {
      
    const i18n = getI18n(this.context)  
      
    const links = [
            { name: "GitHub", 
            href: "https://github.com/nlarche",
             url: "https://github.com", 
            },
            { name: "LinkedIn",
             href: "https://www.linkedin.com/in/nicolas-larch%C3%A9-37214971", 
             url: "https://www.linkedin.com", 
            },
            { name: "Viadeo", 
              href: "http://www.viadeo.com/p/0021a8g8aolzlzuk?viewType=main", 
              url: "http://www.viadeo.com", 
            } ]    
            
    return (
            <header className={ styles.header }>
                <nav className={ styles.nav }>
                    <div className={ styles.navPart1 }>
                        { i18n.navigation.map((item) => (
                          <Link
                            className={ styles.link }
                            to={ item.url } 
                            key={ item.url }  
                          >
                            { item.name }
                          </Link>
                        )) }
                    </div>
                    <div className={ styles.navPart2 }>
                        { links.map((link) =>
                            <span key={ links.indexOf(link) } >
                                <a
                                  href={ link.href }
                                  className={ styles.link }
                                >
                                    <WebIcon 
                                      url={ link.url } 
                                      noLink 
                                      grayscale 
                                    />
                                    <p className={ styles.linkName } >
                                    { link.name }
                                    </p>
                                </a>
                            </span>
                        ) }
                    </div>
                </nav>
            </header>
        )
  }
}
