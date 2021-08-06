import gql from 'graphql-tag'

export const SIGNIN_USER_MUTATION = gql`
{
    login(email: $email, password: $password) {
      token
    }
}`

export const TEST = gql`
{
  login(email:"admin@example.com", password: "admin") {
    token
  }
}`