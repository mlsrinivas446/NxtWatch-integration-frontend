import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: ${props => (props.isDarkMode ? "#212121" : "#ffffff")};
  visibility: visible;
`

export const WebsiteLogo = styled.img`
  width: 13vw;
  height: 5vh;

  @media screen and (max-width: 576px) {
    width: 18vw;
    height: 5vh;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;
  @media screen and (min-width: 300px) {
    width: 50vw;
  }
  @media screen and (min-width: 478px) {
    width: 40vw;
  }
  @media screen and (min-width: 600px) {
    width: 30vw;
  }
  @media screen and (min-width: 768px) {
    width: 20vw;
  }
  @media screen and (min-width: 992px) {
    width: 18vw;
  }
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ContactButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#0f0f0f")};
  font-size: 30px;
`

export const ContactImage = styled.img`
  height: 30px;
  width: 30px;
`

export const HambergerIcon = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  border: ${props =>
    `2px solid ${props.isDarkMode ? "#ffffff" : props.border}`};
  background-color: ${props => (props.bgColor ? props.bgColor : "transparent")};
  color: ${props => (props.isDarkMode ? "#ffffff" : props.color)};
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  margin-left: 10px;
  display: none;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 8px;
    display: flex;
  }
`

export const CancelConfirmButton = styled.button`
  border: ${props =>
    `2px solid ${props.isDarkMode ? '#ffffff' : props.border}`};
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  color: ${props => (props.isDarkMode ? '#ffffff' : props.color)};
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 8px;
    display: flex;
  }
`



export const MobileLogoutButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#0f0f0f")};
  border-radius: 5px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupLogoutContainer = styled.div`
  width: 90vw;
  height: 30vh;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#f4f4f4')};

  @media screen and (min-width: 576px) {
    width: 60vw;
    height: 30vh;
  }

  @media screen and (min-width: 768px) {
    width: 40vw;
    height: 30vh;
  }
`

export const PopupText = styled.p`
  color: ${props => (props.isDarkMode ? "#ffffff" : "#231f20")};
  font-size: 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const WebsiteButton = styled.button`
  background-color: transparent;
  border: none;
`

export const MobileRoutesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? "#212121" : "#ffffff")};
  margin: 0px;
  margin-top: 7px;
  width: 60vw;
  padding: 0px;
  @media screen and (min-width: 576px) {
    width: 35vw;
  }
  @media screen and (min-width: 768px) {
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 20px;
  outline: none;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#212121")};
`

export const PopupUserDetailsContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? "#2c2c2c" : "#f7f8fc")};
  color: ${props => (props.isDarkMode ? "#ffffff" : "#212121")};
  height: auto;
  width: 60vw;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  margin: 0 auto;

  @media (min-width: 576px) {
    width: 40vw;
  }

  @media (min-width: 768px) {
    width: 40vw;
  }

  @media (min-width: 992px) {
    width: 30vw;
  }
`

export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid
    ${props => (props.isDarkMode ? "#3d3d3d" : "#e0e0e0")};

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ProfileLabelInfo = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkMode ? "#c7c7c7" : "#666")};
  margin: 0;
  padding-left: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ProfileIcon = styled.div`
  font-size: 40px;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#212121")};
  margin-bottom: 10px;
  align-self: center;

  @media (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 15px;
  }
`

export const PopupCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${props => (props.isDarkMode ? "#ffffff" : "#212121")};
  align-self: flex-end;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => (props.isDarkMode ? "#e0e0e0" : "#333")};
    transform: scale(1.1);
  }
`
