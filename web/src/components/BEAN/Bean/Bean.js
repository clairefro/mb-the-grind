import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useState } from 'react'
import { Collapse } from 'react-collapse'

import Comment from '../../COMMENT/Comment/Comment'
import Message from '../../common/message.js'
import NewComment from '../../COMMENT/NewComment/NewComment'

const DELETE_BEAN_MUTATION = gql`
  mutation DeleteBeanMutation($id: Int!) {
    deleteBean(id: $id) {
      id
    }
  }
`

const Bean = ({ bean }) => {
  const [isOpen, setOpen] = useState(false)
  const [comments, setComments] = useState(
    bean.comments.sort(function (a, b) {
      return new Date(a.createdAt) - new Date(b.createdAt)
    })
  )
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

  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  const forceUpdate = (comment) => {
    setComments(comments.concat(comment))
  }

  return (
    <div className="rounded shadow mb-6 border-2 border-mint">
      <div className="p-4">
        <Message
          body={bean.body}
          username={bean.username}
          createdAt={bean.createdAt}
        />
        <div className="flex mb-4">
          <button
            onClick={toggleOpen}
            className="ml-2 flex-grow text-center bg-gray-200 rounded mx-2"
          >
            Reply ({comments.length}) {isOpen ? '↑' : '↓'}
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
          <div className="rounded-md p-2">
            <NewComment bean={bean} forceUpdate={forceUpdate} />
            {comments.reverse().map((c, i) => (
              <Comment key={i} comment={c} />
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Bean
