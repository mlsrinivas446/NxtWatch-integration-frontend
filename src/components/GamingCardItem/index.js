import React from 'react'
import {Link} from 'react-router-dom'
import ReactContext from '../../context/ReactContext'

import {
  GameingItem,
  GameingImg,
  GameingDetailContainer,
  GamingTitle,
  ChannelName,
} from './styledComponent'

const GamingCardItem = props => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {trendingCardItem} = props

      const {id, thumbnailUrl, title, name} = trendingCardItem

      return (
        <Link to={`/videos/${id}`} className="link">
          <GameingItem isDarkMode={isDarkMode}>
            <GameingImg src={thumbnailUrl} alt="video thumbnail" />
            <GameingDetailContainer isDarkMode={isDarkMode}>
              <GamingTitle isDarkMode={isDarkMode}>{title}</GamingTitle>
              <ChannelName>{name}</ChannelName>
            </GameingDetailContainer>
          </GameingItem>
        </Link>
      )
    }}
  </ReactContext.Consumer>
)

export default GamingCardItem
