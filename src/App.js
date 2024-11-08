import {Switch, Route, withRouter} from 'react-router-dom'
import React, { Component, lazy, Suspense } from 'react'
import Loader from "react-loader-spinner"

import {IoHomeSharp} from 'react-icons/io5'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddFill} from 'react-icons/ri'

import Header from './components/Header'
import SideBarNavComponent from './components/SideBarNavComponent'
import ReactContext from './context/ReactContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const RegisterForm = lazy(() => import('./components/RegisterForm'))
const LoginForm = lazy(() => import('./components/LoginForm'))
const Home = lazy(() => import('./components/Home'))
const Trending = lazy(() => import('./components/Trending'))
const Gaming = lazy(() => import('./components/Games'))
const SavedVideos = lazy(() => import('./components/SavedVideos'))
const VideoItemDetailsRoute = lazy(() =>
  import('./components/VideoItemDetailsRoute'),
)
const NotFound = lazy(() => import('./components/NotFound'))

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

  setToken = token => {
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
          setToken: this.setToken,
        }}
      >
        {showHeader && <Header />}
        {showHeader && <SideBarNavComponent />}
        <Suspense
          fallback={
            <div
              className="loader-container"
              style={{
                display: 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
              }}
            >
              <Loader
                type="ThreeDots"
                color={isDarkMode ? '#ffffff' : '#0b69ff'}
                height="50"
                width="50"
              />
            </div>
          }
        >
          <Switch>
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetailsRoute}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ReactContext.Provider>
    )
  }
}

export default withRouter(App)
