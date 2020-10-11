import PropTypes from "prop-types"
import React from "react"
import { FirebaseContext, useFirebase } from "./Firebase"
import Footer from "./Footer"
import Header from "./header"

const Layout = ({ children }) => {
  const { firebase } = useFirebase()

  return (
    <FirebaseContext.Provider value={{ firebase }}>
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
