import React, {Component} from "react"
import {Link, withRouter} from "react-router-dom"
import axios from "axios"
import {
  RegisterContainer,
  RegisterCardContainer,
  ImageElement,
  NameContainer,
  NameLabel,
  UsernameInput,
  GenderContainer,
  GenderInput,
  GenderLabel,
  RegisterButton,
  ErrorMsg,
  GenderInputContainer,
  NavRoute,
} from "./RegisterStyledComponents"

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    location: "",
    email: "",
    showPassword: false,
    errorMsg: "",
    isError: false,
  }

  setUsername = event => {
    this.setState({username: event.target.value})
  }

  setUseremail = event => {
    this.setState({email: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  setConfirmPassword = event => {
    this.setState({confirmPassword: event.target.value})
  }

  setGender = event => {
    this.setState({gender: event.target.value})
  }

  setLocation = event => {
    this.setState({location: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace("/login")
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, email, password, confirmPassword, gender, location} =
      this.state

    if (password !== confirmPassword) {
      this.setState({errorMsg: "Passwords do not match", isError: true})
      return
    }

    if (!username || !email || !password || !location) {
      this.setState({
        errorMsg: "Please fill all required fields",
        isError: true,
      })
      return
    }

    const userDetails = {
      username,
      email,
      password,
      confirmPassword,
      gender,
      location,
    }

    await axios
      .post("https://nxtwatch-backend.onrender.com/api/register", userDetails)
      .then(response => {
        if (response.data.error) {
          this.setState({errorMsg: response.data.error, isError: true})
        } else {
          console.log("Response from server:", response.data)
          this.onSubmitSuccess()
        }
      })
      .catch(err => {
        const errorMsg =
          err.response.data || "Registration failed. Please try again."
        this.setState({errorMsg, isError: true})
      })
  }

  render() {
    const {errorMsg, isError} = this.state

    return (
      <RegisterContainer>
        <RegisterCardContainer
          as="form"
          onSubmit={this.submitForm}
          autoComplete="off"
        >
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <NameContainer>
            <NameLabel htmlFor="username">USERNAME</NameLabel>
            <UsernameInput
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={this.setUsername}
            />
          </NameContainer>

          <NameContainer>
            <NameLabel htmlFor="email">EMAIL</NameLabel>
            <UsernameInput
              type="text"
              id="email"
              placeholder="Enter email"
              onChange={this.setUseremail}
            />
          </NameContainer>

          <NameContainer>
            <NameLabel htmlFor="password">PASSWORD</NameLabel>
            <UsernameInput
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={this.setPassword}
            />
          </NameContainer>
          <NameContainer>
            <NameLabel htmlFor="confirmPassword">CONFIRM PASSWORD</NameLabel>
            <UsernameInput
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={this.setConfirmPassword}
            />
          </NameContainer>

          <GenderContainer>
            <NameLabel>GENDER</NameLabel>
            <GenderInputContainer>
              <GenderInput
                type="radio"
                id="genderMale"
                value="male"
                name="gender"
                checked={this.state.gender === "male"}
                onChange={this.setGender}
              />
              <GenderLabel htmlFor="genderMale">Male</GenderLabel>
              <GenderInput
                type="radio"
                id="genderFemale"
                value="female"
                name="gender"
                checked={this.state.gender === "female"}
                onChange={this.setGender}
              />
              <GenderLabel htmlFor="genderFemale">Female</GenderLabel>
            </GenderInputContainer>
          </GenderContainer>

          <NameContainer>
            <NameLabel htmlFor="location">LOCATION</NameLabel>
            <UsernameInput
              type="text"
              id="location"
              placeholder="Enter Location"
              onChange={this.setLocation}
            />
          </NameContainer>

          <RegisterButton type="submit">Register</RegisterButton>

          <NavRoute>
            Already have an account?<Link to="/login">Login</Link>
          </NavRoute>
          {isError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </RegisterCardContainer>
      </RegisterContainer>
    )
  }
}

export default withRouter(RegisterForm)
