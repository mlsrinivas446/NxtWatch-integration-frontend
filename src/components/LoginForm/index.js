import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import Cookies from "js-cookie"
import ReactContext from "../../context/ReactContext"
import {
  LoginContainer,
  LoginCardContainer,
  ImageElement,
  NameContainer,
  NameLabel,
  UsernameInput,
  LoginButton,
  ErrorMsg,
  LinkText,
} from "./LoginStyledComponent"

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    showPassword: false,
    errorMsg: "",
    isError: false,
  }

  setUserEmail = event => {
    this.setState({email: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  setPasswordStatus = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const expires = new Date(Date.now() + 3600 * 1000)
    Cookies.set("jwt_token", jwtToken, {expires})
    const {history} = this.props
    history.replace("/")
  }

  submitForm = async event => {
    event.preventDefault()
    const {email, password} = this.state
    const userDetails = {email, password}

    const url = "https://nxtwatch-backend.onrender.com/api/login"

    try {
      const response = await axios.post(url, userDetails)
      this.onSubmitSuccess(response.data.jwt_token)
    } catch (error) {
      console.log(error)
      this.setState({
        isError: true,
        errorMsg: error.response ? error.response.data : "Something went wrong",
      })
    }
  }

  render() {
    const {showPassword, errorMsg, isError} = this.state

    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const lodoImgUrl = isDarkMode ? (
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          )

          return (
            <LoginContainer isDarkMode>
              <LoginCardContainer
                isDarkMode={isDarkMode}
                onSubmit={this.submitForm}
                autoComplete="on"
              >
                {lodoImgUrl}
                <NameContainer>
                  <NameLabel htmlFor="email" isDarkMode>
                    EMAIL
                  </NameLabel>
                  <UsernameInput
                    isDarkMode
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    onChange={this.setUserEmail}
                  />
                </NameContainer>
                <NameContainer isDarkMode>
                  <NameLabel isDarkMode htmlFor="password">
                    PASSWORD
                  </NameLabel>
                  <UsernameInput
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    onChange={this.setPassword}
                    isDarkMode
                  />
                </NameContainer>

                <LoginButton isDarkMode>Login</LoginButton>
                <LinkText>
                  Don't have account?
                  <Link to="/register">Register</Link>
                </LinkText>
                {isError && (
                  <ErrorMsg className="error-Msg">*{errorMsg}</ErrorMsg>
                )}
              </LoginCardContainer>
            </LoginContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default LoginForm
