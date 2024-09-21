import axios from 'axios'
import React, {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import TrendingCardItem from '../TrendingCardItem'
import ApiFailureView from '../ApiFailureView'
import ReactContext from '../../context/ReactContext'
import {
  ImageIcon,
  TrandingHeading,
  TrendingContainer,
  TrendingIcon,
  TrendingIconContainer,
  TrendingUnorderListContainer,
} from './trendingStyledComponent'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({apiStatus: apiConstants.progress})

    const url =
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${process.env.REACT_APP_TRENDING_VIDEOS_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

    try {
      const response = await axios.get(url)

      if (response.status === 200) {
        const formatTrendingData = response.data.items.map(each => ({
          name: each?.snippet?.channelTitle,
          profileImageUrl: each?.snippet?.thumbnails?.high?.url,
          id: each?.id,
          publishedAt: each?.snippet?.publishedAt,
          thumbnailUrl: each?.snippet?.thumbnails?.high?.url,
          viewCount: each?.statistics?.viewCount,
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
      console.error('Error fetching videos:', error)
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onApiRetry = () => {
    this.getTrendingList()
  }

  render() {
    return (
      <ReactContext.Consumer>
        {({isDarkMode}) => {
          const renderLoadingView = () => (
            <div className="loader-container">
              <Loader
                type="ThreeDots"
                color={isDarkMode ? '#ffffff' : '#0b69ff'}
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
                  <TrendingCardItem key={each.id} trendingCardItem={each} />
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
            <TrendingContainer isDarkMode={isDarkMode} data-testid="trending">
              <TrendingIconContainer isDarkMode={isDarkMode}>
                <TrendingIcon isDarkMode={isDarkMode}>
                  <ImageIcon isDarkMode={isDarkMode}>
                    <HiFire />
                  </ImageIcon>
                </TrendingIcon>
                <TrandingHeading isDarkMode={isDarkMode}>
                  Trending
                </TrandingHeading>
              </TrendingIconContainer>
              <TrendingUnorderListContainer>
                {renderApiViews()}
              </TrendingUnorderListContainer>
            </TrendingContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Trending
