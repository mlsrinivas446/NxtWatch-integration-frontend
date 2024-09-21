import styled from 'styled-components'

export const ListItemContainer = styled.li`
  list-style-type: none;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  margin: 8px;
  width: 90vw;
  height: 50vh;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px darkgray;
  }

  @media screen and (min-width: 576px) {
    width: 40vw;
    height: 60vh;
    margin-left: 30px;
  }
  @media screen and (min-width: 768px) {
    width: 35vw;
    height: 60vh;
    margin: 10px;
    margin-left: 30px;
  }
  @media screen and (min-width: 992px) {
    width: 24vw;
    height: 55vh;
    margin-left: 25px;
  }
`

export const ThumbnillImage = styled.img`
  width: 100%;
  height: 30vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;

  @media screen and (min-width: 576px) {
    height: 25vh;
  }
  @media screen and (min-width: 768px) {
    height: 28vh;
  }
  @media screen and (min-width: 992px) {
    height: 25vh;
  }
`

export const ThumbnillContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px;
`

export const ThumbnillTitleBatchViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const ThumbnillProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 8px;
  margin-top: 8px;
  border-radius: 50%;
`

export const ThumbnillTitle = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`

export const ThumbnillBatchName = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
  padding-top: 3px;
  color: #94a3b8;
`

export const ThumbnillViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  color: #94a3b8;
`

export const ViewsCount = styled.p`
  color: #94a3b8;
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`

export const Dot = styled.p`
  color: #94a3b8;
  font-size: 14px;
  padding-bottom: 9px;
  margin: 7px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`