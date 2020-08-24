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
    border: solid 1px #a9ce84;
    transition: all 0.2s ease-in;
  }
`

const TopCover = () => {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <>
      <Fade duration={2500}>
        <Cover>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample8.jpg?alt=media&token=5c0974c3-a5a7-4815-8e4b-cf475d15da0d"
            alt="cover"
          />
          <CoverP1>特定非営利法人</CoverP1>
          <CoverP2>Imolution</CoverP2>
          <CoverP3>Official Website</CoverP3>
          <Link href="/about">
            <A>団体概要 →</A>
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
