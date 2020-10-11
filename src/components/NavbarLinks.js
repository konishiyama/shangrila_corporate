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
    background: #1e90ff;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #1e90ff;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 5px 0;
    font-size: 0.7rem;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    padding: 5px 0;
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
    background: #1e90ff;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #1e90ff;
    ::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 5px 0;
    font-size: 0.7rem;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    padding: 5px 0;
    font-size: 0.8rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  const router = useRouter()

  const { firebase } = useContext(FirebaseContext)

  return (
    <>
      <Link href="/">
        <NavItemHome>HOME</NavItemHome>
      </Link>
      <Link href="/about">
        <NavItem>企業情報</NavItem>
      </Link>
      <Link href="/news">
        <NavItem>新着情報</NavItem>
      </Link>
    </>
  )
}

export default NavbarLinks
