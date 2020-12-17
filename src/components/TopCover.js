import Link from "next/link"
import React, { useContext } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { FirebaseContext } from "./Firebase"

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
      height: 500px;
    }

    @media (min-width: 1024px) {
      height: 630px;
    }
  }
`

const CoverP1 = styled.h1`
  position: absolute;
  top: 15%;
  left: 50%;
  width: 34%;
  text-align: center;
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

  @media (min-width: 768px) {
    text-align: left;
    top: 25%;
    left: 50%;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`

const CoverP2 = styled.h1`
  position: absolute;
  top: 23%;
  left: 50%;
  width: 34%;
  text-align: center;
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

  @media (min-width: 768px) {
    text-align: left;
    top: 35%;
    left: 50%;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`
const CoverP3 = styled.p`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 34%;
  text-align: center;
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

  @media (min-width: 768px) {
    text-align: left;
    top: 45%;
    left: 50%;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`

const A = styled.a`
  position: absolute;
  top: 38%;
  left: 36%;
  width: 28%;
  font-size: 14px;
  color: #fff;
  // background-color: ;
  display: block;
  text-align: center;
  border: solid 1px #fff;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 1em;
  &:hover {
    color: #fff;
    background-color: #1e90ff;
    border: solid 1px #1e90ff;
    transition: all 0.2s ease-in;
  }

  @media (min-width: 768px) {
    width: 20%;
    top: 52%;
    left: 10%;
  }

  @media (min-width: 1024px) {
    width: 10%;
  }
`

const TopCover = () => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <>
      <Fade duration={2500}>
        <Cover>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shangri-la-inc.appspot.com/o/coverImg.jpg?alt=media&token=fddcd0b7-6b84-4351-9c19-dbbce9f1eec2"
            alt="cover"
          />
          <CoverP1>株式会社</CoverP1>
          <CoverP2>シャングリラ</CoverP2>
          <CoverP3>- Official Website -</CoverP3>
          <Link href="/about">
            <A>企業概要 →</A>
          </Link>
          {!!firebase && (
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
          )}
        </Cover>
      </Fade>
    </>
  )
}

export default TopCover
