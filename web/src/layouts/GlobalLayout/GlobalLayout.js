import Nav from 'src/components/nav.js'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default GlobalLayout
