import BeansLayout from 'src/layouts/BeansLayout'
import BeanCell from 'src/components/BEAN/BeanCell'

const BeanPage = ({ id }) => {
  return (
    <BeansLayout>
      <BeanCell id={id} />
    </BeansLayout>
  )
}

export default BeanPage
