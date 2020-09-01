import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Container = styled.div`
  text-align: center;
  margin: 0 auto 4rem;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
`

const Cap = styled.span`
  text-align: left;
  margin: 0;
  color: #f4b400;
  font-size: 40px;
  font-weight: bold;
  font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "Sawarabi Mincho", "HG明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", "MS 明朝", serif;
`

const Big = styled.span`
  text-align: left;
  margin: 0;
  color: #02102e;
  font-size: 30px;
  font-weight: bold;
  font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "Sawarabi Mincho", "HG明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", "MS 明朝", serif;
`

const Small = styled.p`
  text-align: left;
  margin: 0 auto;
  color: #808080;
  font-size: 14pt;
  font-weight: bold;
`

const ImgContainer = styled.div`
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  margin: 30px 0 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`

const Activity = () => {
  return (
    <>
      <Container>
        <Fade right duration={1500} distance="50px">
          <TitleContainer>
            <Cap>農</Cap>
            <Big>作物の生産</Big>
          </TitleContainer>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <Small>サツマイモを中心とした</Small>
          <Small>露地栽培作物を生産します</Small>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade>
      </Container>

      <Container>
        <Fade right duration={1500} distance="50px">
          <TitleContainer>
            <Cap>生</Cap>
            <Big>産物の販売</Big>
          </TitleContainer>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <Small>生産した農作物を</Small>
          <Small>ECサイト等を通じて、一般販売します</Small>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade>
      </Container>
      <Container>
        <Fade right duration={1500} distance="50px">
          <TitleContainer>
            <Cap>情</Cap>
            <Big>報発信</Big>
          </TitleContainer>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <Small>農作物栽培に関するブログを作成し、</Small>
          <Small>定期的に発信します</Small>
        </Fade>
        <Fade right duration={1500} distance="50px">
          <ImgContainer>
            <Img
              src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
              alt="activity"
            ></Img>
          </ImgContainer>
        </Fade>
      </Container>
    </>
  )
}

export default Activity
