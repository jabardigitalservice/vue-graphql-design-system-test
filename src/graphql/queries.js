import gql from 'graphql-tag'

export const SIGNIN_USER = gql`
query login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}`

export const DETAIL_USER = gql`
{
  user {
    _id,
    name
  }
}`

export const LIST_CONTENT = gql`
{
  posts {
    posts {
      _id,
      title,
      content,
      imageUrl
    }
    totalData: totalPosts
  }
}`