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
  padding: 1rem 0 1rem;
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

const Home = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
`

const LogIn = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  a {
    color: #787c7b;
    text-decoration: none;
    &:hover {
      color: #787c7b;
      transition: all 0.4s ease-in;
    }
  }
`

const LogOut = styled.span`
  width: 50%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  color: #787c7b;
  &:hover {
    color: #787c7b;
  }
`

const ImgContainer = styled.div`
  height: 18px;
  width: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  alignitems: center;
`

const SNSLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const Paragraph1 = styled.div`
  width: 60%;
  margin: 10px auto 1.5rem;
  display: flex;
`

const Paragraph2 = styled.div`
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
  margin: 10px auto;
`

const Footer = () => {
  const { firebase, user } = useContext(FirebaseContext)

  const router = useRouter()

  function handleLogOutClick() {
    firebase.logout().then(() => router.push("/login"))
  }

  return (
    <>
      <Container>
        <Paragraph1>
          <Home>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </Home>
          {!user && (
            <LogIn>
              <Link href="/login">
                <a>ログイン</a>
              </Link>
            </LogIn>
          )}
          {!!user && <LogOut onClick={handleLogOutClick}>ログアウト</LogOut>}
        </Paragraph1>
        {!!firebase && (
          <ImgContainer>
            <SNSLink href="" target="_blank">
              <FacebookIcon alt="Facebook" style={{}}></FacebookIcon>
            </SNSLink>
            <SNSLink>
              <YouTubeIcon alt="Youtube"></YouTubeIcon>
            </SNSLink>
            <SNSLink>
              <TwitterIcon alt="Twitter"></TwitterIcon>
            </SNSLink>
          </ImgContainer>
        )}

        <Paragraph2>
          <Line>
            <Link href="/about/organization">
              <a>団体概要</a>
            </Link>
          </Line>
          {/* <Span></Span> */}
          <Line>
            <Link href="/privacy_policy">
              <a>プライバシーポリシー</a>
            </Link>
          </Line>
        </Paragraph2>
        <CopyRight>
          Copyright © 2020 Shohei Yamaguchi All Rights Reserved.
        </CopyRight>
      </Container>
    </>
  )
}

export default Footer
