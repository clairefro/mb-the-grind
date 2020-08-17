// import { Link } from '@redwoodjs/router'

import NewBean from 'src/components/BEAN/NewBean/NewBean'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import BeansCell from 'src/components/BEAN/BeansCell/BeansCell'
const HomePage = () => {
  return (
    <GlobalLayout>
      <div className="container mx-auto p-6 max-w-screen-md">
        <NewBean />
        <h2 className="text-2xl mt-6">Freshest Beans</h2>
        <BeansCell />
      </div>
    </GlobalLayout>
  )
}

export default HomePage
