import Nav from 'src/components/nav.js'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto max-w-screen-md pt-24">{children}</div>
    </>
  )
}

export default GlobalLayout
