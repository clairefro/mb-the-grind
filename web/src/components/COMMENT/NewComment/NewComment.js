import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import CommentForm from '../CommentForm/CommentForm'

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

const NewComment = ({ bean }) => {
  const { addMessage } = useFlash()
  const [createComment, { loading, error }] = useMutation(
    CREATE_COMMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.comments())
        addMessage('Comment created.', { classes: 'rw-flash-success' })
      },
    }
  )

  // const onSave = (input) => {
  //   const castInput = Object.assign(input, {
  //     bean: { connect: { id: bean.id } },
  //   })
  //   createComment({ variables: { input: castInput } })
  // }

  // const relateModelToInput = (input, {model}) => {
  //   return Object.assign(input, { bean: { connect: { id: model.id } } })
  // }

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      // bean: { connect: { id: bean.id } },
      beanId: bean.id,
    })
    // const castInput = relateModelToInput(input, bean)
    createComment({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <div className="rw-segment-main">
        <CommentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewComment
