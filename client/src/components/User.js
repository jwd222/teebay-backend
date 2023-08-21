import { useQuery, gql } from '@apollo/client'

const MY_QUERY = gql`
  query GetUser($getUserId: ID!) {
    getUser(id: $getUserId) {
      firstName
      email
      password
    }
  }
`
const User = ({ userId }) => {
  const { loading, error, data } = useQuery(MY_QUERY, {
    variables: {
      getUserId: userId,
    },
  })
  if (loading) return <h1>Loading...</h1>
  if (error) return `Error! ${error}`

  return <div>{JSON.stringify(data)}</div>
}
export default User
