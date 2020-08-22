import React, { useContext } from "react"
import styled from "styled-components"
import { IndexArticles, IndexMemberPosts, SubTitle } from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import Fade from "react-reveal/Fade"

const CoverPic = styled.img`
  margin: 0;
  width: 100%;
  padding: 0 0 0;
  height: 750px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 630px;
  }
`

const SeeMore = styled.a`
  text-decoration: none;
  color: #808080;
  color: #808080;
  &:hover {
    color: #4c9c41;
    transition: all 0.4s ease-in;
  }
`

const IndexPage = ({ data }) => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <section
        style={
          {
            // backgroundColor: `#f7f9f9`
          }
        }
      >
        <Fade duration={1500}>
          <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcover-photo2.jpg?alt=media&token=2e15a9eb-c440-484d-8029-96daabdab65f" />
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem 1.45rem`,
          }}
        >
          {!!user && (
            <div>
              <Fade bottom duration={1500}>
                <SubTitle>
                  <span>Community</span>
                </SubTitle>
              </Fade>
              {!!firebase && <IndexMemberPosts firebase={firebase} />}
              <div
                style={{
                  margin: `2.5rem auto 0 `,
                  textAlign: `center`,
                }}
              >
                <Fade bottom duration={1500} delay={500}>
                  <SeeMore href="/member">{">>もっと見る"}</SeeMore>
                </Fade>
              </div>
            </div>
          )}
        </div>
        <Fade bottom duration={1500}>
          <SubTitle>
            <span>Recent Posts</span>
          </SubTitle>
        </Fade>
        <Fade duration={1500}>
          {!!firebase && <IndexArticles firebase={firebase} />}
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 0.8rem 1.45rem`,
          }}
        >
          <div
            style={{
              margin: `1.5rem auto 0 `,
              textAlign: `center`,
            }}
          >
            <Fade bottom duration={1500} delay={500}>
              <SeeMore href="/blog">{">>もっと見る"}</SeeMore>
            </Fade>
          </div>
          <Fade bottom duration={1500}>
            <SubTitle>
              <span>Mission</span>
            </SubTitle>
          </Fade>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Fade bottom duration={1500}>
            <SubTitle>
              <span>Instagram</span>
            </SubTitle>
          </Fade>
          <div
            style={{
              // border: `1px solid #e2e8f0`,
              borderRadius: `5px`,
              width: `100%`,
              backgroundColor: `#fff`,
              padding: `1rem 0.5rem 1rem`,
            }}
          >
            <Fade bottom duration={1500}>
              <a
                href="https://www.instagram.com/dlwlrma/?hl=ja"
                target="_blank"
                style={{
                  // border: `0 solid #e2e8f0`,
                  borderRadius: `5px`,
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FInstagram-thumnail.png?alt=media&token=7a577e36-5c8f-43d9-9032-4911cac0b762"
                  style={{
                    borderRadius: `5px`,
                  }}
                ></img>
              </a>
            </Fade>
            <div
              style={{
                margin: `0rem auto 1rem`,
                textAlign: `center`,
              }}
            >
              <Fade bottom duration={1500} delay={500}>
                <SeeMore
                  href="https://www.instagram.com/dlwlrma/?hl=ja"
                  target="_blank"
                >
                  {">>もっと見る"}
                </SeeMore>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage
