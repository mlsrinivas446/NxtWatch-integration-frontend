import axios from 'axios'
import Cookies from 'js-cookie'
import React, {useEffect, useContext, useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaCircleUser} from 'react-icons/fa6'

import {IoIosLogOut, IoMdClose, IoMdMenu, IoMdMoon} from 'react-icons/io'
import {IoSunnyOutline} from 'react-icons/io5'

import SideBarNavItems from '../SideBarNavItems'
import ReactContext from '../../context/ReactContext'

import {
  CloseButton,
  ContactButton,
  ContactImage,
  HambergerIcon,
  HeaderContainer,
  MenuContainer,
  LogoutButton,
  MobileLogoutButton,
  MobileRoutesContainer,
  PopupLogoutContainer,
  PopupText,
  ThemeButton,
  WebsiteButton,
  WebsiteLogo,
  PopupUserDetailsContainer,
  ProfileDetailsContainer,
  ProfileLabelInfo,
} from './headerStyledComponent'
import './index.css'

const Header = props => {
  const {history} = props
  const {changeThemeMode, isDarkMode, menuList} = useContext(ReactContext)
  const [user, setUser] = useState(null)
  const jwtToken = Cookies.get('jwt_token')

  useEffect(() => {
    const fetchProfileData = async () => {
      const url = 'http://localhost:5000/myprofile'
      const options = {
        headers: {
          authorization: jwtToken,
        },
      }
      try {
        const response = await axios.get(url, options)
        const userDetails = response.data
        setUser(userDetails)
      } catch (error) {
      if (error.code === 'ECONNRESET') {
        console.log('Connection reset. Retrying...');
        fetchProfileData()
      } else {
        console.error('Error fetching profile data:', error)
      }
    }
  }

    if (jwtToken) {
      fetchProfileData()
    } else {
      history.replace('/login')
    }
  }, [jwtToken, history])

  const onConfirmLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const changeTheme = () => {
    changeThemeMode()
  }

  const themeImage = isDarkMode ? (
    <IoSunnyOutline className="theme-light-icons" />
  ) : (
    <IoMdMoon className="theme-dark-icons" />
  )

  const hambergerIcon = isDarkMode ? (
    <IoMdMenu className="hamberger-icon theme-light-icons" />
  ) : (
    <IoMdMenu className="hamberger-icon theme-dark-icons" />
  )

  const navToHome = () => {
    history.replace('/')
  }

  const logoImgUrl = isDarkMode ? (
    <Link to="/" className="link">
      <WebsiteButton onClick={navToHome}>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
          alt="website logo"
        />
      </WebsiteButton>
    </Link>
  ) : (
    <Link to="/" className="link">
      <WebsiteButton onClick={navToHome}>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </WebsiteButton>
    </Link>
  )

  return (
    <HeaderContainer isDarkMode={isDarkMode}>
      {logoImgUrl}
      <MenuContainer>
        <ThemeButton onClick={changeTheme}>{themeImage}</ThemeButton>
        <Popup
          trigger={
            <ContactButton>
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ContactButton>
          }
          position="bottom right"
        >
          <PopupUserDetailsContainer isDarkMode={isDarkMode}>
            <FaCircleUser className="profile-icon" />
            <ProfileDetailsContainer isDarkMode={isDarkMode}>
              <ProfileLabelInfo isDarkMode={isDarkMode}>
                {user?.username || 'User'}
              </ProfileLabelInfo>
            </ProfileDetailsContainer>
            <ProfileDetailsContainer isDarkMode={isDarkMode}>
              <ProfileLabelInfo isDarkMode={isDarkMode}>
                {user?.email || 'email'}
              </ProfileLabelInfo>
            </ProfileDetailsContainer>
            <ProfileDetailsContainer isDarkMode={isDarkMode}>
              <ProfileLabelInfo isDarkMode={isDarkMode}>
                {user?.location || 'location'}
              </ProfileLabelInfo>
            </ProfileDetailsContainer>
          </PopupUserDetailsContainer>
        </Popup>
        <Popup
          trigger={
            <HambergerIcon isDarkMode={isDarkMode}>
              {hambergerIcon}
            </HambergerIcon>
          }
          className="popup-content"
          position="bottom right"
        >
          {close => (
            <MobileRoutesContainer isDarkMode={isDarkMode}>
              <CloseButton
                data-testid="close"
                onClick={() => close()}
                isDarkMode={isDarkMode}
              >
                <IoMdClose />
              </CloseButton>

              {menuList.map(each => (
                <SideBarNavItems
                  key={each.id}
                  linkDetails={each}
                  menuLogo={<each.logo />}
                />
              ))}
            </MobileRoutesContainer>
          )}
        </Popup>
        <Popup
          modal
          trigger={
            <LogoutButton
              isDarkMode={isDarkMode}
              color="#3b82f6"
              border="#3b82f6"
            >
              Logout
            </LogoutButton>
          }
          className="popup-content"
          position="bottom-left"
        >
          {close => (
            <PopupLogoutContainer isDarkMode={isDarkMode}>
              <PopupText isDarkMode={isDarkMode}>
                Are you sure you want to logout?
              </PopupText>
              <div className="popup-button-container">
                <LogoutButton
                  color="#7e858e"
                  border="#7e858e"
                  onClick={() => close()}
                >
                  Cancel
                </LogoutButton>
                <LogoutButton
                  bgColor="#3b82f6"
                  color="#ffffff"
                  border="#3b82f6"
                  onClick={onConfirmLogout}
                >
                  Confirm
                </LogoutButton>
              </div>
            </PopupLogoutContainer>
          )}
        </Popup>
        <Popup
          modal
          trigger={
            <MobileLogoutButton
              isDarkMode={isDarkMode}
              className="mobile-logout-button"
            >
              <IoIosLogOut />
            </MobileLogoutButton>
          }
          className="popup-content"
          position="bottom-left"
        >
          {close => (
            <PopupLogoutContainer isDarkMode={isDarkMode}>
              <PopupText isDarkMode={isDarkMode}>
                Are you sure you want to logout?
              </PopupText>
              <div className="popup-button-container">
                <LogoutButton
                  color="#7e858e"
                  border="#7e858e"
                  onClick={() => close()}
                >
                  Cancel
                </LogoutButton>

                <LogoutButton
                  bgColor="#3b82f6"
                  color="#ffffff"
                  border="#3b82f6"
                  onClick={onConfirmLogout}
                >
                  Confirm
                </LogoutButton>
              </div>
            </PopupLogoutContainer>
          )}
        </Popup>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default withRouter(Header)
