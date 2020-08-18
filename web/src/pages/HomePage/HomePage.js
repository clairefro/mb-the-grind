// import { Link } from '@redwoodjs/router'

import NewBean from 'src/components/BEAN/NewBean/NewBean'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import BeansCell from 'src/components/BEAN/BeansCell/BeansCell'

const HomePage = () => {
  return (
    <GlobalLayout>
      <NewBean />
      <h2 className="text-2xl mt-6">Freshest Beans</h2>
      <BeansCell />
    </GlobalLayout>
  )
}

export default HomePage
