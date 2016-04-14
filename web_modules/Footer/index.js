import React, { Component } from "react"
import { Link } from "react-router"
import { WebIcon } from "web-icon"

import styles from "./index.css"

export default class Footer extends Component {

  render() {
    return (
      <footer className={ styles.footer }>
        <a
          href="http://moox.io/statinamic/"
          className={ styles.link }
        >
          { "Powered by " }
          <span className={ styles.reference }>
            {  "<Statinamic />" }
          </span>
        </a>
         <WebIcon url={ "https://facebook.github.io/react" } />   
         <span>
            <Link to={ "/en/" }>
                { "English" }
                </Link>
                { " | " }
            <Link to={ "/fr/" }>
                { "Français" }
            </Link>
          </span>
      </footer>
    )
  }
}
