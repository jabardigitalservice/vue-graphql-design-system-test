import gql from 'graphql-tag'

export const SIGNIN_USER_MUTATION = gql`
{
    login(email: $email, password: $password) {
      token
    }
}`

export const CREATE_USER = gql`
mutation {
  createUser(userInput: {email: $email, password: $password, name: $name}) {
    _id,
    name
  }
}`