import styled from "styled-components"

export const SavedContainer = styled.div`
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

export const SavedCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    margin-top: 10vh;
    width: 85vw;
  }
`

export const SavedIconContainer = styled.div`
  height: 8vh;
  width: 100vw;
  background-color: ${props => (props.isDarkMode ? "#313131" : "#f1f1f1")};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 576px) {
    height: 10vh;
    width: 100vw;
  }
  @media screen and (min-width: 768px) {
    height: 15vh;
    width: 85vw;
  }
`

export const SavedContentContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-top: 0px;
    display: block;
  }
`

export const SavedIcon = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkMode ? "#231f20" : "#cbd5e1")};
  @media screen and (min-width: 576px) {
    height: 40px;
    width: 40px;
  }
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`

export const ImageIcon = styled.p`
  font-size: 23px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const SavedHeading = styled.h1`
  font-size: 25px;
  padding-left: 10px;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#212121")};
`

export const SavedUnorderedListContainer = styled.ul`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: auto;
  margin: auto;
  flex-wrap: wrap;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 85vw;
  }
`
