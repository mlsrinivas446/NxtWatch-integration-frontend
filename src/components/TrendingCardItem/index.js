import React from "react"
import {formatDistanceToNow} from "date-fns"
import {Link} from "react-router-dom"
import ReactContext from "../../context/ReactContext"

import {
  TrendingItem,
  TrendingImg,
  TrendingDetailContainer,
  TrendingTitle,
  ViewsYearContainer,
  IbChannelText,
  ViewsCount,
  PublishedAt,
  Dot,
} from "./trendingItemStyledComponent"

function TrendingCardItem(props) {
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const {trendingCardItem} = props
        const {name, id, publishedAt, thumbnailUrl, title, viewCount} =
          trendingCardItem
        console.log(trendingCardItem)

        const distanceYear = formatDistanceToNow(new Date(publishedAt))

        function formatNumberToK(num) {
          if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}k`
          }
          return num
        }

        return (
          <Link to={`/videos/${id}`} className="link">
            <TrendingItem>
              <TrendingImg src={thumbnailUrl} alt={title} />
              <TrendingDetailContainer>
                <TrendingTitle isDarkMode={isDarkMode}>{title}</TrendingTitle>
                <IbChannelText>{name}</IbChannelText>
                <ViewsYearContainer>
                  <ViewsCount>{formatNumberToK(viewCount)} views</ViewsCount>
                  <Dot className="dot">.</Dot>
                  <PublishedAt>{distanceYear} ago</PublishedAt>
                </ViewsYearContainer>
              </TrendingDetailContainer>
            </TrendingItem>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default TrendingCardItem
