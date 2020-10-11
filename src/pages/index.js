import React, { useContext } from "react"
import styled from "styled-components"
import TopCover from "../components/TopCover"
import Declaration from "../components/Declaration"
import Activity from "../components/Activity"
import Contact from "../components/Contact"
import { IndexArticles, SubTitle } from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import Fade from "react-reveal/Fade"

const SeeMore = styled.a`
  text-decoration: none;
  color: #1e90ff;
  font-weight: bold;
  &:hover {
    opacity: 30%;
    // transition: all 0.4s ease-in;
  }
`

const IndexPage = ({ data }) => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <>
      <section>
        <TopCover></TopCover>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 650,
            padding: `5rem 1.5rem 0rem`,
          }}
        >
          <Declaration></Declaration>
          <Fade bottom duration={1500}>
            <SubTitle>
              <span>事業内容</span>
            </SubTitle>
          </Fade>
          <Activity></Activity>
        </div>
        <Fade bottom duration={1500}>
          <SubTitle>
            <span>NEWS</span>
          </SubTitle>
        </Fade>
        {!!firebase && <IndexArticles firebase={firebase} />}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.5rem 0`,
          }}
        >
          <div
            style={{
              margin: `2.5rem auto 0 `,
              textAlign: `center`,
            }}
          >
            <Fade bottom duration={1500}>
              <SeeMore href="/news">{">>もっと見る"}</SeeMore>
            </Fade>
          </div>
        </div>
        <Fade bottom duration={1500}>
          <SubTitle>
            <span>お問合せ</span>
          </SubTitle>
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 480,
            padding: `0rem 0.8rem 1.45rem`,
          }}
        >
          <Contact></Contact>
        </div>
      </section>
    </>
  )
}

export default IndexPage
