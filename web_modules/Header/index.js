import React, { Component } from "react"
import { Link } from "react-router"
import { WebIcon } from "web-icon"

import styles from "./index.css"
import SVG from "react-svg-inline"
import twitterSVG from "../icons/iconmonstr-twitter-1.svg"
import gitHubSVG from "../icons/iconmonstr-github-1.svg"

export default class Header extends Component {

  render() {
    const links = [ {
      name: "GitHub",
      href: "https://github.com/nlarche",
      url: "https://github.com"
    },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/nicolas-larch%C3%A9-37214971",
        url: "https://www.linkedin.com"
      },
      {
        name: "Viadeo",
        href: "http://www.viadeo.com/p/0021a8g8aolzlzuk?viewType=main",
        url: "http://www.viadeo.com"
      } ]
    return (
            <header className={ styles.header }>
                <nav className={ styles.nav }>
                    <div className={ styles.navPart1 }>
                        <Link
                          className={ styles.link }
                          to="/"
                            >
                            { "Home" }
                        </Link>
                        <Link
                          className={ styles.link }
                          to="/experience"
                            >
                            { "Expérience" }
                        </Link>

                    </div>
                    <div className={ styles.navPart2 }>
                        { links.map((link) => 
                             <a
                               href={ link.href }
                               className={ styles.link }                               
                            >
                            <WebIcon url={ link.url } noLink={ true } grayscale={ true } />
                            { link.name }
                        </a>
                         ) }                       
                    </div>
                </nav>
            </header>
        )
  }
}
