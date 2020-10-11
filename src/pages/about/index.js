import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { PageTitle, BodyText } from "../../components/common"
import Fade from "react-reveal/Fade"

const Container = styled.div`
  margin: 0 auto 5rem;
  max-width: 480px;
`

const Pic = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  display: inline-block;

  img {
    width: 100%;
    margin: 0;
    height: 12rem;
    object-fit: cover;
    display: block;
  }
`

const P = styled.p`
  font-size: 12px;
  line-height: 1.5;
`

const A = styled.a`
  font-size: 14px;
  color: #1e90ff;
  display: block;
  text-align: center;
  border: solid 1px #1e90ff;
  padding: 1.3em;
  line-height: 1;
  text-decoration: none;
  margin-top: 1em;
  &:hover {
    color: #fff;
    background-color: #1e90ff;
    border: solid 1px #1e90ff;
    transition: all 0.2s ease-in;
  }
`

const About = props => {
  return (
    <>
      <section>
        <PageTitle>
          <span>企業情報</span>
          <p>About</p>
        </PageTitle>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1.5rem 1.45rem`,
          }}
        >
          <Container>
            <Fade cascade duration={2000}>
              <Pic>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile_pic_height_optimized.jpg?alt=media&token=57bae787-a0e7-4735-a436-347e5f6123b4"
                  alt="coverImg"
                ></img>
              </Pic>
              <h3>代表メッセージ</h3>
              <P>
                代表
                西山洸から皆様へのメッセージと、法人設立にかけた想いについて、お伝えしています。
              </P>
              <Link href="/about/message">
                <A>詳しくはこちら</A>
              </Link>
            </Fade>
          </Container>
          <Container>
            <Fade cascade duration={2000}>
              <Pic>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile_pic_height_optimized.jpg?alt=media&token=57bae787-a0e7-4735-a436-347e5f6123b4"
                  alt="coverImg"
                ></img>
              </Pic>
              <h3>企業概要</h3>
              <P>
                株式会社シャングリラの事業・活動内容等についてご覧いただけます。
              </P>
              <Link href="/about/organization">
                <A>詳しくはこちら</A>
              </Link>
            </Fade>
          </Container>
          <Container>
            <Fade cascade duration={2000}>
              <Pic>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile_pic_height_optimized.jpg?alt=media&token=57bae787-a0e7-4735-a436-347e5f6123b4"
                  alt="coverImg"
                ></img>
              </Pic>
              <h3>設立理念</h3>
              <P>
                当社設立の趣旨や、運営する上での理念、目的等についてご紹介しています。
              </P>
              <Link href="/about/vision">
                <A>詳しくはこちら</A>
              </Link>
            </Fade>
          </Container>
        </div>
      </section>
    </>
  )
}

export default About
