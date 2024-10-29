import React, {Component} from "react"
import Loader from "react-loader-spinner"
import axios from "axios"

import {IoMdClose, IoMdSearch} from "react-icons/io"
import HomeVideoItem from "../HomeVideoItem"
import ReactContext from "../../context/ReactContext"

import ApiFailureView from "../ApiFailureView"
import EmptyResultsView from "../EmptyResultsView"

import "./index.css"

import {
  HomeContainer,
  HomeCardContentContainer,
  UnorderListItemsContainer,
  PremimunContainer,
  BannerDescription,
  GetItNowButton,
  CloseButton,
  VideoCardsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from "./homeStyledComponent"

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  progress: "IN_PROGRESS",
}

class Home extends Component {
  state = {
    searchInput: "",
    banner: true,
    search: "",
    videoList: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getVideosListApi()
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
    }
  }

  getVideosListApi = async () => {
    this.setState({apiStatus: apiConstants.progress})

    //const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${process.env.REACT_APP_HOME_VIDEOS_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    const url = 'https://nxtwatch-backend.onrender.com/api/home'
    try {
      const response = await axios.get(url)

      if (response.status === 200) {
        this.setState({
          videoList: response.data,
          apiStatus: apiConstants.success,
        })
      } else if (response.status === 401) {
        this.setState({apiStatus: apiConstants.failure})
      } else {
        this.setState({apiStatus: apiConstants.failure})
      }
    } catch (error) {
      console.error("Error fetching videos:", error)
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  hideBanner = () => {
    this.setState({banner: false})
  }

  setSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchFilter = () => {
    const {searchInput} = this.state
    const searchLowerCase = searchInput.toLowerCase()

    this.setState(prevState => ({
      videoList: prevState.videoList.filter(each =>
        each.title.toLowerCase().includes(searchLowerCase),
      ),
    }))
  }

  onRetryEmptyResults = () => {
    this.setState({searchInput: ""}, this.getVideosListApi)
  }

  bannerContainer = () => {
    const {banner} = this.state

    return banner ? (
      <PremimunContainer data-testid="banner">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="website-logo"
          />
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <GetItNowButton type="button">GET IT NOW</GetItNowButton>
        </div>
        <CloseButton onClick={this.hideBanner} data-testid="close">
          <IoMdClose />
        </CloseButton>
      </PremimunContainer>
    ) : null
  }

  getVideoCardList = () => {
    const {videoList} = this.state

    return (
      <UnorderListItemsContainer>
        {videoList.map(each => (
          <HomeVideoItem key={each.id} videoItem={each} />
        ))}
      </UnorderListItemsContainer>
    )
  }

  onApiRetry = () => {
    this.getVideosListApi()
  }

  render() {
    const {searchInput} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
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
            const {videoList} = this.state
            return (
              <>
                {this.bannerContainer()}
                <VideoCardsContainer>
                  <SearchContainer data-testid="searchButton">
                    <SearchInput
                      type="search"
                      onChange={this.setSearchInput}
                      data-testid="searchButton"
                      value={searchInput}
                    />
                    <SearchButton
                      onClick={this.onSearchFilter}
                      data-testid="searchButton"
                    >
                      <IoMdSearch />
                    </SearchButton>
                  </SearchContainer>

                  {videoList.length === 0 ? (
                    <EmptyResultsView
                      onRetryEmptyResults={this.onRetryEmptyResults}
                    />
                  ) : (
                    this.getVideoCardList()
                  )}
                </VideoCardsContainer>
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
            <HomeContainer isDarkMode={isDarkMode}>
              <HomeCardContentContainer>
                {renderApiViews()}
              </HomeCardContentContainer>
            </HomeContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home
