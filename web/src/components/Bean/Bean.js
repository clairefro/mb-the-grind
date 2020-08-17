import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { prettyTime } from '../../utils/date'

const DELETE_BEAN_MUTATION = gql`
  mutation DeleteBeanMutation($id: Int!) {
    deleteBean(id: $id) {
      id
    }
  }
`
//
// const jsonDisplay = (obj) => {
//   return (
//     <pre>
//       <code>{JSON.stringify(obj, null, 2)}</code>
//     </pre>
//   )
// }

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {prettyTime(datetime)}
    </time>
  )
}

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const Bean = ({ bean }) => {
  const { addMessage } = useFlash()
  const [deleteBean] = useMutation(DELETE_BEAN_MUTATION, {
    onCompleted: () => {
      navigate(routes.beans())
      addMessage('Bean deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bean ' + id + '?')) {
      deleteBean({ variables: { id } })
    }
  }

  return (
    <div className="rounded shadow">
      <div className="p-4">
        <div>{bean.body}</div>
        <header className="flex justify-between mt-2">
          <span className="font-semibold">{bean.username}</span>
          {timeTag(bean.createdAt)}
        </header>

        <nav className="rw-button-group">
          <Link
            to={routes.editBean({ id: bean.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <a
            href="#"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(bean.id)}
          >
            Delete
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Bean
