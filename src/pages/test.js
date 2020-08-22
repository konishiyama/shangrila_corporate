import React, { useContext } from "react"
import { IndexArticles, IndexMemberPosts } from "../components/common"
import { FirebaseContext } from "../components/Firebase"

const Test = props => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem 1.45rem`,
          }}
        >
          <br></br>
          <br></br>
          <br></br>
        </div>
        {!!firebase && <IndexArticles firebase={firebase} />}
        {!!firebase && <IndexMemberPosts firebase={firebase} />}
      </section>
    </>
  )
}

export default Test
