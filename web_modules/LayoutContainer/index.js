import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import ga from "react-google-analytics"

import Header from "../Header"
import Footer from "../Footer"

import styles from "./index.css"

const GoogleAnalyticsInitiailizer = ga.Initializer
const isProduction = process.env.NODE_ENV === "production"
const isClient = typeof window !== "undefined"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  componentWillMount() {
    if (isClient) {
      const { pkg } = this.context.metadata
      if (isProduction) {
        ga("create", pkg.googleAnalyticsUA, "auto")
        ga("send", "pageview")
      } 
      else {
        console.log("create", pkg.googleAnalyticsUA, "auto")
        console.info("New pageview", window.location.href)
      }
    }
  }
  render() {
    const {
            pkg,
        } = this.context.metadata

    return (
            <div className={ styles.layout }>
                <Helmet
                  meta={ [
                        { property: "og:site_name", content: pkg.name },
                        { name: "twitter:site", content: `@${pkg.twitter}` },
                  ] }
                />
                <Header />
                <div className={ styles.content }>
                    { this.props.children }
                </div>
                <Footer />
                <GoogleAnalyticsInitiailizer />
            </div>
        )
  }
}
