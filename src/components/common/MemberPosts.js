import React from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import PostRoll from "../PostRoll"

export const MemberPosts = ({ firebase }) => {
  // const [memberPosts, setMemberPosts] = useState([])
  const [memberPosts = []] = useCollectionData(
    firebase.db.collection("memberposts"),
    { idField: "id" }
  )
  const memberPostsOrdered = memberPosts.sort(function (a, b) {
    if (a.postNum < b.postNum) {
      return 1
    } else {
      return -1
    }
  })
  const latestMemberPosts = memberPostsOrdered.slice(0, 15)

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
          {latestMemberPosts.map(post => (
            <PostRoll
              key={post.id}
              title={post.title}
              id={post.id}
              date={post.date}
              postNum={post.postNum}
              username={post.username}
              userPhoto={post.userPhoto}
            />
          ))}
        </div>
      </section>
    </>
  )
}
