import axios from "axios"
import React, {Component} from "react"
import {IoLogoGameControllerB} from "react-icons/io"
import Loader from "react-loader-spinner"
import ReactContext from "../../context/ReactContext"
import ApiFailureView from "../ApiFailureView"
import GamingCardItem from "../GamingCardItem"

import {
  GamesContainer,
  GamesContentContainer,
  GamesHeading,
  GamesIcon,
  GamesIconContainer,
  GamesUnorderListContainer,
  ImageIcon,
} from "./gamesStyledComponent"

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  progress: "IN_PROGRESS",
}

class Gaming extends Component {
  state = {
    trendingList: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({apiStatus: apiConstants.progress})

    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLiZN0Fd_jMqemqNeeFfV6Tc8OZ3sXAgkZ&key=AIzaSyB2kPZq_q_ju7SBl2dpp61zzxpjhjROkX0&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

    try {
      const response = await axios.get(url)

      if (response.status === 200) {
        const formatTrendingData = response.data.items.map(each => ({
          name: each?.snippet?.channelTitle,
          profileImageUrl: each?.snippet?.thumbnails?.high?.url,
          id: each?.snippet?.resourceId.videoId,
          publishedAt: each?.snippet?.publishedAt,
          thumbnailUrl: each?.snippet?.thumbnails?.high?.url,
          title: each?.snippet?.title,
          isSaved: false,
        }))

        this.setState({
          trendingList: formatTrendingData,
          apiStatus: apiConstants.success,
        })
      } else {
        this.setState({apiStatus: apiConstants.failure})
      }
    } catch (error) {
      console.error("Error fetching videos:", error)
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onApiRetry = () => {
    this.getTrendingList()
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const renderLoadingView = () => (
            <div className="loader-container">
              <Loader
                type="ThreeDots"
                color={isDarkMode ? "#ffffff" : "#0b69ff"}
                height="50"
                width="50"
              />
            </div>
          )

          const renderFailureView = () => (
            <ApiFailureView onApiRetry={this.onApiRetry} />
          )

          const renderSuccessView = () => {
            const {trendingList} = this.state
            return (
              <>
                {trendingList.map(each => (
                  <GamingCardItem key={each.id} trendingCardItem={each} />
                ))}
              </>
            )
          }

          const renderApiViews = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiConstants.success:
                return renderSuccessView()
              case apiConstants.failure:
                return renderFailureView()
              case apiConstants.progress:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <GamesContainer isDarkMode={isDarkMode}>
              <GamesContentContainer isDarkMode={isDarkMode}>
                <GamesIconContainer isDarkMode={isDarkMode}>
                  <GamesIcon isDarkMode={isDarkMode}>
                    <ImageIcon isDarkMode={isDarkMode}>
                      <IoLogoGameControllerB />
                    </ImageIcon>
                  </GamesIcon>
                  <GamesHeading isDarkMode={isDarkMode}>Gaming</GamesHeading>
                </GamesIconContainer>
                <GamesUnorderListContainer>
                  {renderApiViews()}
                </GamesUnorderListContainer>
              </GamesContentContainer>
            </GamesContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Gaming
