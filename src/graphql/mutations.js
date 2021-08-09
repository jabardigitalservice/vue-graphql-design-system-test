import gql from 'graphql-tag'

export const CREATE_USER = gql`
mutation createUser($email: String! $password: String! $name: String! ) {
  createUser(userInput: {email: $email, password: $password, name: $name}) {
    _id,
    name
  }
}`

export const CREATE_CONTENT = gql`
mutation createPost($title: String! $content: String! $imageUrl: String! ) {
  createPost(postInput: {title: $title, content: $content, imageUrl: $imageUrl}) {
    _id,
    title
  }
}`

export const UPDATE_CONTENT = gql`
mutation updatePost($id: String! $title: String! $content: String! $imageUrl: String! ) {
  updatePost(id: $id, postInput: {title: $title, content: $content, imageUrl: $imageUrl}){
    _id,
    title
  }
}`

export const DELETE_CONTENT = gql`
mutation deletePost($id: String!) {
  deletePost(id: $id)
}`

