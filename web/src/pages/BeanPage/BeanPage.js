// import BeansLayout from 'src/layouts/BeansLayout'
import BeanCell from 'src/components/BEAN/BeanCell'

import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const BeanPage = ({ id }) => {
  return (
    <GlobalLayout>
      <BeanCell id={id} />
    </GlobalLayout>
  )
}

export default BeanPage
