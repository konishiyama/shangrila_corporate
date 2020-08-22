import PropTypes from "prop-types"
import React from "react"
import { FirebaseContext, useAuth } from "./Firebase"
import Footer from "./Footer"
import Header from "./header"

const Layout = ({ children }) => {
  const { user, firebase, loading } = useAuth()

  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </FirebaseContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
