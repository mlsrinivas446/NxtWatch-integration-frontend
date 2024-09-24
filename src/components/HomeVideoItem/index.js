import React from "react"
import {Link} from "react-router-dom"
import {formatDistanceToNow} from "date-fns"
import {
  ListItemContainer,
  ThumbnillImage,
  ThumbnillContentContainer,
  ThumbnillProfileImage,
  ThumbnillTitleBatchViewContainer,
  ThumbnillTitle,
  ThumbnillBatchName,
  ThumbnillViewsContainer,
  ViewsCount,
  Dot,
} from "./styledComponents"

import ReactContext from "../../context/ReactContext"

import "./index.css"

function VideoItem(props) {
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value

        const {videoItem} = props

        const {
          name,
          profileImageUrl,
          id,
          publishedAt,
          thumbnailUrl,
          title,
          viewCount,
        } = videoItem
        const publishedDate = new Date(publishedAt)
        const formattedDate = formatDistanceToNow(publishedDate)

        function formatNumberToK(num) {
          if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}k`
          }
          return num
        }

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItemContainer isDarkMode={isDarkMode}>
              <ThumbnillImage src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnillContentContainer>
                <div>
                  <ThumbnillProfileImage
                    src={profileImageUrl}
                    alt="channel logo"
                  />
                </div>
                <ThumbnillTitleBatchViewContainer>
                  <ThumbnillTitle isDarkMode={isDarkMode}>
                    {title}
                  </ThumbnillTitle>
                  <ThumbnillBatchName isDarkMode={isDarkMode}>
                    {name}
                  </ThumbnillBatchName>

                  <ThumbnillViewsContainer>
                    <ViewsCount>{formatNumberToK(viewCount)} views</ViewsCount>
                    <Dot className="dot">.</Dot>
                    <ViewsCount>{formattedDate}</ViewsCount>
                  </ThumbnillViewsContainer>
                </ThumbnillTitleBatchViewContainer>
              </ThumbnillContentContainer>
            </ListItemContainer>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default VideoItem
