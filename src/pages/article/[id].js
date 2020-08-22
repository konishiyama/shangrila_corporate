import { useRouter } from "next/router"
import React, { useContext } from "react"
import { useDocumentDataOnce } from "react-firebase-hooks/firestore"
import renderHTML from "react-render-html"
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import styled from "styled-components"
import { BottomBar } from "../../components/common"
import { FirebaseContext } from "../../components/Firebase"

const ArticleTemplate = props => {
  const router = useRouter()

  const { user, firebase } = useContext(FirebaseContext)

  const [pageContext = null] = useDocumentDataOnce(
    router.query.id && firebase
      ? firebase.db.collection("articles").doc(router.query.id)
      : null,
    { idField: "id" }
  )

  const ArticleItem = styled.section`
    border-bottom: 1px solid #f4f4f4;
  `

  if (!pageContext) {
    return <p>{"loading.."}</p>
  }

  return (
    <section>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1.5rem 1.45rem`,
        }}
      >
        <ArticleItem>
          <h2>{pageContext.title}</h2>
          <p>{pageContext.date}</p>
          <img src={pageContext.thumnail} alt="CoverImage"></img>
          <p
            style={{
              marginBottom: `1.45em`,
            }}
          >
            {renderHTML(pageContext.content)}
          </p>
        </ArticleItem>
        <div
          style={{
            marginTop: `1.45em`,
          }}
        ></div>
        <BottomBar>
          <FacebookShareButton
            url={`https://infallible-rosalind-21f943.netlify.app/article/${pageContext.articleNum}`}
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <FacebookIcon
              size={`2.3rem`}
              round
              style={{
                marginRight: `1em`,
              }}
            />
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://infallible-rosalind-21f943.netlify.app/article/${pageContext.articleNum}`}
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <TwitterIcon
              size={`2.3rem`}
              round
              style={{
                marginRight: `1em`,
              }}
            />
          </TwitterShareButton>
          <LineShareButton
            url={`https://infallible-rosalind-21f943.netlify.app/article/${pageContext.articleNum}`}
            style={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <LineIcon
              size={`2.3rem`}
              round
              style={{
                marginRight: `1em`,
              }}
            />
          </LineShareButton>
          {/* {!!user &&  !!user.admin &&
          <CreateIcon
            style={{
              color: `white`,
              backgroundColor: `#4c9c41`,
              borderRadius: `50%`,
              padding: `0.5rem`,
              height: `3rem`,
              width: `3rem`,
              margin: `0 0 0 auto`
            }}
          />
          }  */}
        </BottomBar>
      </div>
    </section>
  )
}

export default ArticleTemplate
