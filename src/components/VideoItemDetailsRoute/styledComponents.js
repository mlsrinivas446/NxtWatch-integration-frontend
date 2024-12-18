import styled from "styled-components"

export const VideoItemDetailsContainer = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: ${props => (props.isDarkMode ? "#181818" : "#f9f9f9")};
  display: flex;
  flex-direction: column;
  margin-left: auto;
  overflow: scroll;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`

export const VideoItemCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    align-self: flex-end;
    width: 85vw;
  }
`

export const VideoItemContentContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`

export const VideoItemDetailedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? "#ffffff" : "#181818")};
  font-size: 15px;

  @media screen and (min-width: 576px) {
    font-size: 17px;
  }

  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`

export const VideoItemDetailDescription = styled.div`
  color: #1e293b;
  font-size: 15px;

  @media screen and (min-width: 576px) {
    color: #1e293b;
    font-size: 17px;
  }

  @media screen and (min-width: 992px) {
    color: #1e293b;
    font-size: 20px;
  }
`

export const ThumbnillViewsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewsCount = styled.p`
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`

export const ReviewsLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LikesDisLikesSaveContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${props => (props.like ? "#2563eb" : "#64748b")};
`

export const DislikeButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${props => (props.disLike ? "#2563eb" : "#64748b")};
`

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${props => (props.isSaved ? "#2563eb" : "#64748b")};
`

export const LikeText = styled.p`
  color: ${props => (props.like ? "#2563eb" : "#64748b")};
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`

export const DislikeText = styled.p`
  color: ${props => (props.disLike ? "#2563eb" : "#64748b")};
  font-size: 13px;
  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`

export const SaveText = styled.p`
  color: ${props => (props.isSaved ? "#2563eb" : "#64748b")};
  font-size: 13px;

  @media screen and (min-width: 992px) {
    font-size: 15px;
    padding-left: 5px;
  }
`

export const HorizontalLine = styled.hr`
  width: 90vw;
  color: #475569;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`

export const TeamIbContainer = styled.div`
  display: flex;
`

export const TeamLogoImage = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 10px;
  border-radius: 50%;
`

export const TeamContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`

export const IbText = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#94a3b8")};
`

export const Description = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#94a3b8")};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Dot = styled.p`
  color: ${props => (props.isDarkMode ? "#ffffff" : "#475569")};
  font-size: 14px;
  padding-bottom: 9px;
  margin: 7px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`
export const FormattedDate = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#94a3b8')};
  font-weight: 500;
`