import BeansLayout from 'src/layouts/BeansLayout'

import EditBeanCell from '../../components/BEAN/EditBeanCell/EditBeanCell'

const EditBeanPage = ({ id }) => {
  return (
    <BeansLayout>
      <EditBeanCell id={id} />
    </BeansLayout>
  )
}

export default EditBeanPage
