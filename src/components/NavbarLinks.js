import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import styled from "styled-components"
import { FirebaseContext } from "./Firebase"

const NavItemHome = styled.a`
  color: #111;
  font-size: 1rem;
  font-weight: bold;
  font-family: "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
    "Noto Sans JP", "游ゴシック体", "Yu Gothic", YuGothic, serif;
  padding: 20px 0;
  z-index: 6;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-decoration: underline;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #4c9c41;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #4c9c41;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 20px 0;
    font-size: 0.7rem;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    padding: 20px 0;
    font-size: 0.8rem;
    z-index: 6;
  }
`
const NavItem = styled.a`
  color: #111;
  font-size: 1rem;
  font-family: "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
    "Noto Sans JP", "游ゴシック体", "Yu Gothic", YuGothic, serif;
  padding: 20px 0;
  z-index: 6;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #4c9c41;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #4c9c41;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 20px 0;
    font-size: 0.7rem;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    padding: 20px 0;
    font-size: 0.8rem;
    z-index: 6;
  }
`

const Logout = styled.span`
  text-decoration: none;
  color: #111;
  padding: 20px 0;
  font-size: 1rem;
  font-family: "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro",
    "Noto Sans JP", "游ゴシック体", "Yu Gothic", YuGothic, serif;
  z-index: 6;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #4c9c41;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #4c9c41;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 20px 0;
    font-size: 0.7rem;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    padding: 20px 0;
    font-size: 0.8rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  const router = useRouter()

  const { firebase, user } = useContext(FirebaseContext)

  function handleLogOutClick() {
    firebase.logout().then(() => router.push("/login"))
  }

  return (
    <>
      <Link href="/">
        <NavItemHome>HOME</NavItemHome>
      </Link>
      <Link href="/about">
        <NavItem>団体情報</NavItem>
      </Link>
      <Link href="/blog">
        <NavItem>ブログ</NavItem>
      </Link>
      {!user && (
        <Link href="/login">
          <NavItem>ログイン</NavItem>
        </Link>
      )}
      {/* {!!user && !!user.admin && (
        <a href="/postarticle">
          <NavItem>記事投稿</NavItem>
        </a>
      )} */}
      {!!user && (
        <Link href="/member">
          <NavItem>会員掲示板</NavItem>
        </Link>
      )}
      {!!user && <Logout onClick={handleLogOutClick}>Logout</Logout>}
    </>
  )
}

export default NavbarLinks
