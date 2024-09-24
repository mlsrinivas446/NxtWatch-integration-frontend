import styled from "styled-components"

export const TrendingItem = styled.li`
  width: 90vw;
  max-height: 70vh;
  list-style-type: none;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px darkgray;
  }

  @media screen and (min-width: 576px) {
    width: 40vw;
    margin-left: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 80vw;
    height: 30vh;
    display: flex;
    margin-left: 0px;
  }
  @media screen and (min-width: 992px) {
    width: 70vw;
    display: flex;
    align-items: center;
  }
`

export const TrendingImg = styled.img`
  width: 90vw;
  height: 30vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media screen and (min-width: 576px) {
    width: 40vw;
    height: 35vh;
  }
  @media screen and (min-width: 768px) {
    border-top-left-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
    max-width: 30vw;
    height: 30vh;
  }
  @media screen and (min-width: 992px) {
    max-width: 25vw;
  }
`

export const TrendingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
`

export const TrendingTitle = styled.h1`
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#1e293b")};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`

export const BreakElement = styled.br`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ViewsYearContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const IbChannelText = styled.p`
  color: #94a3b8;
  font-size: 15px;
`

export const ViewsCount = styled.p`
  color: #94a3b8;
  font-size: 15px;
`

export const PublishedAt = styled.p`
  color: #94a3b8;
  font-size: 15px;
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
