import styled from 'styled-components'

export const RegisterContainer = styled.div`
  background-color: #f7fafc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const RegisterCardContainer = styled.form`
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`

export const ImageElement = styled.img`
  align-self: center;
  height: 50px;
  width: auto;
  margin-bottom: 30px;
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const NameLabel = styled.label`
  color: #2d3748;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const UsernameInput = styled.input`
  color: #2d3748;
  font-size: 16px;
  padding: 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  outline: none;
  background-color: #edf2f7;

  &:focus {
    border-color: #3182ce;
    background-color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const GenderInputContainer =styled.div`
display: flex;
align-items: center;
`

export const GenderInput = styled.input`
  margin-right: 12px;
  accent-color: #3182ce; 

  &:checked {
    accent-color: #3182ce; 
  }
`


export const GenderLabel = styled.label`
  color: #2d3748;
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const RegisterButton = styled.button`
  color: #ffffff;
  background-color: #3182ce;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2b6cb0;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`

export const NavRoute= styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 478px) {
    font-size: 12px;
    margin-top: 8px;
  }
`