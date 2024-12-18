import React, {Component} from "react"
import ReactPlayer from "react-player"
import {Helmet} from 'react-helmet'
import Loader from "react-loader-spinner"
import moment from "moment"

import axios from "axios"
import {BiLike, BiDislike} from "react-icons/bi"
import {RiMenuAddFill} from "react-icons/ri"
import ApiFailureView from "../ApiFailureView"
import ReactContext from "../../context/ReactContext"
import {
  VideoItemDetailsContainer,
  VideoItemDetailedCardContainer,
  VideoItemDetailDescription,
  ThumbnillViewsContainer,
  ViewsCount,
  ReviewsLikesContainer,
  LikesDisLikesSaveContainer,
  LikeButton,
  DislikeButton,
  SaveButton,
  LikeText,
  DislikeText,
  SaveText,
  HorizontalLine,
  TeamIbContainer,
  TeamLogoImage,
  TeamContentContainer,
  IbText,
  Description,
  VideoTitle,
  VideoItemContentContainer,
  FormattedDate,
} from './styledComponents'

import "./index.css"

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  progress: "IN_PROGRESS",
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoItemDetails: "",
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiConstants.success})

    const url = `https://nxtwatch-backend.onrender.com/api/video-details/${id}`

    try {
      const response = await axios.get(url)
      console.log(response)

      if (response.status === 200) {


        this.setState({
          videoItemDetails: response.data,
          apiStatus: apiConstants.success,
        })
      } else if (response.status === 401) {
        this.setState({apiStatus: apiConstants.failure})
      } else {
        this.setState({apiStatus: apiConstants.failure})
      }
    } catch (err) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onSaveChange = onSaveCallback => {
    const {videoItemDetails} = this.state
    const updatedIsSaved = !videoItemDetails.isSaved

    this.setState(
      {
        videoItemDetails: {
          ...videoItemDetails,
          isSaved: updatedIsSaved,
        },
      },
      () => {
        onSaveCallback(videoItemDetails)
      },
    )
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {videoItemDetails} = this.state
          const {
            name,
            description,
            id,
            publishedAt,
            title,
            videoUrl,
            viewCount,
            isSaved,
            isLike,
            isDisLike,
            thumbnailUrl,
          } = videoItemDetails

          const {isDarkMode, onSave} = value

          const onLikeFun = () => {
            const updatedIsLike = !videoItemDetails.isLike

            const updatedIsDisLike = updatedIsLike
              ? false
              : videoItemDetails.isDisLike

            this.setState({
              videoItemDetails: {
                ...videoItemDetails,
                isLike: updatedIsLike,
                isDisLike: updatedIsDisLike,
              },
            })
          }

          const onDislikeFun = () => {
            const updatedIsLike = !videoItemDetails.isDisLike
            const updatedIsDisLike = updatedIsLike
              ? false
              : videoItemDetails.isLike

            this.setState({
              videoItemDetails: {
                ...videoItemDetails,
                isLike: updatedIsDisLike,
                isDisLike: updatedIsLike,
              },
            })
          }

          const onSaveFun = () => {
            this.onSaveChange(onSave)
          }

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkMode ? "#ffffff" : "#0b69ff"}
                height="50"
                width="50"
                data-testid="loader"
              />
            </div>
          )

          const renderFailureView = () => (
            <ApiFailureView onApiRetry={this.onApiRetry} />
          )

          const renderSuccessView = () => {
            const someDate = moment(publishedAt)
            const formattedDate = someDate.format('DD MMMM, YYYY')

            function formatNumberToK(num) {
              if (num >= 1000) {
                return `${(num / 1000).toFixed(1)}k`
              }
              return num
            }

            return (
              <VideoItemDetailedCardContainer key={id}>
                <Helmet>
                  <title>Nxtwatch Video Details</title>
                </Helmet>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url={videoUrl}
                    width="100%"
                    height="100%"
                  />
                </div>
                <VideoItemDetailDescription isDarkMode={isDarkMode}>
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                  <ReviewsLikesContainer>
                    <ThumbnillViewsContainer>
                      <ViewsCount isDarkMode={isDarkMode}>
                        {formatNumberToK(viewCount)} views
                      </ViewsCount>
                    </ThumbnillViewsContainer>
                    <LikesDisLikesSaveContainer>
                      <LikeButton
                        type="button"
                        onClick={onLikeFun}
                        like={isLike}
                      >
                        <BiLike />
                        <LikeText like={isLike}>Like</LikeText>
                      </LikeButton>
                      <DislikeButton
                        type="button"
                        onClick={onDislikeFun}
                        disLike={isDisLike}
                      >
                        <BiDislike />
                        <DislikeText disLike={isDisLike}>Dislike</DislikeText>
                      </DislikeButton>
                      <SaveButton
                        type="button"
                        onClick={onSaveFun}
                        isSaved={isSaved}
                      >
                        <RiMenuAddFill />
                        <SaveText isSaved={isSaved}>
                          {isSaved ? 'Saved' : 'Save'}
                        </SaveText>
                      </SaveButton>
                    </LikesDisLikesSaveContainer>
                  </ReviewsLikesContainer>
                  <HorizontalLine />
                  <TeamIbContainer>
                    <TeamLogoImage src={thumbnailUrl} alt="channel logo" />
                    <TeamContentContainer>
                      <IbText isDarkMode={isDarkMode}>{name}</IbText>
                      <FormattedDate isDarkMode={isDarkMode}>
                        {formattedDate}
                      </FormattedDate>
                      <Description isDarkMode={isDarkMode}>
                        {description}
                      </Description>
                    </TeamContentContainer>
                  </TeamIbContainer>
                </VideoItemDetailDescription>
              </VideoItemDetailedCardContainer>
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
            <VideoItemDetailsContainer isDarkMode={isDarkMode}>
              <VideoItemContentContainer>
                {renderApiViews()}
              </VideoItemContentContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
