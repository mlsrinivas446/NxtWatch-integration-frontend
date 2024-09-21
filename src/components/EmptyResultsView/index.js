import React from 'react'
import ReactContext from '../../context/ReactContext'

import {
  EmptyContentContainer,
  EmptyImage,
  EmptyHeading,
  EmptyDescription,
  EmptyRetryButton,
} from './styledComponent'

const EmptyResultsView = (props) => (
  <ReactContext.Consumer>
    {value => {
      const { isDarkMode } = value
      const { onRetryEmptyResults } = props
  
      return (
        <EmptyContentContainer isDarkMode={isDarkMode}>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
            alt="no videos"
          />
          <EmptyHeading isDarkMode={isDarkMode}>
            No Search results found
          </EmptyHeading>
          <EmptyDescription isDarkMode={isDarkMode}>
            Try different key words or remove search filter
          </EmptyDescription>
          <EmptyRetryButton type="type" onClick={onRetryEmptyResults}>
            Retry
          </EmptyRetryButton>
        </EmptyContentContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default EmptyResultsView
