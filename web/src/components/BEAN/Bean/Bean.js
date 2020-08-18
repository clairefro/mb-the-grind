import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useState } from 'react'
import { Collapse } from 'react-collapse'

import Comment from '../../COMMENT/Comment/Comment'
import NewComment from '../../COMMENT/NewComment/NewComment'
import { prettyTime } from '../../../utils/date.js'

const DELETE_BEAN_MUTATION = gql`
  mutation DeleteBeanMutation($id: Int!) {
    deleteBean(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {prettyTime(datetime)}
    </time>
  )
}

const Bean = ({ bean }) => {
  const [isOpen, setOpen] = useState(false)
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
  // <Link to={routes.bean({ id: bean.id })}>
  // </Link>
  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="rounded shadow mb-6">
      <div className="p-4">
        <div>{bean.body}</div>
        <header className="flex justify-between mt-2">
          <span className="font-semibold">{bean.username}</span>
          {timeTag(bean.createdAt)}
        </header>
        <div className="flex">
          <button
            onClick={toggleOpen}
            className="ml-2 flex-grow text-center bg-gray-200 rounded mx-2"
          >
            Reply ({bean.comments.length}) {isOpen ? '↓' : '↑'}
          </button>
          <nav className="flex justify-end">
            <Link
              to={routes.editBean({ id: bean.id })}
              className="text-gray-500"
            >
              Edit
            </Link>
            <a
              href="#"
              className="text-red-500 ml-2"
              onClick={() => onDeleteClick(bean.id)}
            >
              Delete
            </a>
          </nav>
        </div>
        <Collapse isOpened={isOpen}>
          <NewComment bean={bean} />
          {bean.comments.map((c) => (
            <Comment key={c.id} comment={c} />
          ))}
        </Collapse>
      </div>
    </div>
  )
}

export default Bean
