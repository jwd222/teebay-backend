import { useQuery, gql } from '@apollo/client'

const MY_QUERY = gql`
  query Query($email: String!) {
    getUser(email: $email) {
      firstName
    }
  }
`
const User = ({ email }) => {
  const { loading, error, data } = useQuery(MY_QUERY, { variables: { email } })
  if (loading) return <h1>Loading...</h1>
  if (error) return `Error! ${error}`

  return <div>{JSON.stringify(data)}</div>
}
export default User
