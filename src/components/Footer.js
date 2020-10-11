import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import styled from "styled-components"
import { FirebaseContext } from "./Firebase"

const Container = styled.div`
  background-color: #fff;
  margin-top: 1rem;
  padding: 2rem 0 2rem;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.2);
  a {
    color: #787c7b;
    text-decoration: none;
    &:hover {
      color: #787c7b;
      transition: all 0.4s ease-in;
    }
  }
`

const Paragraph = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`

const Line = styled.p`
  vertical-align: middle;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #787c7b;
  a {
    color: #787c7b;
    text-decoration: none;
    &:hover {
      color: #787c7b;
      transition: all 0.4s ease-in;
    }
  }
`

const CopyRight = styled.p`
  font-size: 8px;
  color: #808080;
  text-align: center;
  margin: 1.5rem auto 1rem;
`

const Footer = () => {
  const { firebase } = useContext(FirebaseContext)

  const router = useRouter()

  return (
    <>
      <Container>
        <Paragraph>
          <Line>
            <Link href="/about/organization">
              <a>企業概要</a>
            </Link>
          </Line>
          {/* <Span></Span> */}
          <Line>
            <Link href="/privacy_policy">
              <a>プライバシーポリシー</a>
            </Link>
          </Line>
        </Paragraph>
        <CopyRight>
          Copyright © 2020 Shangri-La Inc. All Rights Reserved.
        </CopyRight>
      </Container>
    </>
  )
}

export default Footer
