import CommentsLayout from 'src/layouts/CommentsLayout'
import EditCommentCell from 'src/components/COMMENT/EditCommentCell'

const EditCommentPage = ({ id }) => {
  return (
    <CommentsLayout>
      <EditCommentCell id={id} />
    </CommentsLayout>
  )
}

export default EditCommentPage
