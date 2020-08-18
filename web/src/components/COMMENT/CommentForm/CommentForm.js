import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const CommentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.comment?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="username"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Username
        </Label>
        <TextField
          name="username"
          defaultValue={props.comment?.username}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>
        <TextAreaField
          name="body"
          defaultValue={props.comment?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="body" className="rw-field-error" />

        <FieldError name="username" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button bg-mint">
            Reply
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CommentForm
