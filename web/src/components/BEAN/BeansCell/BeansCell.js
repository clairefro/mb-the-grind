import { Link, routes } from '@redwoodjs/router'

import Beans from '../Beans/Beans'

export const QUERY = gql`
  query BEANS {
    beans {
      id
      body
      username
      createdAt
      comments {
        id
        body
        createdAt
        username
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No beans yet. '}
      <Link to={routes.newBean()} className="rw-link bg-mint">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ beans }) => {
  return <Beans beans={beans} />
}
