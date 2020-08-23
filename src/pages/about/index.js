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

const LinkP = styled.p`
  position: inherit;
  right: inherit;
  top: inherit;
  width: 100%;
`

const A = styled.a`
  font-size: 14px;
  color: #4c9c41;
  display: block;
  text-align: center;
  border: solid 1px #4c9c41;
  padding: 1.3em;
  line-height: 1;
  text-decoration: none;
  margin-top: 1em;
  &:hover {
    color: #fff;
    background-color: #a9ce84;
    border: solid 1px #a9ce84;
    transition: all 0.2s ease-in;
  }
`

const About = props => {
  return (
    <>
      <section>
        <PageTitle>
          <span>団体情報</span>
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
            <Fade cascade duration={2500}>
              <Pic>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile_pic_height_optimized.jpg?alt=media&token=57bae787-a0e7-4735-a436-347e5f6123b4"
                  alt="coverImg"
                ></img>
              </Pic>
              <h3>代表メッセージ</h3>
              <P>
                代表
                山口翔平から皆様へのメッセージと、法人設立にかけた想いについて、お伝えしています。
              </P>
              <LinkP>
                <A href="/about/message">詳しくはこちら</A>
              </LinkP>
            </Fade>
          </Container>
          <Container>
            <Fade cascade duration={2500}>
              <Pic>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile_pic_height_optimized.jpg?alt=media&token=57bae787-a0e7-4735-a436-347e5f6123b4"
                  alt="coverImg"
                ></img>
              </Pic>
              <h3>団体概要</h3>
              <P>
                NPO法人Imolutionの事業・活動内容等についてご覧いただけます。
              </P>
              <LinkP>
                <A href="/about/organization">詳しくはこちら</A>
              </LinkP>
            </Fade>
          </Container>
          <Container>
            <Fade cascade duration={2500}>
              <Pic>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile_pic_height_optimized.jpg?alt=media&token=57bae787-a0e7-4735-a436-347e5f6123b4"
                  alt="coverImg"
                ></img>
              </Pic>
              <h3>設立理念</h3>
              <P>
                本法人設立の趣旨や、運営する上での理念、目的等についてご紹介しています。
              </P>
              <LinkP>
                <A href="/about/vision">詳しくはこちら</A>
              </LinkP>
            </Fade>
          </Container>
        </div>
      </section>
    </>
  )
}

export default About
