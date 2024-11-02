import React from "react"
import {Helmet} from 'react-helmet'
import ReactContext from "../../context/ReactContext"

import {
  ApiFailureContentContainer,
  ApiFailureImage,
  ApiFailureHeading,
  ApiFailureDescription,
  ApiFailureRetryButton,
} from "./styledComponents"

function NotFound(props) {
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const {onApiRetry} = props

        const onFailureRetry = () => {
          onApiRetry()
        }

        const notImage = isDarkMode
          ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"

        return (
          <ApiFailureContentContainer isDarkMode={isDarkMode}>
            <Helmet>
              <title>Nxtwatch API failure</title>
            </Helmet>
            <ApiFailureImage src={notImage} alt="failure view" />
            <ApiFailureHeading isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </ApiFailureHeading>
            <ApiFailureDescription isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again
            </ApiFailureDescription>
            <ApiFailureRetryButton type="button" onClick={onFailureRetry}>
              Retry
            </ApiFailureRetryButton>
          </ApiFailureContentContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default NotFound
