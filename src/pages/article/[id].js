import Link from "next/link"
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
import CreateIcon from "@material-ui/icons/Create"
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
    return <p></p>
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
            url={`https://competent-babbage-50b994.netlify.app/article/${pageContext.articleNum}`}
            size={`2.3rem`}
            style={{
              display: `flex`,
              alignItems: `center`,
              marginRight: `1em`,
              borderRadius: `50%`,
              border: `0`,
              padding: `0`,
              // boxShadow: `rgba(0, 0, 0, 0.4) 0 2px 5px`,
            }}
          >
            <FacebookIcon size={`2.3rem`} round style={{}} />
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://competent-babbage-50b994.netlify.app/article/${pageContext.articleNum}`}
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
            url={`https://competent-babbage-50b994.netlify.app/article/${pageContext.articleNum}`}
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
        </BottomBar>
      </div>
    </section>
  )
}

export default ArticleTemplate
