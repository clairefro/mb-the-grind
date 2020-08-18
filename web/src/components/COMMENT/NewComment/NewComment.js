import { useMutation, useFlash } from '@redwoodjs/web'
import { useLocation, navigate /*, routes */ } from '@redwoodjs/router'

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
  const { pathname: currPath } = useLocation()
  const [createComment, { loading, error }] = useMutation(
    CREATE_COMMENT_MUTATION,
    {
      onCompleted: () => {
        navigate(currPath)
        addMessage('Comment created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      beanId: bean.id,
    })
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
