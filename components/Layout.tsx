import type { NextPage } from 'next'
import Nav from './Nav'
import Footer from './Footer'

interface Props {
    children:JSX.Element
}

const Layout:NextPage<Props> = ({children}) => {
  return (
    <div>
        <Nav/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout