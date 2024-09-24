import React, {Component} from "react"
import {RiMenuAddFill} from "react-icons/ri"
import TrendingCardItem from "../TrendingCardItem"
import EmptySavedVideosView from "../EmptySavedVideosView"
import ReactContext from "../../context/ReactContext"

import {
  SavedContainer,
  SavedIconContainer,
  SavedContentContainer,
  SavedIcon,
  ImageIcon,
  SavedHeading,
  SavedUnorderedListContainer,
} from "./savedStyledComponent"

class SavedVideos extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode, savedList} = value

          return (
            <SavedContainer isDarkMode={isDarkMode} data-testid="savedVideos">
              <SavedContentContainer isDarkMode={isDarkMode}>
                {savedList.length === 0 ? (
                  <EmptySavedVideosView />
                ) : (
                  <>
                    <SavedIconContainer isDarkMode={isDarkMode}>
                      <SavedIcon isDarkMode={isDarkMode}>
                        <ImageIcon isDarkMode={isDarkMode}>
                          <RiMenuAddFill />
                        </ImageIcon>
                      </SavedIcon>
                      <SavedHeading isDarkMode={isDarkMode}>
                        Saved Videos
                      </SavedHeading>
                    </SavedIconContainer>
                    <SavedUnorderedListContainer>
                      {savedList.map(each => (
                        <TrendingCardItem
                          key={each.id}
                          trendingCardItem={each}
                        />
                      ))}
                    </SavedUnorderedListContainer>
                  </>
                )}
              </SavedContentContainer>
            </SavedContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default SavedVideos
