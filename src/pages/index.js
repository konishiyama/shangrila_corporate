import React, { useContext } from "react"
import styled from "styled-components"
import {
  IndexArticles,
  IndexMemberPosts,
  SubTitle,
  BodyText,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"
import Fade from "react-reveal/Fade"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"

const Cover = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  display: inline-block;

  img {
    margin: 0;
    width: 100%;
    padding: 0 0 0;
    height: 700px;
    object-fit: cover;

    @media (min-width: 768px) {
      height: 400px;
    }

    @media (min-width: 1024px) {
      height: 630px;
    }
  }
`

const CoverP1 = styled.h1`
  position: absolute;
  top: 65%;
  left: 50%;
  width: 80%;
  text-align: left;
  line-height: 1.5em;
  font-weight: normal;
  letter-spacing: 0.02em;
  width: 80%;
  font-size: 32px;
  color: #fff;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "Sawarabi Mincho", "HG明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", "MS 明朝", serif;
`

const CoverP2 = styled.h1`
  position: absolute;
  top: 71%;
  left: 50%;
  width: 80%;
  text-align: left;
  line-height: 1.5em;
  font-weight: normal;
  letter-spacing: 0.02em;
  width: 80%;
  font-size: 32px;
  color: #fff;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Cormorant Infant", serif;
`
const CoverP3 = styled.p`
  position: absolute;
  top: 77%;
  left: 50%;
  width: 80%;
  text-align: left;
  line-height: 1.5em;
  font-weight: normal;
  letter-spacing: 0.02em;
  width: 80%;
  font-size: 16px;
  color: #fff;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Cormorant Infant", serif;
`

const A = styled.a`
  position: absolute;
  top: 80%;
  left: 10%;
  width: 35%;
  font-size: 14px;
  color: #fff;
  display: block;
  text-align: center;
  border: solid 1px #fff;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 1em;
  &:hover {
    color: #fff;
    background-color: #a9ce84;
    transition: all 0.2s ease-in;
  }
`

const TopLink = styled.a`
  width: 35%;
  font-size: 14px;
  color: #4c9c41;
  display: block;
  text-align: center;
  border: solid 1px #4c9c41;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 3em;
  &:hover {
    color: #fff;
    background-color: #a9ce84;
    border: solid 1px #a9ce84;
    transition: all 0.2s ease-in;
  }
`

const SeeMore = styled.a`
  text-decoration: none;
  color: #808080;
  &:hover {
    color: #4c9c41;
    transition: all 0.4s ease-in;
  }
`

const DecContainer = styled.div`
  text-align: center;
  margin: 0 auto 3rem;
`
const Declaration = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #02102e;
  font-size: 32px;
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
        <Fade duration={2000}>
          <Cover>
            <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample8.jpg?alt=media&token=5c0974c3-a5a7-4815-8e4b-cf475d15da0d" />
            <CoverP1>特定非営利法人</CoverP1>
            <CoverP2>Imolution</CoverP2>
            <CoverP3>Official Website</CoverP3>
            <A href="/about">法人概要 →</A>
            <KeyboardArrowDownIcon
              style={{
                color: `#fff`,
                margin: `0 auto`,
                position: `absolute`,
                fontSize: `35px`,
                fontWeight: `bold`,
                top: `95%`,
                left: `50%`,
                msTransform: `translate(-50%, -50%)`,
                WebkitTransform: `translate(-50%, -50%)`,
                transform: `translate(-50%, -50%)`,
              }}
            ></KeyboardArrowDownIcon>
          </Cover>
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.5rem 1.45rem`,
          }}
        >
          <br></br>
          <br></br>
          <br></br>
          <DecContainer>
            <Fade bottom duration={2000}>
              <Declaration>農業を通じて、</Declaration>
            </Fade>
            <br></br>
            <Fade bottom duration={2000} delay={500}>
              <Declaration>地方活性化を目指す</Declaration>
            </Fade>
          </DecContainer>
          <Fade duration={2000} delay={1000}>
            <BodyText>
              少子化や都市部への人口集中が加速する中、地方では人口減少問題が深刻化しています。当法人は、地方への移住希望者並びにその潜在層に対し、農業を通じて地方に定住・関与してもらうための取組を推進する
              ことで、地方活性化等に参画したいと考える市民活動のプラットフォーム形成に寄与してまいります。
            </BodyText>
          </Fade>
          <Fade duration={2000} delay={1500}>
            <div
              style={{
                margin: `0 auto`,
              }}
            >
              <TopLink href="/about/vision">経営理念 →</TopLink>
            </div>
          </Fade>
          {!!user && (
            <div>
              <Fade bottom duration={2000} delay={1000}>
                <SubTitle>
                  <span>Community</span>
                </SubTitle>
              </Fade>
              <Fade duration={2500} delay={1000}>
                {!!firebase && <IndexMemberPosts firebase={firebase} />}
              </Fade>
              <div
                style={{
                  margin: `2.5rem auto 0 `,
                  textAlign: `center`,
                }}
              >
                <Fade bottom duration={2000}>
                  <SeeMore href="/member">{">>もっと見る"}</SeeMore>
                </Fade>
              </div>
            </div>
          )}
        </div>
        <Fade bottom duration={2000}>
          <SubTitle>
            <span>Recent Posts</span>
          </SubTitle>
        </Fade>
        <Fade duration={2000}>
          {!!firebase && <IndexArticles firebase={firebase} />}
        </Fade>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.5rem 1.45rem`,
          }}
        >
          <div
            style={{
              margin: `1.5rem auto 0 `,
              textAlign: `center`,
            }}
          >
            <Fade bottom duration={2000}>
              <SeeMore href="/blog">{">>もっと見る"}</SeeMore>
            </Fade>
          </div>
          {/* <Fade bottom duration={2000}>
            <SubTitle>
              <span>Mission</span>
            </SubTitle>
          </Fade> */}
          {/* <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Fade bottom duration={2000}>
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
            <Fade bottom duration={2000}>
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
              <Fade bottom duration={2000}>
                <SeeMore
                  href="https://www.instagram.com/dlwlrma/?hl=ja"
                  target="_blank"
                >
                  {">>もっと見る"}
                </SeeMore>
              </Fade>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default IndexPage
