import styled from "styled-components"

export const GameingItem = styled.li`
  list-style-type: none;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  margin: 10px;
  padding:0;
  width: 90vw;
  height: 40vh;
  border-radius: 5px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px darkgray;
  }

  @media screen and (min-width: 576px) {
    width: 35vw;
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

export const GameingImg = styled.img`
  height: 30vh;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
  height: 70%;
`

export const GameingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  height: 30%;
  object-fit: fit;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const GamingTitle = styled.h1`
  color: ${props => (props.isDarkMode ? "#ffffff" : "#1e293b")};
  font-size: 13px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`

export const ChannelName = styled.p`
  color: #94a3b8;
  font-size: 13px;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
