import React from "react"
import {Helmet} from 'react-helmet'
import SideBarNavComponent from "../SideBarNavComponent"

import ReactContext from "../../context/ReactContext"

import {
  TrendingContainer,
  TrendingCardContainer,
  TrendingContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from "./styledComponents"

function NotFound() {
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value

        const notImage = isDarkMode
          ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
          : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"

        return (
          <TrendingContainer isDarkMode={isDarkMode}>
            <Helmet>
              <title>Nxtwatch Page not found</title>
            </Helmet>
            <TrendingCardContainer>
              <SideBarNavComponent />
              <TrendingContentContainer isDarkMode={isDarkMode}>
                <NotFoundImage src={notImage} alt="not found" />
                <NotFoundHeading isDarkMode={isDarkMode}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundDescription isDarkMode={isDarkMode}>
                  we are sorry, the page you requested could not be found.
                </NotFoundDescription>
              </TrendingContentContainer>
            </TrendingCardContainer>
          </TrendingContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default NotFound
