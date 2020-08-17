// import { useMutation, useFlash } from '@redwoodjs/web'

// import { Link, routes } from '@redwoodjs/router'
import Bean from 'src/components/Bean/Bean'

// const DELETE_BEAN_MUTATION = gql`
//   mutation DeleteBeanMutation($id: Int!) {
//     deleteBean(id: $id) {
//       id
//     }
//   }
// `

// const MAX_STRING_LENGTH = 150

// const truncate = (text) => {
//   let output = text
//   if (text && text.length > MAX_STRING_LENGTH) {
//     output = output.substring(0, MAX_STRING_LENGTH) + '...'
//   }
//   return output
// }

// const jsonTruncate = (obj) => {
//   return truncate(JSON.stringify(obj, null, 2))
// }
//
// const timeTag = (datetime) => {
//   return (
//     <time dateTime={datetime} title={datetime}>
//       {new Date(datetime).toUTCString()}
//     </time>
//   )
// }
//
// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const BeansList = ({ beans }) => {
  //   const { addMessage } = useFlash()
  //   const [deleteBean] = useMutation(DELETE_BEAN_MUTATION, {
  //     onCompleted: () => {
  //       addMessage('Bean deleted.', { classes: 'rw-flash-success' })
  //     },
  //   })
  //
  // const onDeleteClick = (id) => {
  //   if (confirm('Are you sure you want to delete bean ' + id + '?')) {
  //     deleteBean({ variables: { id }, refetchQueries: ['BEANS'] })
  //   }
  // }

  return (
    <div>
      {beans.map((bean) => (
        <Bean bean={bean} key={bean.id} />
      ))}
    </div>
  )
}

export default BeansList
