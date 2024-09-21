import {Switch, Route, withRouter} from 'react-router-dom'
import React, {Component} from 'react'

import {IoHomeSharp} from 'react-icons/io5'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddFill} from 'react-icons/ri'

import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import SideBarNavComponent from './components/SideBarNavComponent'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Games'
import SavedVideos from './components/SavedVideos'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFound from './components/NotFound'

import ReactContext from './context/ReactContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const menuItemsList = [
  {
    id: 'HOME',
    logo: IoHomeSharp,
    text: 'Home',
    linkText: '/',
  },
  {
    id: 'TRENDING',
    logo: HiFire,
    text: 'Trending',
    linkText: '/trending',
  },
  {
    id: 'GAMES',
    logo: IoLogoGameControllerB,
    text: 'Gaming',
    linkText: '/gaming',
  },
  {
    id: 'SAVEDVIDEOS',
    logo: RiMenuAddFill,
    text: 'Saved Videos',
    linkText: '/saved-videos',
  },
]

class App extends Component {
  state = {
    isDarkMode: false,
    menuList: [...menuItemsList],
    savedList: [],
    token: '',
  }

  changeThemeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  navMenuStyle = id => {
    this.setState(prevState => ({
      menuList: prevState.menuList.map(each => {
        if (each.id === id) {
          return {...each, isActive: !each.isActive}
        }
        return {...each, isActive: false}
      }),
    }))
  }

  onSave = videoItemDetails => {
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedList.some(
        item => item.id === videoItemDetails.id,
      )
      if (!isAlreadySaved) {
        return {
          savedList: [...prevState.savedList, videoItemDetails],
        }
      }
      return null
    })
  }

  setToken = (token) => {
    this.setState({token})
  }

  render() {
    const {isDarkMode, menuList, savedList, token} = this.state
    const {location} = this.props

    const showHeader =
      location.pathname !== '/login' && location.pathname !== '/register'

    return (
      <ReactContext.Provider
        value={{
          isDarkMode,
          changeThemeMode: this.changeThemeMode,
          menuList,
          navMenuStyle: this.navMenuStyle,
          onSave: this.onSave,
          savedList,
          token,
          setToken:this.setToken
        }}
      >
        {showHeader && <Header />}
        {showHeader && <SideBarNavComponent />}
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route component={NotFound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default withRouter(App)
